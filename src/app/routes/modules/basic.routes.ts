import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import SplashIndex from '@modules/splash';
import SelectGender from '@modules/on-boarding/SelectGender';
import SetupProfile from '@modules/on-boarding/SetupProfile';
import Pin from '@modules/pin';
import Notification from '@modules/notification';
import HomeIndex from '@modules/splash/HomeIndex';
import HistoryLog from '@modules/dashboard/features/history-log';
import Medicines from '@modules/dashboard/features/medicines';
import CalenderView from '@modules/dashboard/features/calender-view';
import RefillTracker from '@modules/dashboard/features/refill-tracker';
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
  {
    accessLabel: 0,
    component: HistoryLog,
    isHide: false,
    name: screens.historyLog,
  },
  {
    accessLabel: 0,
    component: Medicines,
    isHide: false,
    name: screens.medicine,
  },
  {
    accessLabel: 0,
    component: CalenderView,
    isHide: false,
    name: screens.calenderView,
  },
  {
    accessLabel: 0,
    component: RefillTracker,
    isHide: false,
    name: screens.refillTracker,
  },
];

export default basicRoutes;
