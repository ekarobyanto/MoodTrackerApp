import {Button, View} from 'react-native';
import {StatsShowMode} from '../../../enums/stats_show_mode';
import {AppText} from '../../../components/AppText';

interface ISettingItem {
  title: string;
  value: StatsShowMode;
  disabled: boolean;
  onPress: (value: StatsShowMode) => void;
}

export const SettingItem: React.FC<ISettingItem> = ({
  title,
  onPress,
  value,
  disabled,
}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <AppText>{title}</AppText>
      <Button
        title={disabled ? 'Selected' : 'Select'}
        disabled={disabled}
        onPress={() => onPress(value)}
      />
    </View>
  );
};
