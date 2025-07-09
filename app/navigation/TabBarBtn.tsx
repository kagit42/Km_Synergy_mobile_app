import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../utils/constant/Theme';
import { SizeConfig } from '../utils/SizeConfig';

export default function TabBarButton({onPress}: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcons
        name="add"
        color={Colors.white}
        size={SizeConfig.width * 10}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SizeConfig.width * 15,
    height: SizeConfig.width * 15,
    borderRadius: (SizeConfig.width * 15) / 2,
    bottom: SizeConfig.height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});
