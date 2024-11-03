import {moods} from '../../../data/moods';
import {MoodPayload} from '../../../interfaces/mood_payload';
import {MoodStatistics} from '../interface/mood_statistics';

export const useMoodStatistics = ({
  storedMoods,
}: {
  storedMoods: MoodPayload[];
}) => {
  const totalMoods = storedMoods?.length ?? 0;
  const moodStatistics: MoodStatistics[] =
    moods.map(mood => {
      const moodCount = storedMoods.filter(
        sm => sm.mood.title === mood.title,
      ).length;
      return {
        mood: mood,
        moodCount,
        moodPercentage: totalMoods !== 0 ? (moodCount / totalMoods) * 100 : 0, // Prevent division by zero, number divided by 0 will return NaN
      };
    }) ?? [];

  return {moodStatistics, totalMoods};
};
