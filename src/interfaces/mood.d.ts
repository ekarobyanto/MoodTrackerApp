interface Mood {
  title: string;
  icon: React.FC<{color?: string; size?: number}>;
  primaryColor: string;
  backgroundColor: string;
}
