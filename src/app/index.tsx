import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import Logo from '../../assets/logo-white.png';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-800 dark:bg-slate-900 text-zinc-50">
      <StatusBar style="auto" />
      <View className='flex flex-row gap-2 align-middle items-center'>
        <Image source={Logo} />

        <Text className="scroll-m-20 text-4xl font-semibold tracking-tight text-zinc-50">Synchrone </Text>
      </View>
      <Link href="/QrCode" asChild>
        <TouchableOpacity
            className='border rounded-sm border-zinc-50 p-2 overflow-hidden top-6'
          >
          <Text className='text-zinc-50'>Ler QR Code</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Ble" asChild>
        <TouchableOpacity
            className='border rounded-sm border-zinc-50 p-2 overflow-hidden top-6'
          >
          <Text className='text-zinc-50'>Bluetooth</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}