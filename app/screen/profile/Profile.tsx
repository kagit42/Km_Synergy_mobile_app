import {
  Image,
  ImageBackground,
  ImageProps,
  Pressable,
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

type ProfileType = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const Profile = ({ navigation }: ProfileType) => {
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

  const ProfileSubScreenTab = ({
    requireURL,
    text,
    onPress,
  }: {
    requireURL: ImageProps;
    text: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity onPress={onPress} style={styles.tabComp}>
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
      <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
      <View style={styles.subComp}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg?semt=ais_hybrid&w=740',
          }}
          style={styles.avatar}
        />
        <View style={{ gap: SizeConfig.width * 0.5 }}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.mediaContact}>+91 1234567890</Text>
          <Text style={styles.mediaContact}>abc@gmail.com</Text>
        </View>
      </View>
      <View style={{ gap: SizeConfig.width * 3 }}>
        {/* <ImageBackground
          source={require('../../assets/image/profile/rewardsBanner.png')}
          style={styles.summaryCard}
          resizeMode="stretch"
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: SizeConfig.width * 3,
              paddingHorizontal: SizeConfig.width * 3,
            }}
          >
            <View style={{ flex: 1, gap: SizeConfig.width * 3 }}>
              <Text style={styles.summaryTitle}>Your Referral Summary</Text>
              <View style={{ flexDirection: 'row', gap: SizeConfig.width }}>
                <View style={styles.summaryStatBox}>
                  <Text style={styles.summaryStatValue}>12</Text>
                  <Text style={styles.summaryStatLabel}>Referrals</Text>
                </View>
                <View style={styles.summaryStatBox}>
                  <Text style={styles.summaryStatValue}>₹ 2,500</Text>
                  <Text style={styles.summaryStatLabel}>Rewards</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('ReferralSummary');
            }}
            style={styles.summaryActionBtn}
          >
            <Text style={styles.summaryActionText}>View Details</Text>
            <Ionicons name="chevron-forward" size={18} color="#fff" />
          </TouchableOpacity>
        </ImageBackground> */}

        <View
          style={{ borderBottomWidth: 0.3, borderBottomColor: Colors.border }}
        />

        <View style={{ gap: SizeConfig.width * 3 }}>
          <ProfileSubScreenTab
            onPress={() => {
              navigation.navigate('HowItworks', {
                data: howItWorks,
                title: 'How It Works',
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
              });
            }}
            text="Eligible Participants"
            requireURL={require('../../assets/image/profile/gears.png')}
          />

          <ProfileSubScreenTab
            onPress={() => {
              navigation.navigate('HowItworks', {
                data: whyUs,
                title: 'Why Us',
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
              navigation.navigate('AboutUs');
            }}
            text="Logout"
            requireURL={require('../../assets/image/profile/logout.png')}
          />
        </View>
      </View>
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
    backgroundColor: '#fafafa',
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
    borderRadius: (SizeConfig.width * 20) / 2,
  },
  name: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 4.9,
    color: Colors.text_Secondary,
    textAlign: 'center',
  },
  mediaContact: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3.5,
    color: Colors.text_Secondary,
    textAlign: 'center',
  },
});
