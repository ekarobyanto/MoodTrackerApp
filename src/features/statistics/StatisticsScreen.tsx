import {FlatList, View} from 'react-native';
import {StatsShowMode} from '../../enums/stats_show_mode';
import {MoodBarChart} from './components/MoodBarChart';
import {MoodPieChart} from './components/MoodPieChart';
import {useMoodStatistics} from './hooks/useMoodStatistics';
import {MoodStatisticCard} from './components/MoodStatisticCard';
import {useAppPreferenceContext} from '../../contexts/AppPreferenceContext';

export const StatisticsScreen = () => {
  const {preference} = useAppPreferenceContext();
  const {moodStatistics} = useMoodStatistics();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, gap: 16}}>
        {preference === StatsShowMode.BAR ? <MoodBarChart /> : <MoodPieChart />}
        <FlatList
          numColumns={2}
          data={moodStatistics ?? []}
          style={{paddingVertical: 10}}
          contentContainerStyle={{gap: 16}}
          columnWrapperStyle={{justifyContent: 'space-between', gap: 16}}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <MoodStatisticCard
                mood={item.mood}
                percentage={item.moodPercentage}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};
