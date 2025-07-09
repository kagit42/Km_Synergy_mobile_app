import React, { ReactNode } from 'react';
import {
  KeyboardType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { SizeConfig } from '../utils/SizeConfig';
import { Colors, Fonts } from '../utils/constant/Theme';

export default function CustomInputComp({
  LHSIcon,
  RHSIcon,
  PlaceholderName,
  InputOnTextChange,
  LHSIconOnPress,
  RHSIconOnPress,
  InputOnChange,
  MainCompStyle,
  LableName,
  InputText,
  SecureText,
  onSubmitEditing,
  refReference,
  Error,
  onPress,
  keyboardType,
  // autoCapitalize,
  inputStyle,
  maxLength,
  inputWrapper,
  placeholderTextColor = 'gray',
  lableStyle,
  editable = true,
}: {
  LHSIcon?: ReactNode;
  RHSIcon?: ReactNode;
  PlaceholderName?: string;
  InputOnTextChange: (e: string) => void;
  InputOnChange?: () => void;
  LHSIconOnPress?: () => void;
  RHSIconOnPress?: () => void;
  MainCompStyle?: ViewStyle;
  LableName?: string;
  InputText: string;
  SecureText?: boolean;
  onSubmitEditing?: () => void;
  refReference?: React.RefObject<TextInput | null>;
  Error?: string;
  onPress?: () => void;
  keyboardType?: KeyboardType;
  // autoCapitalize?: string;
  inputStyle?: any;
  maxLength?: number;
  inputWrapper?: ViewStyle;
  placeholderTextColor?: string;
  lableStyle?: TextStyle;
  editable?: boolean;
}) {
  return (
    <View style={[MainCompStyle , {flex :1}]}>
      {LableName?.length && (
        <Text style={[styles.label, lableStyle]}>{LableName}</Text>
      )}

      <View style={[styles.inputWrapper, inputWrapper]}>
        <Pressable onPress={LHSIconOnPress}>{LHSIcon}</Pressable>
        <TextInput
          allowFontScaling={false}
          ref={refReference}
          style={[styles.input, inputStyle]}
          placeholder={PlaceholderName}
          placeholderTextColor={placeholderTextColor}
          onChange={InputOnChange}
          onChangeText={InputOnTextChange}
          // autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          value={InputText}
          secureTextEntry={SecureText}
          onSubmitEditing={onSubmitEditing}
          onPress={onPress}
          keyboardType={keyboardType}
          editable={editable}
        />
        <Pressable onPress={RHSIconOnPress}>{RHSIcon}</Pressable>
      </View>
      {Error?.length && <Text style={styles.Error}>{Error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: SizeConfig.fontSize * 3.3,
    marginBottom: SizeConfig.height * 0.8,
    fontFamily: Fonts.medium,
  },
  inputWrapper: {
    borderWidth: 0.8,
    borderColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 2,
    borderRadius: SizeConfig.width * 4,
    gap: SizeConfig.width * 1,
   
  },
  input: {
    flex: 1,
    height: SizeConfig.height * 5.5,
    // borderColor: 'gray',
    fontSize: SizeConfig.fontSize * 3.2,
    color: Colors.black,
    fontFamily: Fonts.regular,
  },
  Error: {
    color: 'red',
    fontSize: SizeConfig.fontSize * 2.5,
    fontFamily: Fonts.medium,
    paddingTop: SizeConfig.height * 0.4,
  },
});
