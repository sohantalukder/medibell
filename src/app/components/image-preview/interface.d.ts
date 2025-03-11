import {StyleProp} from 'react-native';
import {ImageStyle, ResizeMode} from 'react-native-fast-image';

// interface _imagePreview {
//   src: string | object;
//   alt?: string;
//   containerStyle?: _viewStyles;
//   imageStyle?: _viewStyles;
//   isHide?: boolean;
// }
interface _imagePreview {
  styles?: StyleProp<ImageStyle>;
  source: {uri?: String; require?: number} | number;
  borderRadius?: number;
  resizeMode?: ResizeMode;
}

export type {_imagePreview};
