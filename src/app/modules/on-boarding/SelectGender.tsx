import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Container from '@layouts/Container.layout';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import ManIcon from '@icons/Man.icon';
import WomanIcon from '@icons/Woman.icon';
import OthersIcon from '@icons/Others.icon';
import {IconProps} from '@entity-models/iconProps.types';
import {
  customMargin,
  customPadding,
  globalStyles,
} from '@styles/global.style.asset';
import IconButton from '@components/button/icon-button/IconButton.component';
import RightArrowIcon from '@icons/RightArrow.icon';
import EachGender from './components/EachGender';
export interface Gender {
  id: number;
  label: string;
  icon: React.FC<IconProps>;
}
const SelectGender = () => {
  const colors = useTheme().colors as Colors;
  const genderArray: Gender[] = [
    {id: 1, label: 'Male', icon: ManIcon},
    {id: 2, label: 'Female', icon: WomanIcon},
    {id: 3, label: 'Other', icon: OthersIcon},
  ];
  const [select, setSelect] = useState<number>(0);
  return (
    <Container
      containerStyle={[{...customPadding(20, 20, 20, 20)}, globalStyles.flex1]}>
      <Text
        style={[typographies(colors).bodyLargeSemibold, styles.skipText]}
        onPress={() => console.log('object')}>
        Skip
      </Text>
      <Text
        style={[typographies(colors).heading5, {...customMargin(80, 0, 24)}]}>
        Select Your Gender
      </Text>
      <View style={styles.genderContainer}>
        {genderArray.map((item, index) => (
          <EachGender
            item={item}
            key={item.id}
            index={index}
            select={select}
            setSelect={setSelect}
          />
        ))}
      </View>
      <View style={styles.bottomIcon}>
        <IconButton
          disabled={!select}
          icon={<RightArrowIcon fill={colors.white} />}
          bgColor={colors.primary}
        />
      </View>
    </Container>
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  skipText: {
    textAlign: 'right',
  },
  genderContainer: {
    gap: 16,
  },
  bottomIcon: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
