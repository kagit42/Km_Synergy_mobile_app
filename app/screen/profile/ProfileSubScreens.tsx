import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SizeConfig } from '../../utils/SizeConfig';
import { Colors, Fonts } from '../../utils/constant/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileSubScreens'>;

export const ProfileSubScreens = ({ navigation, route }: Props) => {
  let Data = route.params.data;
  let title = route.params.title;
  let bannerText = route.params.bannerText;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backBtn}
            >
              <Ionicons
                name="arrow-back"
                size={SizeConfig.width * 5}
                color={Colors.white}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}> {title}</Text>
          </View>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.gradient}>
              <View style={styles.contentRow}>
                <View style={styles.contentTextContainer}>
                  <View>
                    <Text style={styles.mainHeading}>
                      Share & Earn with SynergyKM
                    </Text>
                    <Text style={styles.description}>{bannerText}</Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('ReferFormScreen');
                    }}
                    style={styles.referButton}
                  >
                    <Text style={styles.referButtonText}>Refer</Text>
                  </Pressable>
                </View>
                <Image
                  source={require('../../assets/image/profile/profileBannerImg.png')}
                  style={styles.bannerImage}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  borderTopRightRadius: SizeConfig.width * 4,
                  borderTopLeftRadius: SizeConfig.width * 4,
                  paddingVertical: SizeConfig.height * 3,
                  paddingHorizontal: SizeConfig.width * 4,
                }}
              >
                <View style={{ gap: SizeConfig.height * 2 }}>
                  <FlatList
                    data={Data}
                    keyExtractor={(_, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.carouselContent}
                    renderItem={({ item, index }) => (
                      <View>
                        <View style={styles.carouselCard}>
                          {index % 2 == 0 && (
                            <Image
                              source={item.img}
                              style={styles.carouselImage}
                            />
                          )}
                          <View style={{ gap: SizeConfig.width }}>
                            <Text style={styles.carouselTitle}>
                              {item.title}
                            </Text>
                            <Text style={styles.carouselDetail}>
                              {item.detail}
                            </Text>
                          </View>

                          {index % 2 != 0 && (
                            <Image
                              source={item.img}
                              style={styles.carouselImage}
                            />
                          )}
                        </View>
                        {index != Data.length - 1 && index % 2 == 0 && (
                          <Image
                            source={require('../../assets/image/profile/curvDashUp.png')}
                            style={{
                              width: '100%',
                              height: SizeConfig.height * 7,
                              // backgroundColor : 'red'
                            }}
                          />
                        )}

                        {index != Data.length - 1 && index % 2 != 0 && (
                          <Image
                            source={require('../../assets/image/profile/curvDashDown.png')}
                            style={{
                              width: '100%',
                              height: SizeConfig.height * 7,
                              // backgroundColor : 'red'
                            }}
                          />
                        )}
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    width: '100%',
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 4,
    paddingVertical: SizeConfig.height * 2.5,
    backgroundColor: Colors.primary,
  },
  backBtn: {
    marginRight: SizeConfig.width * 3,
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.width * 4,
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
    marginRight: SizeConfig.width * 6,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 4,
    paddingVertical: SizeConfig.height * 3,
  },
  contentTextContainer: {
    width: SizeConfig.width * 50,
    gap: SizeConfig.height * 2,
  },
  mainHeading: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.width * 3.54,
    color: Colors.white,
    marginBottom: SizeConfig.height * 0.5,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.width * 3,
    color: Colors.white,
  },
  bannerImage: {
    width: SizeConfig.width * 40,
    height: SizeConfig.width * 40,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: Colors.white,
    width: SizeConfig.width * 80,
    padding: SizeConfig.width * 4,
    borderRadius: SizeConfig.width * 2,
    alignSelf: 'center',
    elevation: 5,
    gap: SizeConfig.height,
    marginTop: SizeConfig.height * 2,
    zIndex: 3,
  },
  cardHeading: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.width * 3.5,
    color: Colors.black,
  },
  cardText: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.width * 3,
    color: Colors.black,
  },
  referButton: {
    width: SizeConfig.width * 30,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    backgroundColor: '#3DB17C',
    borderRadius: SizeConfig.width * 2,
    paddingVertical: SizeConfig.height,
  },
  referButtonText: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.width * 3.5,
    color: Colors.white,
  },
  carouselContent: {
    justifyContent: 'space-between',
    gap: SizeConfig.height * 2,
  },
  carouselCard: {
    // padding: SizeConfig.width * 2,
    width: '100%',
    flexDirection: 'row',
    gap: SizeConfig.width * 4,
    // backgroundColor : 'green'
  },
  carouselImage: {
    width: SizeConfig.width * 18,
    height: SizeConfig.width * 18,
    resizeMode: 'contain',
  },
  carouselTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.3,
    color: 'black',
  },
  carouselDetail: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3.2,
    color: '#555',
    width: SizeConfig.width * 65,
  },
});
