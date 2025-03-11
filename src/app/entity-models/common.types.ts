import { StackNavigationOptions } from '@react-navigation/stack';

/* routes */
/* routes */
interface RouteProps {
  name: string;
  component: React.FC;
  title?: string;
  isLazy?: boolean;
  isHide: boolean;
  accessLabel: number | string;
  options?: StackNavigationOptions
}

export type {RouteProps};
