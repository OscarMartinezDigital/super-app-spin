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
  TransactionDetail: {
    id: number;
    entity: string;
    date: string;
    points: number;
    operation: string;
    transactionNo: string;
  };
  ChangePoints: undefined;
  ChangePointsStepOne: undefined;
  ChangePointsStepTwo: {points: number};
};

export type BenefitsProps = StackScreenProps<TabParamList, 'Benefits'>;

export type TransactionDetailProps = StackScreenProps<
  StackParamList,
  'TransactionDetail'
>;
export type StepTwoProps = StackScreenProps<
  StackParamList,
  'ChangePointsStepTwo'
>;
export type NavigationProps = StackNavigationProp<StackParamList>;
