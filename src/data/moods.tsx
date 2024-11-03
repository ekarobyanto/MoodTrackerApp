import {
  IconMoodHappy,
  IconMoodNeutral,
  IconMoodSad,
  IconMoodWrrr,
} from '@tabler/icons-react-native';

export const moods: Mood[] = [
  {
    title: 'Happy',
    icon: props => <IconMoodHappy {...props} />,
    primaryColor: '#FFCF30',
    backgroundColor: '#FFFAE4',
  },
  {
    title: 'Neutral',
    icon: props => <IconMoodNeutral {...props} />,
    primaryColor: '#7DE4EA',
    backgroundColor: '#E8FEFF',
  },
  {
    title: 'Sad',
    icon: props => <IconMoodSad {...props} />,
    primaryColor: '#4370F2',
    backgroundColor: '#E9EFFF',
  },
  {
    title: 'Stress',
    icon: props => <IconMoodWrrr {...props} />,
    primaryColor: '#FF2727',
    backgroundColor: '#FFE0E0',
  },
];
