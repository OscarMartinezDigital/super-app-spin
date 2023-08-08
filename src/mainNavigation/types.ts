import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

export type TabParamList = {
  Home: undefined;
  Benefits: undefined;
  Wallet: undefined;
  Account: undefined;
};

export type StackParamList = {
  MainTabs: TabParamList;
  Movements: undefined;
  TransactionDetail: {id: number};
  ChangePoints: undefined;
};

export type BenefitsProps = StackScreenProps<TabParamList, 'Benefits'>;

export type TransactionDetailProps = StackScreenProps<
  StackParamList,
  'TransactionDetail'
>;
export type NavigationProps = StackNavigationProp<StackParamList>;
