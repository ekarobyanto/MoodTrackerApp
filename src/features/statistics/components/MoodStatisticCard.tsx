import {View} from 'react-native';
import {AppText} from '../../../components/AppText';
import Monicon from '@monicon/native';

interface IMoodStatisticCard {
  mood: Mood;
  percentage: number;
}

export const MoodStatisticCard: React.FC<IMoodStatisticCard> = ({
  mood,
  percentage,
}) => {
  return (
    <View
      style={{
        borderRadius: 4,
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 12,
        boxShadow: [
          {offsetX: 0, offsetY: 2, blurRadius: 4, color: 'rgba(0, 0, 0, 0.1)'},
        ],
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}>
          <Monicon name={mood.icon} color={mood.primaryColor} size={32} />
          <AppText
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: mood.primaryColor,
            }}>
            {mood.title}
          </AppText>
        </View>
        <View style={{flex: 1}}>
          <AppText style={{textAlign: 'right'}}>
            {percentage.toFixed(0)}%
          </AppText>
        </View>
      </View>
    </View>
  );
};
