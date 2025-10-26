import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import AppText from '../texts/AppText';

interface RadioWithTitleProps {
  selected?: boolean;
  title: string;
  onPress?: () => void;
}

const RadioWithTitle: FC<RadioWithTitleProps> = ({
  selected,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default RadioWithTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vs(5),
  },
  circle: {
    width: s(20),
    height: s(20),
    borderRadius: s(10),
    borderWidth: 2,
    borderColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: s(10),
    height: s(10),
    borderRadius: s(5),
    backgroundColor: AppColors.primary,
  },
  title: {
    fontSize: s(16),
    color: AppColors.black,
    marginLeft: s(10),
  },
});
