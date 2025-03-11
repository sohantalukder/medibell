import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import Button from '../button/button/Button.component';
import ImagePreview from '../image-preview/Index.component';

export interface _itemArtistInference {
  name: string;
  image: string;
  isFollowing: boolean;
}

const ItemArtist: React.FC<{
  item: _itemArtistInference;
}> = ({item}) => {
  const [isFollowing, setIsFollowing] = useState(item.isFollowing);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);

    // API call need to be handled here
    console.log(item.name);
  };

  return (
    <View style={styles.itemContainer}>
      <ImagePreview styles={styles.image} source={{uri: item.image}} />
      <Text style={[globalStyles.flexGrow1, typographies.titleSmall]}>
        {item.name}
      </Text>
      <Button
        onPress={handleButtonClick}
        style={styles.buttonStyle}
        bgColor={customTheme.colors.white}
        text={isFollowing ? 'Unfollow' : 'Follow'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rs(12),
    paddingVertical: rs(16),
    borderBottomColor: customTheme.colors.text600,
    borderBottomWidth: 0.5,
  },
  image: {
    width: rs(40),
    height: rs(40),
    borderRadius: rs(40),
  },
  buttonStyle: {
    ...typographies.labelLarge,
    width: rs(94),
    height: rs(36),
    borderRadius: 4,
  },
});

export default ItemArtist;
