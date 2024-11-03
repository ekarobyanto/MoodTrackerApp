import {StyleProp, Text, TextStyle} from 'react-native';

interface IAppText {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const AppText: React.FC<IAppText> = ({children, style}) => {
  return <Text style={[{fontFamily: 'Poppins'}, style]}>{children}</Text>;
};
