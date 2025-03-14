import {BottomTabInterface} from '@components/bottom-tab/interface';
import AddIcon from '@icons/Add.icon';
import AddFillIcon from '@icons/AddFill.icon';
import AnalyticsIcon from '@icons/Analytics.icon';
import AnalyticsFillIcon from '@icons/AnalyticsFill.icon';
import HomeIcon from '@icons/Home.icon';
import HomeFillIcon from '@icons/HomeFill.icon';
import ProfileIcon from '@icons/Profile.icon';
import ProfileFillIcon from '@icons/ProfileFill.icon';
import AddMedicine from '@modules/add-medicine';
import Analytics from '@modules/analytics';
import Dashboard from '@modules/dashboard';
import Profile from '@modules/profile';
import {screens} from '@routes/routeName.routes';

const bottomTabList: BottomTabInterface[] = [
  {
    Icon: HomeIcon,
    route: screens.dashboard,
    Component: Dashboard,
    FillIcon: HomeFillIcon,
    name: 'Dashboard',
  },
  {
    Icon: AnalyticsIcon,
    route: screens.analytics,
    Component: Analytics,
    FillIcon: AnalyticsFillIcon,
    name: 'Analytics',
  },
  {
    Icon: AddIcon,
    route: screens.addMedicine,
    Component: AddMedicine,
    FillIcon: AddFillIcon,
    name: 'Add Medicine',
  },
  {
    Icon: ProfileIcon,
    route: screens.profile,
    Component: Profile,
    FillIcon: ProfileFillIcon,
    name: 'Profile',
  },
];

export {bottomTabList};
