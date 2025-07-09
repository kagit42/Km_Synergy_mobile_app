import React, { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ActivityIndicator,
  Text,
  StyleProp,
} from 'react-native';
import { SizeConfig } from '../utils/SizeConfig';
import { Colors, Fonts } from '../utils/constant/Theme';

interface CustomButtonProps {
  PressableStyle?: ViewStyle[];
  TextStyle?: TextStyle[];
  TextValue: string;
  OnPress?: () => void;
  LHSIcon?: ReactNode;
  RHSIcon?: ReactNode;
  LHSIconOnPress?: () => void;
  RHSIconOnPress?: () => void;
  mainstyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

export default function CustomButton({
  PressableStyle = [],
  TextStyle = [],
  TextValue,
  OnPress,
  LHSIcon,
  RHSIcon,
  LHSIconOnPress,
  RHSIconOnPress,
  mainstyle,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={OnPress}
      disabled={isLoading}
      style={StyleSheet.flatten([styles.buttonContainer, PressableStyle])}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <View style={styles.contentContainer}>
          {LHSIcon && (
            <Pressable onPress={LHSIconOnPress} hitSlop={10}>
              {LHSIcon}
            </Pressable>
          )}
          <Text style={StyleSheet.flatten([styles.buttonText, TextStyle])}>
            {TextValue}
          </Text>
          {RHSIcon && (
            <Pressable onPress={RHSIconOnPress} hitSlop={10}>
              {RHSIcon}
            </Pressable>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    // paddingHorizontal: SizeConfig.width * 3,
    borderRadius: SizeConfig.width * 3,
    backgroundColor: Colors.primary,
    height: SizeConfig.height * 6,
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: SizeConfig.width * 2,
  },
  buttonText: {
    color: Colors.white,
    fontSize: SizeConfig.fontSize * 4.5,
    fontFamily: Fonts.medium,
  },
});
