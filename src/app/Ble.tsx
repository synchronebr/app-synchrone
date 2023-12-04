import { Platform, View, Text, PermissionsAndroid } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from 'react-native-ble-plx';
import { useState } from 'react';
// import DeviceInfo from 'react-native-device-info';
// import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Ble() {
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const bleManager = new BleManager();

  // const requestPermissions = async (cb: VoidCallback) => {
  //   if (Platform.OS === 'android') {
  //     const apiLevel = await DeviceInfo.getApiLevel();

  //     if (apiLevel < 31) {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message: 'Bluetooth Low Energy requires Location',
  //           buttonNeutral: 'Ask Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       cb(granted === PermissionsAndroid.RESULTS.GRANTED);
  //     } else {
  //       const result = await requestMultiple([
  //         PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
  //         PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
  //         PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  //       ]);

  //       const isGranted =
  //         result['android.permission.BLUETOOTH_CONNECT'] ===
  //           PermissionsAndroid.RESULTS.GRANTED &&
  //         result['android.permission.BLUETOOTH_SCAN'] ===
  //           PermissionsAndroid.RESULTS.GRANTED &&
  //         result['android.permission.ACCESS_FINE_LOCATION'] ===
  //           PermissionsAndroid.RESULTS.GRANTED;

  //       cb(isGranted);
  //     }
  //   } else {
  //     cb(true);
  //   }
  // };

  // const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
  // devices.findIndex(device => nextDevice.id === device.id) > -1;

  const scanForPeripherals = () =>
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
      }
      if (device && device.name?.includes('CorSense')) {
        console.log(device);
  //       setAllDevices((prevState: Device[]) => {
  //         if (!isDuplicteDevice(prevState, device)) {
  //           return [...prevState, device];
  //         }
  //         return prevState;
  //       });
      }
    });

  return (
    <View className="flex-1 justify-center items-center bg-blue-800 dark:bg-slate-900 text-zinc-50">
        <TouchableOpacity
            onPress={scanForPeripherals}
            className='border rounded-sm border-zinc-50 p-2 overflow-hidden top-6'
          >
          <Text className='text-zinc-50'>Procurar devices</Text>
        </TouchableOpacity>
    </View>
  );
}