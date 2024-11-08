import {FlatList, View} from 'react-native';
import {AppText} from '../../components/AppText';

import {MoodCard} from './components/MoodCard';
import {moods} from '../../data/moods';
import {useMoodsContext} from '../../contexts/MoodsContext';
import Toast from 'react-native-toast-message';

export const HomeScreen = () => {
  const {addMood} = useMoodsContext();
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Mood recorded 👍',
      autoHide: true,
      visibilityTime: 1000,
      swipeable: true,
    });
  };

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
            <MoodCard
              mood={mood}
              onPress={async mood => {
                await addMood({
                  mood,
                  timeStamp: new Date().toISOString(),
                });
                showToast();
              }}
            />
          )}
        />
      </View>
    </View>
  );
};
