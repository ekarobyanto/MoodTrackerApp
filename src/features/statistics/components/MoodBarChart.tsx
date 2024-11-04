import {View} from 'react-native';

import {MoodStatistics} from '../interface/mood_statistics';
import {BarChart} from 'react-native-gifted-charts';
import Monicon from '@monicon/native';

export const MoodBarChart: React.FC<{
  statistics: MoodStatistics[];
}> = props => {
  return (
    <View>
      <View
        style={{
          paddingTop: 20,
          borderRadius: 4,
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
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            marginBottom: -25,
            marginRight: 20,
          }}>
          <BarChart
            hideRules
            hideYAxisText
            hideAxesAndRules
            spacing={0}
            barWidth={70}
            height={200}
            barMarginBottom={10}
            barBorderTopLeftRadius={8}
            barBorderTopRightRadius={8}
            data={props.statistics.map(stat => ({
              value: stat.moodCount,
              frontColor: stat.mood.primaryColor,
              topLabelComponent: () => (
                <Monicon
                  size={30}
                  name={stat.mood.icon}
                  color={stat.mood.primaryColor}
                />
              ),
            }))}
          />
        </View>
      </View>
    </View>
  );
};
