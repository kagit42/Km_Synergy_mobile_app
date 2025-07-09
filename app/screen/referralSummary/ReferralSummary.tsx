import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Colors, Fonts } from '../../utils/constant/Theme';
import { SizeConfig } from '../../utils/SizeConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import LinearGradient from 'react-native-linear-gradient';

// Types for our referral data
interface Referral {
  id: string;
  referrerName: string;
  referrerAvatar?: string;
  status: 'Pending' | 'Completed' | 'Failed';
  referredCustomer: string;
  date: string;
}

// Sample data - replace with your actual data source
const sampleReferrals: Referral[] = [
  {
    id: '1',
    referrerName: 'John Doe',
    referrerAvatar:
      'https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg?semt=ais_hybrid&w=740',
    status: 'Pending',
    referredCustomer: 'Sarah Wilson',
    date: '15/12/2024',
  },
  {
    id: '2',
    referrerName: 'Emily Johnson',
    status: 'Completed',
    referredCustomer: 'Mike Chen',
    date: '12/12/2024',
  },
  {
    id: '3',
    referrerName: 'David Smith',
    status: 'Failed',
    referredCustomer: 'Lisa Brown',
    date: '10/12/2024',
  },
  {
    id: '4',
    referrerName: 'Maria Garcia',
    status: 'Completed',
    referredCustomer: 'Tom Anderson',
    date: '08/12/2024',
  },
  {
    id: '5',
    referrerName: 'Alex Thompson',
    status: 'Pending',
    referredCustomer: 'Rachel Green',
    date: '05/12/2024',
  },
];

type FilterType = 'All' | 'Pending' | 'Completed' | 'Failed';
type ReferralTypeProp = NativeStackScreenProps<
  RootStackParamList,
  'ReferralSummary'
>;

