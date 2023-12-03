import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import Logo from '../../assets/logo-white.png';
import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrCode() {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState<boolean>();
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == `granted`);
    })();
  }

  useEffect(() => {
    askForCameraPermission();
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log(type, data);
  }

  if (hasPermission === null) {
    return (<></>)
  }

  if (hasPermission === false) {
    return (
    <View className="flex-1 justify-center items-center bg-blue-800 dark:bg-slate-900 text-zinc-50">
      <StatusBar style="auto" />
      <View className='flex flex-row gap-2 align-middle items-center'>
        <TouchableOpacity
            className='border rounded-sm border-zinc-50 p-2 overflow-hidden top-6'
            onPress={askForCameraPermission}
          >
          <Text className='text-zinc-50'>Liberar acesso a camera</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
  } 

  return (
    <View className="flex-1 justify-center items-center bg-blue-800 dark:bg-slate-900 text-zinc-50">
      <StatusBar style="auto" />
      <View className='flex flex-col gap-2 align-middle items-center'>
        {!scanned ? (
          <BarCodeScanner 
          onBarCodeScanned={(scanned ? undefined : handleBarCodeScanned)}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={{ height: 400, width: 400 }}
        />
        ) : null}
        <Text>{ scanned ? (<>{text}</>) : null }</Text>
      </View>
    </View>
  );
}