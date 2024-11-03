import {useCallback, useEffect, useState} from 'react';
import {useAppAsyncStorage} from './useAppAsyncStorage';
import {StatsShowMode} from '../enums/stats_show_mode';

export const useAppPreferenceAsyncStorage = () => {
  const {getData, storeData} = useAppAsyncStorage();
  const [preference, setPreferenceState] = useState<StatsShowMode>();

  const getPreference = async () => {
    const preference: StatsShowMode = await getData('preference');
    return preference ?? StatsShowMode.PIE;
  };

  const initPreference = useCallback(async () => {
    const pref = await getPreference();
    setPreferenceState(pref);
  }, []);

  const setPreference = async (preference: StatsShowMode) => {
    await storeData('preference', preference);
    initPreference();
  };

  useEffect(() => {
    initPreference();
  }, []);

  return {getPreference, setPreference, preference};
};
