import {View} from 'react-native';

interface IMoodStatisticCard {
  mood: Mood;
  percentage: number;
}

export const MoodStatisticCard: React.FC<IMoodStatisticCard> = ({
  mood,
  percentage,
}) => {
  return <View />;
};
