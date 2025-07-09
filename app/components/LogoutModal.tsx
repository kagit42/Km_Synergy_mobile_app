import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SizeConfig } from '../utils/SizeConfig';
import { Colors, Fonts } from '../utils/constant/Theme';
import Modal from 'react-native-modal';
import CustomButton from './CustomButton';
import { Dispatch } from 'react';

export const LogoutModal = ({
  isLogoutModalVisible,
  setLogoutModalVisible,
  handleLogout,
}: {
  isLogoutModalVisible: boolean;
  setLogoutModalVisible: Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
}) => {
  return (
    <Modal
      hideModalContentWhileAnimating={true}
      backdropColor={'black'}
      isVisible={isLogoutModalVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={600}
      backdropOpacity={0.2}
      avoidKeyboard={true}
      style={{ justifyContent: 'flex-start', margin: 0 }}
      coverScreen={true}
    >
      <TouchableWithoutFeedback onPress={() => setLogoutModalVisible(false)}>
        <View style={styles.ModalMainComp}>
          <View style={styles.ModalSubMainComp}>
            <Image
              source={require('../assets/image/profile/logoutModal.png')}
              style={{
                width: SizeConfig.width * 40,
                height: SizeConfig.width * 40,
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
            <Text style={styles.ModalText}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.ModalBtnComp}>
              <CustomButton
                TextValue="Cancel"
                TextStyle={[styles.ModalBtnText]}
                OnPress={() => {
                  setLogoutModalVisible(false);
                }}
                PressableStyle={{
                  height: SizeConfig.height * 6,
                  flex: 1,
                }}
              />
              <CustomButton
                TextValue="Logout"
                TextStyle={[styles.ModalBtnText]}
                OnPress={() => {
                  handleLogout();
                }}
                PressableStyle={{
                  height: SizeConfig.height * 6,
                  flex: 1,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalMainComp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalSubMainComp: {
    backgroundColor: Colors.white,
    padding: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 3,
    gap: SizeConfig.height * 2,
    width: SizeConfig.width * 80,
  },
  ModalImg: {
    height: SizeConfig.width * 20,
    width: SizeConfig.width * 20,
    alignSelf: 'center',
  },
  ModalText: {
    color: Colors.black,
    fontSize: SizeConfig.fontSize * 4.3,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    alignSelf: 'center',
    width : SizeConfig.width * 60
  },
  ModalBtnComp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: SizeConfig.height * 7,
    gap: SizeConfig.width * 3,
  },
  ModalBtnText: {
    color: Colors.white,
    fontSize: SizeConfig.width * 3.5,
  },
});
