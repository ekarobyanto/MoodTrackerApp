import {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useAppAsyncStorage} from '../../hooks/useAppAsyncStorage';
import {AppText} from '../../components/AppText';
import {MoodCard} from '../home/components/MoodCard';
import {moods} from '../../data/moods';

export const StatisticsScreen = () => {
  const {getData} = useAppAsyncStorage();

  const [userMoods, setMoods] = useState();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, gap: 16}}>
        <AppText
          style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          Statistics
        </AppText>
        <FlatList
          data={moods}
          contentContainerStyle={{gap: 16}}
          renderItem={({item: mood}) => (
            <MoodCard mood={mood} onPress={mood => console.log(mood)} />
          )}
        />
      </View>
    </View>
  );
};
