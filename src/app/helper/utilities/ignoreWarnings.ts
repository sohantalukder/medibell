import {LogBox} from 'react-native';

if (__DEV__) {
  const ignoreWarns = [
    'EventEmitter.removeListener',
    '[fuego-swr-keys-from-collection-path]',
    'Setting a timer for a long period of time',
    'ViewPropTypes will be removed from React Native',
    'AsyncStorage has been extracted from react-native',
    "exported from 'deprecated-react-native-prop-types'.",
    'Non-serializable values were found in the navigation state.',
    'VirtualizedLists should never be nested inside plain ScrollViews',
    'CountryModal: Support for defaultProps will be removed from function components in a future major release.',
  ];
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) {
      return;
    }
    error(...args);
  };
  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  // LogBox.ignoreLogs(ignoreWarns);
  LogBox.ignoreAllLogs();
} else {
  LogBox.ignoreAllLogs();
}
