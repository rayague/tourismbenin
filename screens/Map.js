import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import MapComponentNative from '../mapComponents/MapComponentNative';
import MapComponentWeb from '../mapComponents/MapComponentWeb';


export default function Map() {
  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === 'web' ? <MapComponentWeb /> : <MapComponentNative />}
    </View>
  )
}

const styles = StyleSheet.create({})