import {moods} from '../../../data/moods';
import {useMoodAsyncStorage} from '../../../hooks/useMoodAsyncStorage';

interface IMoodStatistics {
  mood: Mood;
  moodCount: number;
  moodPercentage: number;
}

export const useMoodStatistics = () => {
  const {moods: storedMoods} = useMoodAsyncStorage();

  const totalMoods = storedMoods?.length ?? 0;
  const moodStatistics: IMoodStatistics[] =
    moods.map(mood => {
      const moodCount = storedMoods.filter(
        sm => sm.mood.title === mood.title,
      ).length;
      return {
        mood: mood,
        moodCount,
        moodPercentage: totalMoods !== 0 ? (moodCount / totalMoods) * 100 : 0, // Avoid division by zero, number divided by 0 will return NaN
      };
    }) ?? [];

  return {moodStatistics, totalMoods};
};
