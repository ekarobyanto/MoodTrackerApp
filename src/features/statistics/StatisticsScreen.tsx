import {FlatList, View} from 'react-native';
import {StatsShowMode} from '../../enums/stats_show_mode';
import {MoodBarChart} from './components/MoodBarChart';
import {MoodPieChart} from './components/MoodPieChart';
import {useMoodStatistics} from './hooks/useMoodStatistics';
import {MoodStatisticCard} from './components/MoodStatisticCard';
import {useAppPreferenceContext} from '../../contexts/AppPreferenceContext';
import {useMoodsContext} from '../../contexts/MoodsContext';

export const StatisticsScreen = () => {
  const {storedMoods} = useMoodsContext();
  const {preference} = useAppPreferenceContext();
  const {moodStatistics} = useMoodStatistics({storedMoods});

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 10}}>
        {preference === StatsShowMode.BAR ? (
          <MoodBarChart />
        ) : (
          <MoodPieChart statistics={moodStatistics} />
        )}
      </View>

      <FlatList
        numColumns={2}
        data={moodStatistics}
        contentContainerStyle={{gap: 16, padding: 10}}
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
  );
};
