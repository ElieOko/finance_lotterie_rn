import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Onboarding } from '../src/screens/Onboarding';
import Ticket from '@/src/components/Ticket';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Ticket/>
      {/* <Onboarding /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
