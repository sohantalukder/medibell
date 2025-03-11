import {Alert} from 'react-native';

const showAlertWithTwoActions = (params: {
  title: string;
  body: string;
  okButtonText?: string;
  onPressAction: (props: any) => void;
  cancelButton?: string;
}) => {
  const core = {
    title: '',
    body: '',
    okButtonText: 'OK',
    onPressAction: () => {},
    cancelButton: 'Cancel',
  };
  const data = {...core, ...params};
  const {title, body, cancelButton, okButtonText, onPressAction} = data;
  Alert.alert(
    title,
    body,
    [
      {
        text: cancelButton,
        onPress: () => onPressAction('cancel'),
        style: 'cancel',
      },
      {text: okButtonText, onPress: () => onPressAction('confirm')},
    ],
    {userInterfaceStyle: 'dark'},
  );
};
export default showAlertWithTwoActions;
