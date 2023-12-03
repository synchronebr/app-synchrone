import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

import Logo from '../../assets/logo-white.png';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-800 dark:bg-slate-900 text-zinc-50">
      <View className='flex flex-row gap-2 align-middle items-center'>
        <Image source={Logo} />

        <Text className="scroll-m-20 text-4xl font-semibold tracking-tight text-zinc-50">Synchrone </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

