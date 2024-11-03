import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAppAsyncStorage = () => {
  const errorMessage = 'Something went wrong';
  const storeData = async (key: string, data: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error(err);
      return errorMessage;
    }
  };

  const getData = async (key: string) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (err) {
      console.error(err);
      return errorMessage;
    }
  };

  return {storeData, getData};
};
