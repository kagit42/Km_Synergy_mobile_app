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
  profileuser,
  handleLogout,
}: {
  isLogoutModalVisible: boolean;
  setLogoutModalVisible: Dispatch<React.SetStateAction<boolean>>;
  profileuser: any;
  handleLogout: () => Promise<void>;
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
              source={require('../assets/image/profile/logout.png')}
              style={{
                width: SizeConfig.width * 40,
                height: SizeConfig.width * 40,
                alignSelf: 'center',
              }}
            />
            <Text style={styles.ModalText}>
              <Text
                style={{
                  color: Colors.primary,
                  fontFamily: Fonts.semiBold,
                }}
              >
                {profileuser?.name
                  ? profileuser.name.charAt(0).toUpperCase() +
                    profileuser.name.slice(1)
                  : 'Hello'}
              </Text>{' '}
              are you sure you want to logout?
            </Text>
            <View style={styles.ModalBtnComp}>
              <CustomButton
                TextValue="Cancel"
                TextStyle={[styles.ModalBtnText]}
                OnPress={() => {
                  setLogoutModalVisible(false);
                }}
                mainstyle={{
                  height: SizeConfig.height * 6,
                  width: '100%',
                }}
              />
              <CustomButton
                TextValue="Logout"
                TextStyle={[styles.ModalBtnText]}
                OnPress={() => {
                  handleLogout();
                }}
                mainstyle={{
                  height: SizeConfig.height * 6,
                  width: '100%',
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
    fontFamily: Fonts.medium,
    textAlign: 'center',
    alignSelf: 'center',
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
