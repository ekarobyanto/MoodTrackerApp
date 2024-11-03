import {Pressable} from 'react-native';
import {AppText} from '../../../components/AppText';

interface IMoodCard {
  mood: Mood;
  onPress: (Mood: Mood) => void;
}

export const MoodCard: React.FC<IMoodCard> = ({mood, onPress}) => {
  return (
    <Pressable
      onPress={() => onPress(mood)}
      style={onPress => {
        const isPressed = onPress.pressed;
        return {
          gap: 16,
          borderRadius: 8,
          paddingVertical: 16,
          paddingHorizontal: 24,
          alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 2,
          backgroundColor: mood.backgroundColor,
          borderColor: isPressed ? mood.primaryColor : 'transparent',
        };
      }}>
      <mood.icon size={40} color={mood.primaryColor} />
      <AppText
        style={{
          color: mood.primaryColor,
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        {mood.title}
      </AppText>
    </Pressable>
  );
};
