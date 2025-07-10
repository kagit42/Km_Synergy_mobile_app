import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SizeConfig } from '../../utils/SizeConfig';
import { Colors, Fonts } from '../../utils/constant/Theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

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



const eligible = [
  {
    key: 'Service',
    image: require('../../assets/image/home/service.png'),
  },
  {
    key: 'Support',
    image: require('../../assets/image/home/support.png'),
  },
  {
    key: 'Tech Team',
    image: require('../../assets/image/home/techTeam.png'),
  },
  {
    key: 'Workshop',
    image: require('../../assets/image/home/workshop.png'),
  },
];



const CAROUSEL_DATA = [
  require('../../assets/image/home/carousel1.png'),
  require('../../assets/image/home/carousel2.png'),
  require('../../assets/image/home/carousel3.png'),
  require('../../assets/image/home/carousel4.png'),
];

const carouselImg = () => (
  <View
    style={{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Carousel
      loop
      autoPlay
      autoPlayInterval={4000}
      width={SizeConfig.width * 93}
      height={SizeConfig.height * 15}
      data={CAROUSEL_DATA}
      scrollAnimationDuration={1000}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: SizeConfig.width / 10 * 2.2,
        parallaxScrollingOffset: SizeConfig.width * 11,
      }}
      renderItem={({ item }) => (
        <Image
          source={item}
          resizeMode="stretch"
          style={{
            width: SizeConfig.width * 93,
            height: SizeConfig.height * 15,
            borderRadius: SizeConfig.width * 3,
          }}
        />
      )}
    />
  </View>
);

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Background,
        // marginBottom: SizeConfig.height * 15,
      }}
    >
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SizeConfig.width * 5,
            borderBottomRightRadius: SizeConfig.width * 5,
            borderBottomLeftRadius: SizeConfig.width * 5,
            backgroundColor: 'white',
            paddingHorizontal: SizeConfig.width * 4,
            elevation: 5,
          }}
        >
          <Image
            source={require('../../assets/image/global/kalyani_light.png')}
            style={styles.avatar}
          />
          <Image
            source={require('../../assets/image/global/Maruti_Suzuki.png')}
            style={styles.avatar}
          />
        </View>

        

        {/* </View> */}
        <ScrollView
          contentContainerStyle={{
            gap: SizeConfig.width * 4,
            paddingTop: SizeConfig.height * 3,
            paddingHorizontal: SizeConfig.width * 4,
          }}
          showsVerticalScrollIndicator={false}
        >
          <LinearGradient
            colors={[Colors.primary, '#6DD5ED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: SizeConfig.width * 5,
            }}
          >
            <Pressable
              style={{
                // backgroundColor: '#d6efd9',
                padding: SizeConfig.width * 3,
                borderRadius: SizeConfig.width * 5,
                flexDirection: 'row',
              }}
              onPress={() => {
                navigation.navigate('ReferFormScreen');
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  gap: SizeConfig.width * 2,
                  alignItems: 'flex-start',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.medium,
                    fontSize: SizeConfig.fontSize * 3.5,
                    color: 'white',
                    // fontWeight : 500
                  }}
                >
                  Earn Instantly
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.regular,
                    fontSize: SizeConfig.fontSize * 3,
                    color: 'white',
                    // width : SizeConfig.width * 50
                  }}
                >
                  Start earning coins right away by completing quick and easy
                  surveys made just for you
                </Text>
                <Pressable
                  style={{
                    backgroundColor: '#0077b6',
                    width: SizeConfig.width * 20,
                    padding: SizeConfig.width * 2,
                    borderRadius: SizeConfig.width * 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // paddingHorizontal: SizeConfig.width * 2,
                  }}
                  onPress={() => {
                    navigation.navigate('ReferFormScreen');
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Fonts.regular,
                      fontSize: SizeConfig.fontSize * 3.5,
                      color: 'white',
                    }}
                  >
                    Refer
                  </Text>
                </Pressable>
              </View>

              <Image
                source={require('../../assets/image/home/moneyBag.png')}
                style={{
                  width: SizeConfig.width * 35,
                  height: SizeConfig.width * 38,
                  resizeMode: 'contain',
                  zIndex: 0,
                }}
              />
            </Pressable>
          </LinearGradient>

          <View
            style={{
              gap: SizeConfig.width * 4,
              marginTop: SizeConfig.width * 2,
            }}
          >
            <Text style={styles.sectionTitle}>Eligible Participants</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: SizeConfig.width * 1,
                justifyContent: 'space-around',
              }}
            >
              {
                <FlatList
                  data={eligible}
                  horizontal
                  contentContainerStyle={{ gap: SizeConfig.width * 7 }}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: SizeConfig.height,
                      }}
                    >
                      <View
                        style={{
                          // height: SizeConfig.width * 22,
                          backgroundColor: 'white',
                          borderRadius: (SizeConfig.width * 20) / 2,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: SizeConfig.width * 3,
                          width: SizeConfig.width * 17,
                          height: SizeConfig.width * 17,
                          elevation: 1,
                          shadowColor: 'black',
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            width: SizeConfig.width * 12,
                            height: SizeConfig.width * 12,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          fontFamily: Fonts.medium,
                          fontSize: SizeConfig.width * 3,
                          color: 'black',
                        }}
                      >
                        {item.key}
                      </Text>
                    </View>
                  )}
                />
              }
            </View>
          </View>

          <View
            style={{
              gap: SizeConfig.width * 5,
              paddingVertical: SizeConfig.height * 2,
            }}
          >
            <Text style={styles.sectionTitle}>How It Works</Text>

            <Text
              style={{
                fontFamily: Fonts.regular,
                fontSize: SizeConfig.fontSize * 3,
                color: '#555',
                textAlign: 'center',
                paddingHorizontal: SizeConfig.width * 15,
              }}
            >
              Follow these simple steps to get started with your vehicle
              vealuation
            </Text>
            <FlatList
              data={howItWorks}
              keyExtractor={(_, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carouselContent}
              renderItem={({ item }) => (
                <View style={styles.carouselCard}>
                  <Image source={item.img} style={styles.carouselImage} />
                  <View style={{ gap: SizeConfig.width }}>
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                    <Text style={styles.carouselDetail}>{item.detail}</Text>
                  </View>
                </View>
              )}
            />
          </View>

          <View style={{ gap: SizeConfig.width * 2 }}>{carouselImg()}</View>

          <View
            style={{
              gap: SizeConfig.width * 4,
              paddingBottom: SizeConfig.height * 15,
            }}
          >
            <Text style={styles.sectionTitle}>What to Expect</Text>
            <View style={styles.stepperWrap}>
              {whyUs.map((step, index) => (
                <View key={index} style={styles.stepperRow}>
                  {index % 2 == 0 && (
                    <View style={styles.stepperIconWrap}>
                      <Image
                        source={step.img}
                        style={{
                          width: SizeConfig.width * 20,
                          height: SizeConfig.width * 20,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  )}
                  <View style={{ flex: 1, gap: SizeConfig.height }}>
                    <Text style={styles.stepperTitle}>{step.title}</Text>
                    <Text style={styles.stepperDetail}>{step.detail}</Text>
                  </View>

                  {index % 2 != 0 && (
                    <View style={styles.stepperIconWrap}>
                      <Image
                        source={step.img}
                        style={{
                          width: SizeConfig.width * 20,
                          height: SizeConfig.width * 20,
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: SizeConfig.width * 30,
    height: SizeConfig.width * 10,
    resizeMode: 'contain',
    // backgroundColor : 'red'
  },
  sectionTitle: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    fontSize: SizeConfig.fontSize * 4,
    // backgroundColor : 'red'
  },
  carouselContent: {
    // paddingBottom: 8,
    paddingVertical: SizeConfig.width * 1,
    paddingHorizontal: SizeConfig.width * 1,
    justifyContent: 'space-between',
    gap: SizeConfig.width * 3,
  },
  carouselCard: {
    borderRadius: SizeConfig.width * 3,
    padding: SizeConfig.width * 4,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: SizeConfig.width * 4,
    elevation: 1,
    shadowColor: 'black',
  },
  carouselImage: {
    width: SizeConfig.width * 12,
    height: SizeConfig.width * 12,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  carouselTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.3,
    color: 'black',
    marginBottom: 2,
  },
  carouselDetail: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3.2,
    color: '#555',
    width: SizeConfig.width * 65,
  },
  stepperWrap: {
    paddingHorizontal: SizeConfig.width * 5,
    gap: SizeConfig.height * 5,
  },
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SizeConfig.width * 3,
  },
  stepperIconWrap: {
    alignItems: 'center',
  },

  stepperTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.width * 3.5,
    color: Colors.primary,
  },
  stepperDetail: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.width * 3,
    color: Colors.text_Secondary,
  },

  referrerName: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.5,
    color: Colors.text_Primary,
  },

  statusBadge: {
    paddingHorizontal: SizeConfig.width * 2,
    paddingVertical: SizeConfig.width * 1,
    borderRadius: SizeConfig.width * 1,
    borderWidth: 1,
  },
  statusText: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 2.3,
  },
});
