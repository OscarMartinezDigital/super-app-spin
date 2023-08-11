import {ImageSourcePropType} from 'react-native';

export type LogoObj = {
  [key: string]: ImageSourcePropType;
};

export const LOGOS: LogoObj = {
  'Oxxo Gas': require('../../assets/logos/oxxo-gas.png'),
  Volaris: require('../../assets/logos/volaris.png'),
  Oxxo: require('../../assets/logos/oxxo.png'),
  'Doña Tota': require('../../assets/logos/tota.png'),
  'Smart Fit': require('../../assets/logos/smart-fit.png'),
  VIX: require('../../assets/logos/vix.png'),
};
