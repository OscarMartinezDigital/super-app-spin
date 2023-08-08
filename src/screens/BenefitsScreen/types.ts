import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Movements: undefined;
  ChangePoints: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

// export type HomeProps = StackScreenProps<RootStackParamList, 'Movements'>;
// export type ProfileProps = StackScreenProps<RootStackParamList, 'ChangePoints'>;
