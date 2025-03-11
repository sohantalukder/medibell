import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import SplashIndex from '@modules/splash';
import SelectGender from '@modules/on-boarding/SelectGender';
import SelectAge from '@modules/on-boarding/SelectAge';

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
    component: SelectAge,
    isHide: false,
    name: screens.selectAge,
  },
];

export default basicRoutes;
