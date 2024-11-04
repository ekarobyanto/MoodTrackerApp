import {View} from 'react-native';
import {MoodStatistics} from '../interface/mood_statistics';
import {PieChart} from 'react-native-gifted-charts';

export const MoodPieChart: React.FC<{
  statistics: MoodStatistics[];
}> = props => {
  return (
    <View
      style={{
        padding: 20,
        borderRadius: 4,
        minHeight: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
      }}>
      <PieChart
        strokeWidth={2}
        strokeColor="white"
        data={props.statistics.map(stat => ({
          value: stat.moodCount,
          color: stat.mood.primaryColor,
        }))}
      />
    </View>
  );
};
