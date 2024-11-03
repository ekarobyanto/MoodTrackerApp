import {View} from 'react-native';
import {AppText} from '../../components/AppText';
import {useMoodAsyncStorage} from '../../hooks/useMoodAsyncStorage';

export const StatisticsScreen = () => {
  const {moods} = useMoodAsyncStorage();

  console.log(moods);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, gap: 16}}>
        <AppText
          style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          Statistics
        </AppText>
      </View>
    </View>
  );
};
