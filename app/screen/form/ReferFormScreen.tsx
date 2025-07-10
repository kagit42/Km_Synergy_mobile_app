import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SizeConfig } from '../../utils/SizeConfig';
import { Colors, Fonts } from '../../utils/constant/Theme';
import CustomInputComp from '../../components/CustomInputComp';
import LinearGradient from 'react-native-linear-gradient';
import { emojiRegex, ShowError, validate } from '../../utils/utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from 'react-native-modal-datetime-picker';

export const ReferFormScreen = ({ navigation }: any) => {
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [customerModel, setCustomerModel] = useState('');
  const [withExchange, setWithExchange] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleVariant, setVehicleVariant] = useState('');
  const [empId, setEmpId] = useState('');
  const [empMspin, setEmpMspin] = useState('');
  const [empName, setEmpName] = useState('');
  const [empNumber, setEmpNumber] = useState('');
  const [step, setStep] = useState(1);
  const [isOutletVisible, setIsOutletVisible] = useState(false);
  const [isChannelVisible, setIsChannelVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState({
    outLet: 'Bengalore',
    channel: 'NEXA',
  });
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const twentyYearsBack = new Date();
  twentyYearsBack.setFullYear(twentyYearsBack.getFullYear() - 18);

  const outletData = ['Bengalore', 'Mysore', 'Hyderabad', 'Chennai'];
  const channelData = ['NEXA', 'Arena'];

  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  const showDatePicker = (): void => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisibility(false);
  };

  const formatDate = (isoDateString: string): string => {
    const dateObj = new Date(isoDateString);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };

  const handleConfirmDate = (date: Date): void => {
    const age = calculateAge(date);
    if (age < 18) {
      setDate('');
      hideDatePicker();

      return ShowError('Please select Age greater than or equal to 18 years');
    } else {
      const formattedDate = formatDate(date.toISOString());
      setDate(formattedDate);

      hideDatePicker();
    }
  };

  const stepper = () => (
    <View style={styles.stepperWrap}>
      {[1, 2, 3].map((item, index) => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => setStep(item)}>
            <Ionicons
              name={
                step > item
                  ? 'checkmark-done-circle'
                  : 'checkmark-done-circle-outline'
              }
              size={SizeConfig.width * 8}
              color={step >= item ? Colors.primary : Colors.d8d5db}
            />
          </Pressable>
          {index < 2 && (
            <View
              style={{
                width: SizeConfig.width * 20,
                borderBottomColor:
                  step > index + 1 ? Colors.primary : Colors.d8d5db,
                borderBottomWidth: 1.5,
                // marginHorizontal: SizeConfig.width * 2,
              }}
            />
          )}
        </View>
      ))}
    </View>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.sectionLabel}>Customer Details</Text>
            <CustomInputComp
              InputOnTextChange={text => {
                let formated = validate(text).replace(emojiRegex, '');
                setCustomerName(formated);
              }}
              InputText={customerName}
              PlaceholderName="Full Name"
              inputWrapper={styles.inputMain}
              LableName="Full Name"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />
            <CustomInputComp
              InputOnTextChange={text => {
                let formated = text
                  .replace(/[^0-9]/g, '')
                  .replace(emojiRegex, '');
                setCustomerNumber(formated);
              }}
              InputText={customerNumber}
              PlaceholderName="Mobile Number"
              keyboardType="phone-pad"
              inputWrapper={styles.inputMain}
              LableName="Mobile Number"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />
            <CustomInputComp
              InputOnTextChange={setCustomerModel}
              InputText={customerModel}
              PlaceholderName="Preferred Model (optional)"
              inputWrapper={styles.inputMain}
              LableName="Preferred Model"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />
            <View style={styles.rowBetween}>
              <Text style={styles.checkboxLabel}>With Exchange</Text>
              <Switch
                value={withExchange}
                onValueChange={setWithExchange}
                style={{
                  borderColor: 'black',
                  borderWidth: 0.5,
                }}
                thumbColor={withExchange ? Colors.primary : Colors.d8d5db}
                trackColor={{
                  true: Colors.lightBorder,
                  false: Colors.lightBorder,
                }}
              />
            </View>
          </>
        );
      case 2:
        return (
          <>
            <Text style={styles.sectionLabel}>Vehicle Details</Text>
            <CustomInputComp
              InputOnTextChange={text => {
                const cleanedText = text
                  .replace(/[^a-zA-Z0-9]/g, '')
                  .replace(emojiRegex, '')
                setVehicleNumber(cleanedText);
              }}
              InputText={vehicleNumber}
              PlaceholderName="Vehicle Number"
              inputWrapper={styles.inputMain}
              LableName="Vehicle Number"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />
            <CustomInputComp
              InputOnTextChange={setVehicleModel}
              InputText={vehicleModel}
              PlaceholderName="Vehicle Model"
              inputWrapper={styles.inputMain}
              LableName="Vehicle Model"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />

            <CustomInputComp
              InputOnTextChange={setVehicleVariant}
              InputText={vehicleVariant}
              PlaceholderName="Variant"
              inputWrapper={styles.inputMain}
              LableName="Variant"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />

            <TouchableOpacity onPress={showDatePicker}>
              <CustomInputComp
                InputOnTextChange={date => setDate(date)}
                InputText={date}
                PlaceholderName="Preferred Date"
                LHSIcon={
                  <Ionicons
                    name="calendar-outline"
                    size={SizeConfig.width * 5}
                    color={Colors.secondary}
                  />
                }
                MainCompStyle={{ flex: 1 }}
                editable={false}
                inputWrapper={styles.inputMain}
                LableName="Preferred Date"
                placeholderTextColor={Colors.secondary}
                lableStyle={{ color: Colors.Color_2d3142 }}
              />

              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
                maximumDate={twentyYearsBack}
                minimumDate={new Date(1900, 0, 1)}
              />
            </TouchableOpacity>
          </>
        );
      case 3:
        return (
          <>
            <Text style={styles.sectionLabel}>Employee Details</Text>
            <CustomInputComp
              InputOnTextChange={text => {
                let formated = validate(text).replace(emojiRegex, '');
                setEmpName(formated);
              }}
              InputText={empName}
              PlaceholderName="Employee Name"
              // MainCompStyle={styles.inputMain}
              inputWrapper={styles.inputMain}
              LableName="Employee Name"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />
            <CustomInputComp
              InputOnTextChange={text => {
                let formated = text
                  .replace(/[^0-9]/g, '')
                  .replace(emojiRegex, '');
                setEmpNumber(formated);
              }}
              InputText={empNumber}
              PlaceholderName="Mobile Number"
              keyboardType="phone-pad"
              inputWrapper={styles.inputMain}
              LableName="Mobile Number"
              placeholderTextColor={Colors.secondary}
              lableStyle={{ color: Colors.Color_2d3142 }}
            />

            <View style={{ flexDirection: 'row', gap: SizeConfig.width * 4 }}>
              <CustomInputComp
                InputOnTextChange={setEmpId}
                InputText={empId}
                PlaceholderName="Employee ID"
                inputWrapper={styles.inputMain}
                LableName="Employee Id"
                placeholderTextColor={Colors.secondary}
                lableStyle={{ color: Colors.Color_2d3142 }}
              />

              <CustomInputComp
                InputOnTextChange={setEmpMspin}
                InputText={empMspin}
                PlaceholderName="MSPIN"
                inputWrapper={styles.inputMain}
                LableName="MSPIN"
                placeholderTextColor={Colors.secondary}
                lableStyle={{ color: Colors.Color_2d3142 }}
              />
            </View>
            {/* <View style={{ flexDirection: 'row', gap: SizeConfig.width * 4 }}> */}
            <View style={{ flex: 1 }}>
              <Text style={styles.dropDownLable}>Outlet</Text>
              <Pressable
                onPress={() => {
                  setIsOutletVisible(!isOutletVisible);
                }}
                style={styles.dropDownComp}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.dropDownInpText}>
                    {dropdownValue.outLet}
                  </Text>
                </View>
                <MaterialIcons
                  name={
                    isOutletVisible
                      ? 'keyboard-arrow-up'
                      : 'keyboard-arrow-down'
                  }
                  size={SizeConfig.width * 5}
                  color={Colors.primary}
                />
              </Pressable>

              <View
                style={[
                  styles.dropDownList,
                  {
                    display: isOutletVisible ? 'flex' : 'none',
                  },
                ]}
              >
                {outletData.map((outlet, index) => (
                  <Text
                    key={index}
                    onPress={() => {
                      setDropdownValue(prev => ({
                        ...prev,
                        outLet: outlet,
                      }));
                      setIsOutletVisible(false);
                    }}
                    style={styles.dropDownListText}
                  >
                    {outlet}
                  </Text>
                ))}
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.dropDownLable}>Channel</Text>
              <Pressable
                style={styles.dropDownComp}
                onPress={() => {
                  setIsChannelVisible(!isChannelVisible);
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.dropDownInpText}>
                    {dropdownValue.channel}
                  </Text>
                </View>
                <MaterialIcons
                  name={
                    isChannelVisible
                      ? 'keyboard-arrow-up'
                      : 'keyboard-arrow-down'
                  }
                  size={SizeConfig.width * 5}
                  color={Colors.primary}
                />
              </Pressable>

              <View
                style={[
                  styles.dropDownList,
                  { display: isChannelVisible ? 'flex' : 'none' },
                ]}
              >
                {channelData.map((channel, index) => (
                  <Text
                    key={index}
                    onPress={() => {
                      setDropdownValue(prev => ({
                        ...prev,
                        channel: channel,
                      }));
                      setIsChannelVisible(false);
                    }}
                    style={styles.dropDownListText}
                  >
                    {channel}
                  </Text>
                ))}
              </View>
            </View>
            {/* </View> */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.Background }}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <KeyboardAvoidingView style={{ flex: 1 }}> */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Ionicons
              name="arrow-back"
              size={SizeConfig.width * 5}
              color={Colors.black}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reffer a Customer</Text>
        </View>
        {/* <ScrollView> */}
        <View
          style={{
            paddingTop: SizeConfig.height * 4,
            gap: SizeConfig.width * 3,
          }}
        >
          {stepper()}

          <ScrollView
            contentContainerStyle={styles.formWrap}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: SizeConfig.width * 4,
                gap: SizeConfig.width * 2,
                borderRadius: SizeConfig.width * 4,
                paddingVertical: SizeConfig.height * 3,
                elevation: 3,
                shadowColor: 'black',
              }}
            >
              {renderStep()}
            </View>

            <View
              style={[
                styles.rowBetween,
                {
                  marginBottom: SizeConfig.height * 15,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  setStep(prev => (prev > 1 ? prev - 1 : prev));
                }}
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: Colors.d8d5db,
                  },
                ]}
                disabled={step === 1}
              >
                <Text style={styles.submitBtnText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setStep(prev => (prev < 3 ? prev + 1 : prev));
                }}
                style={styles.submitBtn}
              >
                <Text style={styles.submitBtnText}>
                  {step === 3 ? 'Submit' : 'Next'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/* </ScrollView> */}
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 4,
    paddingVertical: SizeConfig.height * 2.5,
    backgroundColor: '#fff',
    // borderBottomLeftRadius: SizeConfig.width * 4,
    // borderBottomRightRadius: SizeConfig.width * 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  backBtn: {
    marginRight: SizeConfig.width * 3,
    // padding: 4,
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.width * 4,
    color: Colors.black,
    flex: 1,
    textAlign: 'center',
    marginRight: SizeConfig.width * 6,
  },
  stepperWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SizeConfig.width * 2,
  },
  formWrap: {
    padding: SizeConfig.width * 4,
    // paddingBottom: 40,
    gap: SizeConfig.width * 6,
  },
  sectionLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.5,
    color: Colors.black,
    paddingBottom: SizeConfig.width * 2,
  },
  inputMain: {
    backgroundColor: Colors.white,
    borderRadius: SizeConfig.width * 2.5,
    borderWidth: 0.5,
    borderColor: Colors.lightBorder,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SizeConfig.width * 4,
  },
  checkboxLabel: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 3.5,
    color: Colors.black,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
    borderRadius: SizeConfig.width * 3,
    paddingVertical: SizeConfig.height * 1.5,
    alignItems: 'center',
    // elevation: 2,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    width: '45%',
  },
  submitBtnText: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 3.8,
    letterSpacing: 0.5,
  },
  dropDownComp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: SizeConfig.width * 2.5,
    borderWidth: 0.5,
    borderColor: Colors.lightBorder,
    paddingVertical: SizeConfig.height * 1.5,
    paddingHorizontal: SizeConfig.width * 4,
  },
  dropDownInpText: {
    fontSize: SizeConfig.fontSize * 3.2,
    color: 'black',
    fontFamily: Fonts.medium,
  },
  dropDownList: {
    backgroundColor: Colors.white,
    marginTop: SizeConfig.height * 2,
    padding: SizeConfig.width * 4,
    borderRadius: SizeConfig.width * 4,
    gap: SizeConfig.width * 2,
    borderWidth: 0.3,
    borderColor: Colors.lightBorder,
  },
  dropDownListText: {
    fontSize: SizeConfig.fontSize * 3.5,
    color: 'black',
    fontFamily: Fonts.regular,
  },
  dropDownLable: {
    fontSize: SizeConfig.fontSize * 3.5,
    marginBottom: SizeConfig.height * 0.8,
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
});
