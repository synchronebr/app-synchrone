import { createContext, useContext, useEffect, useState } from "react";
import { BleManager, Device } from "react-native-ble-plx";
import { PermissionsAndroid, Platform } from "react-native";
import { Toast } from "react-native-toast-notifications";
import { Buffer } from "buffer";

import {
  BLEManagerProviderProps,
  IBLEManagerContextData,
} from "./types";

const BLEManagerContext = createContext({} as IBLEManagerContextData);

const serviceUUID = "ab0828b1-198e-4351-b779-901fa0e0371e";
const characteristicUUID = "4ac8a682-9736-4e5d-932b-e9b31405049c";

export function BLEManagerProvider({ children }: BLEManagerProviderProps) {
  const [isBluetoothOn, setIsBluetoothOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [manager] = useState(new BleManager());
  const [allowed, setAllowed] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

  async function sendCommand(
    device: Device,
    command: string,
  ) {
    try {
      const base64Command = Buffer.from(command).toString("base64");

      const response = await device.writeCharacteristicWithResponseForService(
        serviceUUID,
        characteristicUUID,
        base64Command
      );
      
      console.log(command)
      // console.log(response);
      // Toast.show("Comando enviado com sucesso!");
    } catch (error) {
      console.log(error);
      // Toast.show("Erro ao enviar comando");
    }
  }

  async function connectDevice(device: Device) {
    setConnecting(true);
    try {
      await device.connect();
      await device.discoverAllServicesAndCharacteristics();
      setConnectedDevice(device);
      console.log(`Conectado ao dispositivo: ${device.name}`);
    } catch (error) {
      console.log(error);
      Toast.show(
        `Falha ao conectar ao dispositivo Bluetooth ${device.name}. Verifique e tente novamente.`
      );
    } finally {
      setConnecting(false);
    }
  }

  async function scanDevices(bluetoothDeviceName: string) {
    try {
      setIsLoading(true);
      setConnectedDevice(null);

      await manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.log(error);
          Toast.show(
            "Erro ao escanear dispositivos Bluetooth. Verifique e tente novamente."
          );
          setIsLoading(false);
          return;
        }

        if (device.name === bluetoothDeviceName) {
          manager.stopDeviceScan();
          connectDevice(device);
        }
      });

      setTimeout(() => {
        manager.stopDeviceScan();
        setIsLoading(false);
        return false;
      }, 5000);
    } catch (error) {
      console.log(error);
      Toast.show(
        "Erro ao escanear dispositivos Bluetooth. Verifique e tente novamente."
      );
      setIsLoading(false);
    }
  }

  async function getPermissions(): Promise<boolean> {
    if (Platform.OS === "android") {
      const permissionsAccessFineLocation = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      const permissionsBluetoothScan = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN
      );
      const permissionsBluetoothConnect = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
      );

      if (
        permissionsAccessFineLocation === "granted" &&
        permissionsBluetoothScan === "granted" &&
        permissionsBluetoothConnect === "granted"
      ) {
        // scanDevices();
        setAllowed(true);
        return true;
      } else {
        Toast.show("Permissões necessárias não foram concedidas.");
        return false;
      }
    }
  }

  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
      if (state === "PoweredOn") {
        setIsBluetoothOn(true);
        // getPermissions();
        subscription.remove();
      } else {
        setIsBluetoothOn(false);
      }
    }, true);
    return () => {
      subscription.remove();
      manager.destroy();
    };
  }, [manager]);

  return (
    <BLEManagerContext.Provider
      value={{
        allowed,
        isBluetoothOn,
        isLoading,
        manager,
        connecting,
        connectedDevice,
        sendCommand,
        connectDevice,
        scanDevices,
        getPermissions,
      }}
    >
      {children}
    </BLEManagerContext.Provider>
  );
}

export function useBLEManager() {
  const context = useContext(BLEManagerContext);
  return context;
}