import {Button, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {StatsShowMode} from '../../enums/stats_show_mode';
import {useAppPreferenceContext} from '../../contexts/AppPreferenceContext';

export const SettingsScreen = () => {
  const {preference, setPreference} = useAppPreferenceContext();

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10, gap: 16}}>
      <AppText style={{fontWeight: 'bold', fontSize: 16}}>
        Select Statistics View Mode
      </AppText>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText>Bar Chart</AppText>
        <Button
          title="Select"
          disabled={preference === StatsShowMode.BAR}
          onPress={() => setPreference(StatsShowMode.BAR)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText>Pie Chart</AppText>
        <Button
          title="Select"
          disabled={preference === StatsShowMode.PIE}
          onPress={() => setPreference(StatsShowMode.PIE)}
        />
      </View>
    </View>
  );
};
