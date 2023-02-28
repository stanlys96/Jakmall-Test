import React from 'react';
import { Host } from 'react-native-portal-host';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './src/components/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <Host>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Host>
    </SafeAreaProvider>
  );
}