export const ReferralSummary = ({ navigation }: ReferralTypeProp) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filteredReferrals = useMemo(() => {
    if (selectedFilter === 'All') {
      return sampleReferrals;
    }
    return sampleReferrals.filter(
      referral => referral.status === selectedFilter,
    );
  }, [selectedFilter]);

  const getStatusColors = (status: string) => {
    switch (status) {
      case 'Pending':
        return {
          backgroundColor: '#FEF3C7',
          textColor: '#D97706',
          borderColor: '#F59E0B',
        };
      case 'Completed':
        return {
          backgroundColor: '#D1FAE5',
          textColor: '#059669',
          borderColor: '#10B981',
        };
      case 'Failed':
        return {
          backgroundColor: '#FEE2E2',
          textColor: '#DC2626',
          borderColor: '#EF4444',
        };
      default:
        return {
          backgroundColor: '#F3F4F6',
          textColor: '#6B7280',
          borderColor: '#D1D5DB',
        };
    }
  };

  // Render status badge
  const renderStatusBadge = (status: string) => {
    const colors = getStatusColors(status);
    return (
      <View
        style={[
          styles.statusBadge,
          {
            backgroundColor: colors.backgroundColor,
            borderColor: colors.borderColor,
          },
        ]}
      >
        <Text style={[styles.statusText, { color: colors.textColor }]}>
          {status}
        </Text>
      </View>
    );
  };

  // Render filter button
  const renderFilterButton = (filter: FilterType) => {
    const isSelected = selectedFilter === filter;
    return (
      <TouchableOpacity
        style={[styles.filterButton, isSelected && styles.filterButtonActive]}
        onPress={() => setSelectedFilter(filter)}
      >
        <Text
          style={[
            styles.filterButtonText,
            isSelected && styles.filterButtonTextActive,
          ]}
        >
          {filter}
        </Text>
      </TouchableOpacity>
    );
  };

  // Render referral item
  const renderReferralItem = ({ item }: { item: Referral }) => (
    <LinearGradient
      colors={
        item.status == 'Pending'
          ? ['#FFF3CD', '#FFE29F']
          : item.status == 'Completed'
          ? ['#CFFDBC', '#A1E89B']
          : ['#FFD1D1', '#FF9999']
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.referralCard}
    >
      <View>
        <View style={styles.referralHeader}>
          <View style={styles.referrerInfo}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>
                {item.referrerName.charAt(0).toUpperCase()}
              </Text>
            </View>

            <View>
              <Text style={styles.referrerName}>{item.referrerName}</Text>
              <Text style={styles.referrerLabel}>Referrer</Text>
            </View>
          </View>
          {renderStatusBadge(item.status)}
        </View>

        <View style={styles.referralDetails}>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Referred Customer</Text>
              <Text style={styles.detailValue}>{item.referredCustomer}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

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
        <Text style={styles.headerTitle}>Filter by Status</Text>
      </View>

      {/* Filter Section */}
      <View style={styles.filterContainer}>
        <View style={styles.filterButtons}>
          {renderFilterButton('All')}
          {renderFilterButton('Pending')}
          {renderFilterButton('Completed')}
          {renderFilterButton('Failed')}
        </View>
      </View>

      {/* Results Count */}
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {filteredReferrals.length} referral
          {filteredReferrals.length !== 1 ? 's' : ''} found
        </Text>
      </View>

      {/* Referrals List */}
      <FlatList
        data={filteredReferrals}
        renderItem={renderReferralItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 4,
    paddingVertical: SizeConfig.height * 2.5,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  backBtn: {
    marginRight: SizeConfig.width * 3,
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.width * 4,
    color: Colors.black,
    flex: 1,
    textAlign: 'center',
    marginRight: SizeConfig.width * 6,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SizeConfig.width * 2,
  },
  greeting: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3.7,
    color: Colors.text_Secondary,
  },
  userName: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.3,
    color: Colors.primary,
  },
  screenTitle: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 4,
    color: Colors.text_Primary,
    marginTop: SizeConfig.width * 1,
  },
  filterContainer: {
    paddingHorizontal: SizeConfig.width * 4,
    paddingVertical: SizeConfig.width * 3,
  },
  filterTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.5,
    color: Colors.text_Primary,
    marginBottom: SizeConfig.width * 2,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SizeConfig.width * 2,
  },
  filterButton: {
    paddingHorizontal: SizeConfig.width * 4,
    paddingVertical: SizeConfig.width * 1.5,
    borderRadius: SizeConfig.width * 3,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterButtonText: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 2.8,
    color: Colors.text_Secondary,
  },
  filterButtonTextActive: {
    color: Colors.white,
  },
  resultsContainer: {
    paddingHorizontal: SizeConfig.width * 4,
    paddingBottom: SizeConfig.width * 2,
  },
  resultsText: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3.3,
    color: Colors.text_Secondary,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: SizeConfig.width * 4,
    paddingBottom: SizeConfig.width * 4,
    gap: SizeConfig.height * 2,
  },
  separator: {
    height: SizeConfig.width * 2,
  },
  referralCard: {
    backgroundColor: Colors.white,
    borderRadius: SizeConfig.width * 3,
    padding: SizeConfig.width * 4,
    elevation: 1,
    shadowColor: 'black',
  },
  referralHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SizeConfig.width * 3,
  },
  referrerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: SizeConfig.width * 3,
  },
  avatar: {
    width: SizeConfig.width * 30,
    height: SizeConfig.width * 10,
    resizeMode: 'contain',
  },
  avatarPlaceholder: {
    width: SizeConfig.width * 10,
    height: SizeConfig.width * 10,
    borderRadius: (SizeConfig.width * 10) / 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontFamily: Fonts.bold,
    fontSize: SizeConfig.width * 4,
    color: Colors.white,
  },

  referrerName: {
    fontFamily: Fonts.semiBold,
    fontSize: SizeConfig.fontSize * 3.5,
    color: Colors.text_Primary,
  },
  referrerLabel: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.fontSize * 3,
    color: Colors.text_Secondary,
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
  referralDetails: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.lightBorder,
    paddingTop: SizeConfig.width * 3,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontFamily: Fonts.regular,
    fontSize: SizeConfig.width * 3,
    color: Colors.text_Secondary,
    marginBottom: SizeConfig.width,
  },
  detailValue: {
    fontFamily: Fonts.medium,
    fontSize: SizeConfig.fontSize * 3,
    color: Colors.text_Primary,
  },
});
