import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { s } from 'react-native-size-matters';
import { ReactNode, FC } from 'react';

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: 'bold' | 'medium';
}
const AppText: FC<AppTextProps> = ({
  children,
  style,
  variant = 'medium',
  ...rest
}) => {
  return (
    <Text style={[styles[variant], style]} {...rest}>
      {children}
    </Text>
  );
};
export default AppText;
const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: '#000',
  },
  medium: {
    fontSize: s(16),
    color: '#000',
  },
});
