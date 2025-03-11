import React, {useState} from 'react';
import {_imagePreview} from './interface';
import {StyleSheet, View} from 'react-native';
import BaseSkeleton from '../skeletons/BaseSkeleton.component';
import isEmpty from '../../helper/utilities/isEmpty.utility';
import FastImage from 'react-native-fast-image';
import PlaceholderImage from '@images/Placeholder.image';

const ImagePreview: React.FC<_imagePreview> = ({
  styles = {},
  source,
  resizeMode = 'cover',
  borderRadius = 0,
}) => {
  let image: any = typeof source === 'object' ? {...source} : source;
  try {
    if (!isEmpty(image) && !isEmpty(image?.uri)) {
      image.uri = JSON.parse(image.uri ?? '');
    }
  } catch (e) {}
  const [isLoading, setIsLoading] = useState(
    image?.uri || Number(image) ? true : false,
  );
  return (
    <View style={style.relative}>
      {image?.uri || Number(image) ? (
        <FastImage
          source={
            image?.uri
              ? {
                  ...image,
                  priority: FastImage.priority.normal,
                  cache: FastImage.cacheControl.immutable,
                }
              : Number(image)
              ? image
              : undefined
          }
          style={[style.image, {borderRadius}, styles]}
          resizeMode={resizeMode}
          onLoadEnd={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
        />
      ) : (
        <PlaceholderImage style={[style.image, {borderRadius}, styles]} />
      )}
      {isLoading && (
        <View style={style.loaderView}>
          <BaseSkeleton
            height={'100%'}
            width={'100%'}
            borderRadius={borderRadius}
          />
        </View>
      )}
    </View>
  );
};

export default ImagePreview;

const style = StyleSheet.create({
  relative: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  loaderView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
  },
  image: {height: '100%', width: '100%'},
});
