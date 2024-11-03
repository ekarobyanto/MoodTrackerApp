import {useCallback, useEffect, useState} from 'react';
import {MoodPayload} from '../interfaces/mood_payload';
import {useAppAsyncStorage} from './useAppAsyncStorage';

export const useMoodAsyncStorage = () => {
  const {getData, storeData} = useAppAsyncStorage();
  const [moods, setMoods] = useState<MoodPayload[]>([]);

  const fetchMoods = useCallback(async () => {
    await getMoods().then(data => setMoods(data ?? []));
  }, []);

  useEffect(() => {
    fetchMoods();
  }, []);

  const addMood = async (mood: MoodPayload) => {
    await storeData('moods', [...moods, mood]);
    fetchMoods();
  };

  const getMoods = async () => getData('moods');

  return {moods, addMood, getMoods};
};
