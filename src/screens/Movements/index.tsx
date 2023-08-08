import React, {useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import TabBar from '../../components/TabBar/TabBar';
import HistoryList from './components/HistoryList';
import {HistoryBySection} from './fakeData';

const AllRoute = () => {
  // const { all } = useHistoryTransaction();
  return (
    <View style={styles.routeContainer}>
      <HistoryList listBySections={HistoryBySection} />
    </View>
  );
};

const EarnedRoute = () => {
  // const { earned } = useHistoryTransaction();
  return (
    <View style={styles.routeContainer}>
      <HistoryList listBySections={HistoryBySection} />
    </View>
  );
};

const UsedRoute = () => {
  // const { used } = useHistoryTransaction();
  return (
    <View style={styles.routeContainer}>
      <HistoryList listBySections={HistoryBySection} />
    </View>
  );
};

const renderScene = SceneMap({
  all: AllRoute,
  earned: EarnedRoute,
  used: UsedRoute,
});

const TabRoutes = [
  {key: 'all', title: 'Todos'},
  {key: 'earned', title: 'Ganados'},
  {key: 'used', title: 'Usados'},
];

export default function MovementsScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(TabRoutes);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => <TabBar tabStyle={styles.tab} {...props} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  routeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  tab: {
    width: 110,
  },
});
