import {View} from 'react-native';
import {AppText} from '../../components/AppText';
import {StatsShowMode} from '../../enums/stats_show_mode';
import {useAppPreferenceContext} from '../../contexts/AppPreferenceContext';
import {SettingItem} from './components/SettingItem';

export const SettingsScreen = () => {
  const {preference, setPreference} = useAppPreferenceContext();

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10, gap: 16}}>
      <AppText style={{fontWeight: 'bold', fontSize: 16}}>
        Select Statistics View Mode
      </AppText>
      <SettingItem
        title="Bar Chart"
        onPress={setPreference}
        value={StatsShowMode.BAR}
        disabled={preference === StatsShowMode.BAR}
      />
      <SettingItem
        title="Pie Chart"
        onPress={setPreference}
        value={StatsShowMode.PIE}
        disabled={preference === StatsShowMode.PIE}
      />
    </View>
  );
};
