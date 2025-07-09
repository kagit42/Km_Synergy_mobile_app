import {
  Image,
  ImageBackground,
  ImageProps,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, Fonts } from '../../utils/constant/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SizeConfig } from '../../utils/SizeConfig';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { LogoutModal } from '../../components/LogoutModal';

type ProfileType = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const Profile = ({ navigation }: ProfileType) => {
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = async () => {
    navigation.navigate('Home');
    setLogoutModalVisible(false);
  };

  useEffect(() => {
    return () => {
      setLogoutModalVisible(false);
    };
  }, []);

  const howItWorks = [
    {
      img: require('../../assets/image/home/customerDetail.png'),
      title: 'Fill the Customer Info',
      detail: 'Complete the customer information form with accurate details',
    },
    {
      img: require('../../assets/image/home/rm.png'),
      title: 'Lead Assignment to RM',
      detail: 'Your lead will be assigned to a dedicated Relationship Manager',
    },
    {
      img: require('../../assets/image/home/invoice.png'),
      title: 'Vehicle Invoice/Delivery',
      detail: 'Customer get the vehicle invoice and delivery details',
    },
    {
      img: require('../../assets/image/home/reward.png'),
      title: 'Reward Credit to Account',
      detail: 'Receive your reward points in your account',
    },
  ];

  const eligible = [
    {
      id: '1',
      title: 'Service Team',
      img: require('../../assets/image/home/service.png'),
      detail: 'Handles bookings, customer care, updates, and service delivery.',
    },
    {
      id: '2',
      title: 'Support Team',
      img: require('../../assets/image/home/support.png'),
      detail:
        'Manages operations, admin tasks, and internal team coordination.',
    },
    {
      id: '3',
      title: 'Technical Staff',
      img: require('../../assets/image/home/techTeam.png'),
      detail: 'Performs diagnostics, repairs, and ensures vehicle performance.',
    },
    {
      id: '4',
      title: 'Bodyshop',
      img: require('../../assets/image/home/workshop.png'),
      detail: 'Repairs body damage, painting, and restores vehicle appearance.',
    },
  ];

  const whyUs = [
    {
      key: 1,
      img: require('../../assets/image/home/whyUs1.png'),
      title: 'Selling Your Car, Simplified',
      detail:
        'Skip the hassle. We make selling your car quick, easy, and stress-free.',
    },
    {
      key: 2,
      img: require('../../assets/image/home/whyUs2.png'),
      title: 'Redefining Car Buying',
      detail:
        'Every car passes a 376-point check, so you buy with total confidence.',
    },
    {
      key: 3,
      img: require('../../assets/image/home/whyUs3.png'),
      title: 'Support Beyond the Sale',
      detail: 'We’re here for you even after you drive away. Always.',
    },
  ];

  const whyUsBannerText =
    'Sell your car easily with SynergyKM, buy with confidence, and get support even after the sale.';

  const howItWorksText =
    '  Refer your friends and family to SynergyKM and earn rewards for every successful referral.';

  const eligibleBannerText =
    'Eligible teams include Service, Support, Technical, and Bodyshop staff—each playing a key role in keeping SynergyKM running smoothly.';

  const ProfileSubScreenTab = ({
    requireURL,
    text,
    onPress,
  }: {
    requireURL: ImageProps;
    text: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.tabComp}
    >
      <View style={styles.tabCompRightPart}>
        <Image source={requireURL} style={styles.tabImg} />
        <Text style={styles.tabText}>{text}</Text>
      </View>

      <MaterialIcons
        name={'chevron-right'}
        size={SizeConfig.width * 5.5}
        color={Colors.primary}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainComp}>
      <StatusBar
        backgroundColor={Colors.Background}
        barStyle={'dark-content'}
      />
      <View style={styles.subComp}>
        <Image
          source={require('../../assets/image/profile/avatar.png')}
          style={styles.avatar}
        />
        <View style={{ gap: SizeConfig.width * 0.5 }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            Xyz Name
          </Text>
          <Text style={styles.mediaContact}>+91 1234567890</Text>
          <Text style={styles.mediaContact}>abc@gmail.com</Text>
        </View>
      </View>
      <View style={{ gap: SizeConfig.width * 3, flex: 1 }}>
        <View
          style={{ borderBottomWidth: 0.3, borderBottomColor: Colors.border }}
        />

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: SizeConfig.height * 15 }}
        >
          <View style={{ gap: SizeConfig.width * 3 }}>
            <ProfileSubScreenTab
              onPress={() => {
                navigation.navigate('HowItworks', {
                  data: howItWorks,
                  title: 'How It Works',
                  bannerText: howItWorksText,
                });
              }}
              text="How it works"
              requireURL={require('../../assets/image/profile/gears.png')}
            />

            <ProfileSubScreenTab
              onPress={() => {
                navigation.navigate('HowItworks', {
                  data: eligible,
                  title: 'Eligible Participants',
                  bannerText: eligibleBannerText,
                });
              }}
              text="Eligible Participants"
              requireURL={require('../../assets/image/profile/leadership.png')}
            />

            <ProfileSubScreenTab
              onPress={() => {
                navigation.navigate('HowItworks', {
                  data: whyUs,
                  title: 'Why Us',
                  bannerText: whyUsBannerText,
                });
              }}
              text="Why Us"
              requireURL={require('../../assets/image/profile/deal.png')}
            />

            <ProfileSubScreenTab
              onPress={() => {
                navigation.navigate('ReferralSummary');
              }}
              text="Referral History"
              requireURL={require('../../assets/image/profile/referralSummary.png')}
            />

            <ProfileSubScreenTab
              onPress={() => {
                navigation.navigate('AboutUs');
              }}
              text="About Us"
              requireURL={require('../../assets/image/profile/about.png')}
            />

            <ProfileSubScreenTab
              onPress={() => {
                setLogoutModalVisible(!isLogoutModalVisible);
              }}
              text="Logout"
              requireURL={require('../../assets/image/profile/logout.png')}
            />
          </View>
        </ScrollView>
      </View>

      {/* Logout Modal */}

      <LogoutModal
        isLogoutModalVisible={isLogoutModalVisible}
        setLogoutModalVisible={setLogoutModalVisible}
        handleLogout={handleLogout}
        profileuser={'Suhail'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    padding: SizeConfig.width * 3,
    gap: SizeConfig.width * 3,
  },
  summaryTitle: {
    fontFamily: Fonts.medium,
    color: '#fff',
    fontSize: SizeConfig.fontSize * 3.8,
    // marginBottom: 2,
  },
  summaryStatBox: {
    width: SizeConfig.width * 20,
  },
  summaryStatValue: {
    fontFamily: Fonts.semiBold,
    color: '#fff',
    fontSize: SizeConfig.fontSize * 4.3,
  },
  summaryStatLabel: {
    fontFamily: Fonts.regular,
    color: '#e0e6f7',
    fontSize: SizeConfig.width * 3.5,
  },
  summaryActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    // marginTop: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: SizeConfig.width * 3,
    padding: SizeConfig.width * 2,
    paddingHorizontal: SizeConfig.width * 4,
    gap: SizeConfig.width,
  },
  summaryActionText: {
    color: '#fff',
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 3.3,
    // marginRight: 4,
  },
  tabComp: {
    width: '100%',
    paddingVertical: SizeConfig.width * 3,
    borderRadius: SizeConfig.width * 3,
    backgroundColor: Colors.Color_F2F2F2,
    paddingHorizontal: SizeConfig.width * 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabCompRightPart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SizeConfig.width * 3,
  },
  tabImg: {
    width: SizeConfig.width * 10,
    height: SizeConfig.width * 10,
    resizeMode: 'contain',
    // tintColor: Colors.primary,
  },
  tabText: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 3,
    color: Colors.black,
  },
  mainComp: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingHorizontal: SizeConfig.width * 4,
    gap: SizeConfig.width * 5,
    paddingVertical: SizeConfig.width * 4,
  },
  subComp: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: SizeConfig.width * 2,
  },
  avatar: {
    width: SizeConfig.width * 20,
    height: SizeConfig.width * 20,
  },
  name: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 4.3,
    color: Colors.text_Secondary,
    textAlign: 'center',
    width: SizeConfig.width * 50,
  },
  mediaContact: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3,
    color: Colors.text_Secondary,
    textAlign: 'center',
    width: SizeConfig.width * 50,
  },
});
