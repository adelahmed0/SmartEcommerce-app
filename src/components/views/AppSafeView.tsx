import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../styles/colors';
import { ReactNode, FC } from 'react';
import { IS_ANDROID } from '../../constants/constants';
import { vs } from 'react-native-size-matters';

interface AppSafeViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};
export default AppSafeView;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingTop: IS_ANDROID ? vs(10) : 0,
  },
  container: {
    flex: 1,
  },
});
