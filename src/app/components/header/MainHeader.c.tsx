import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import IconButton from '@components/button/icon-button/IconButton.component';
import SearchIcon from '@icons/Search.icon';
import MoreCircleIcon from '@icons/MoreCircle.icon';
import rs from '@styles/responsiveSize.style.asset';
import hexToRgbA from '@components/button/ripple/hexaToRgba';
import RippleButton from '@components/button/ripple/CustomRipple.c';
interface props {
  title: string;
}
const MainHeader: React.FC<props> = ({title}) => {
  const colors = useTheme().colors as Colors;
  const openDropdown = () => {
    global.showDropMenu({
      show: true,
      children: (
        <>
          <RippleButton>
            <View
              style={{
                ...customPadding(10, 20, 10, 20),
              }}>
              <Text style={typographies(colors).bodyMediumMedium}>
                Invite a Friend
              </Text>
            </View>
          </RippleButton>
          <RippleButton>
            <View
              style={{
                ...customPadding(10, 20, 10, 20),
              }}>
              <Text style={typographies(colors).bodyMediumMedium}>
                Contacts
              </Text>
            </View>
          </RippleButton>
          <RippleButton>
            <View
              style={{
                ...customPadding(10, 20, 10, 20),
              }}>
              <Text style={typographies(colors).bodyMediumMedium}>Refresh</Text>
            </View>
          </RippleButton>
          <RippleButton>
            <View
              style={{
                ...customPadding(10, 20, 10, 20),
              }}>
              <Text style={typographies(colors).bodyMediumMedium}>Help</Text>
            </View>
          </RippleButton>
        </>
      ),
      top: 65,
      containerStyle: {
        ...customPadding(15, 0, 15),
      },
    });
  };
  return (
    <View
      style={[
        {
          ...customPadding(8, 24, 8, 24),
          borderBottomWidth: rs(1.1),
          borderBottomColor: hexToRgbA(colors.gray5, 0.4),
        },
        globalStyles.rowBetween,
      ]}>
      <Text style={typographies(colors).heading4}>{title}</Text>
      <View style={[globalStyles.flexRow, {gap: rs(0)}]}>
        <IconButton icon={<SearchIcon />} />
        <IconButton icon={<MoreCircleIcon />} onPress={openDropdown} />
      </View>
    </View>
  );
};

export default MainHeader;
