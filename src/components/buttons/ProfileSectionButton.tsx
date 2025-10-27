import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import AppText from '../texts/AppText';
import { AppColors } from '../../styles/colors';
import { vs, s } from 'react-native-size-matters';
import { AppFonts } from '../../styles/fonts';
import { MaterialIcons } from '@expo/vector-icons';

interface IProfileSectionButton {
  onPress: () => void;
  title: string;
}

const ProfileSectionButton: FC<IProfileSectionButton> = ({
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
      </View>
      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColors.medGray}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: AppColors.borderColor,
    paddingBottom: vs(12),
    marginTop: vs(12),
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: vs(8),
  },
  textTitle: {
    fontSize: s(16),
    color: AppColors.black,
    fontFamily: AppFonts.medium,
  },
  textContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: s(8),
  },
});
