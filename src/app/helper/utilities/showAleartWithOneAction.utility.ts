import {Alert} from 'react-native';

interface props {
  title?: string;
  body?: string;
  okButtonText?: string;
  onPressAction?: Function;
}

const showAlertWithOneAction = (params: props) => {
  const core = {
    title: '',
    body: '',
    okButtonText: 'OK',
    onPressAction: () => {},
  };
  const data = {...core, ...params};
  const {title, body, okButtonText, onPressAction} = data;
  Alert.alert(
    title,
    body,
    [{text: okButtonText, onPress: () => onPressAction('confirm')}],
    {userInterfaceStyle: 'dark'},
  );
};
export default showAlertWithOneAction;
