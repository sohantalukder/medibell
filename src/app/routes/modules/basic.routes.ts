import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import SplashIndex from '@modules/splash';
import SelectGender from '@modules/on-boarding/SelectGender';
import SetupProfile from '@modules/on-boarding/SetupProfile';
import Pin from '@modules/pin';
import Notification from '@modules/notification';
import HomeIndex from '@modules/splash/HomeIndex';

const basicRoutes: Array<RouteProps> = [
  {
    accessLabel: 0,
    component: SplashIndex,
    isHide: false,
    name: screens.splash,
  },
  {
    accessLabel: 0,
    component: SelectGender,
    isHide: false,
    name: screens.selectGender,
  },
  {
    accessLabel: 0,
    component: SetupProfile,
    isHide: false,
    name: screens.setupProfile,
  },
  {
    accessLabel: 0,
    component: Pin,
    isHide: false,
    name: screens.pin,
  },
  {
    accessLabel: 0,
    component: HomeIndex,
    isHide: false,
    name: screens.home,
  },
  {
    accessLabel: 0,
    component: Notification,
    isHide: false,
    name: screens.notification,
    options: {
      presentation: 'modal',
    },
  },
];

export default basicRoutes;
