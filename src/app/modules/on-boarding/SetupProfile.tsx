import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import SplashContainer from '@layouts/SplashContainer.layout';
import Header from '@components/header/Header.component';
import Button from '@components/button/button/Button.component';
import rs from '@styles/responsiveSize.style.asset';
import AvatarImage from '@images/AvatarPlaceholder.image';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import {globalStyles, customMargin} from '@styles/global.style.asset';
import CustomInput from '@components/text-input/CustomInput.c';
import MultiTextInput from '@components/text-input/multi-input/MultiTextInput.c';
import DateInput from '@components/date-time/date-input/DateInput.component';
import {useNavigation, useTheme} from '@react-navigation/native';
import {screens} from '@routes/routeName.routes';
import ImagePickerBottomSheet from '@packages/image-picker/ImagePicker.bottomSheet.app.component';
import EditIcon from '@icons/Edit.icon';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import ImagePreview from '@components/image-preview/Index.component';
const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const success = async (params: any) => {
    const supportedFormat = ['jpg', 'jpeg', 'png'];
    const res = Array.isArray(params) ? params[0] : params;
    let ext = res.mime?.split('/')[1];
    const isSupportedFormat = supportedFormat.indexOf(ext) > -1;
    if (res.size / 1000000 <= 5 && isSupportedFormat) {
      setImage(params?.path);
    }
  };
  return (
    <View style={{height: rs(200), width: rs(200)}}>
      {image ? (
        <ImagePreview
          source={{uri: image}}
          styles={[globalStyles.widthFull, globalStyles.heightFull]}
          borderRadius={rs(500)}
        />
      ) : (
        <AvatarImage />
      )}
      <RippleButton
        borderRadius={rs(10)}
        onPress={() =>
          global.showBottomSheet({
            flag: true,
            component: ImagePickerBottomSheet,
            componentProps: {
              success,
              failed: () => {
                setImage(null);
              },
            },
          })
        }>
        <View style={{position: `${'absolute'}`, bottom: rs(0), right: rs(15)}}>
          <EditIcon />
        </View>
      </RippleButton>
    </View>
  );
};
const SetupProfile = () => {
  const navigation = useNavigation();
  const colors = useTheme().colors as Colors;
  return (
    <SplashContainer showHeader={true}>
      <Header
        text="Setup Your Profile"
        rightComponent={
          <Text style={[typographies(colors).bodyLargeSemibold]}>Skip</Text>
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          globalStyles.alignCenter,
          {...customMargin(30, 20, 0, 20)},
        ]}>
        <ImageUpload />
        <View
          style={[globalStyles.widthFull, {marginTop: rs(35), gap: rs(16)}]}>
          <CustomInput
            onChangeText={() => {}}
            inputProps={{autoComplete: 'given-name'}}
            placeholder="Full Name"
          />
          <CustomInput
            onChangeText={() => {}}
            placeholder="Email"
            inputProps={{inputMode: 'email', autoComplete: 'email'}}
          />
          <DateInput
            onChange={() => ''}
            placeholder="Date of Birth"
            maximumDate={new Date()}
          />
          <MultiTextInput placeholder="About ..." />
        </View>
      </ScrollView>
      <Button
        wrapStyle={{...customMargin(10, 20, 30, 20), width: undefined}}
        onPress={() => navigation.navigate(screens.pin as never)}
        text="Save"
      />
    </SplashContainer>
  );
};

export default SetupProfile;
