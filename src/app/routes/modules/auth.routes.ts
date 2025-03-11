import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import LetsInIndex from '@modules/auth/lets-in';
import SignUpIndex from '@modules/auth/signup';
import LoginIndex from '@modules/auth/login';
import ForgotPasswordIndex from '@modules/auth/forgot-password';
import OtpVerificationIndex from '@modules/auth/otp-verification';
import FillProfileIndex from '@modules/auth/fill-profile';
import SetupComplete from '@modules/auth/setup-complete';

const authRoutes: Array<RouteProps> = [
  {
    accessLabel: 0,
    component: LetsInIndex,
    isHide: false,
    name: screens.letsIn,
  },
  {
    accessLabel: 0,
    component: SignUpIndex,
    isHide: false,
    name: screens.signUp,
  },
  {
    accessLabel: 0,
    component: LoginIndex,
    isHide: false,
    name: screens.login,
  },
  {
    accessLabel: 0,
    component: ForgotPasswordIndex,
    isHide: false,
    name: screens.forgotPassword,
  },
  {
    accessLabel: 0,
    component: OtpVerificationIndex,
    isHide: false,
    name: screens.otpVerification,
  },
  {
    accessLabel: 0,
    component: FillProfileIndex,
    isHide: false,
    name: screens.fillProfile,
  },
  {
    accessLabel: 0,
    component: SetupComplete,
    isHide: false,
    name: screens.setupComplete,
  },
];

export default authRoutes;
