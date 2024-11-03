import {FlatList, ScrollView, View} from 'react-native';
import {AppText} from '../../components/AppText';

import {MoodCard} from './components/MoodCard';
import {moods} from '../../data/moods';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, gap: 16}}>
        <AppText style={{fontSize: 20, fontWeight: 'bold'}}>
          How are you feeling right now?
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
