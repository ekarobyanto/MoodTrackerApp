import {MoodNames} from '../enums/mood_names';

export const moods: Mood[] = [
  {
    title: MoodNames.HAPPY,
    icon: 'ion:happy',
    primaryColor: '#FFCF30',
    backgroundColor: '#FFFAE4',
  },
  {
    title: MoodNames.NEUTRAL,
    icon: 'iconamoon:neutral-face-fill',
    primaryColor: '#7DE4EA',
    backgroundColor: '#E8FEFF',
  },
  {
    title: MoodNames.SAD,
    icon: 'tabler:mood-sad-filled',
    primaryColor: '#4370F2',
    backgroundColor: '#E9EFFF',
  },
  {
    title: MoodNames.STRESSED,
    icon: 'material-symbols:sentiment-stressed-rounded',
    primaryColor: '#FF2727',
    backgroundColor: '#FFE0E0',
  },
];
