import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import appJson from '../../../app.json';
import { Text } from 'react-native';
import { Colors, Fonts } from '../../utils/constant/Theme';
import { SizeConfig } from '../../utils/SizeConfig';

const AboutUs = () => {
  const currentYear = new Date().getFullYear();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      {/* Content */}
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/image/global/kalyani_light.png')}
          style={styles.logo}
        />

        <Text style={styles.text}>App Version : {appJson.version}</Text>
        <Text style={styles.text}>
          Kalyani Motors Pvt. Ltd. @ {currentYear} {'\n'} All Rights Reserved
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: SizeConfig.height * 10,
    width: SizeConfig.width * 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: SizeConfig.fontSize * 3.5,
    textAlign: 'center',
    color: Colors.black,
    marginVertical: SizeConfig.height * 1,
    fontFamily: Fonts.regular,
  },
});
