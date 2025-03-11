import ImageCropPicker, {CommonOptions} from 'react-native-image-crop-picker';

interface imagePickerInterface {
  success: (params: any) => void;
  failed: (params: any) => void;
  multiple?: CommonOptions['multiple'];
  mediaType?: 'photo' | 'video' | 'any';
  maxFiles?: number;
}

class imagePicker {
  async openCamera({success, failed}: imagePickerInterface) {
    try {
      const image = await ImageCropPicker.openCamera({
        width: 300,
        height: 400,
        cropperCircleOverlay: true,
        useFrontCamera: true,
      });
      success && success(image);
    } catch (e) {
      failed && failed(false);
    }
  }
  async openGallery({
    success,
    failed,
    multiple = false,
    mediaType = 'photo',
    maxFiles = 2,
  }: imagePickerInterface) {
    try {
      const image = await ImageCropPicker.openPicker({
        multiple: multiple,
        cropperCircleOverlay: true,
        maxFiles: maxFiles,
        mediaType,
      });
      success && success(image);
    } catch (e) {
      failed && failed(false);
    }
  }
}

export default new imagePicker();
