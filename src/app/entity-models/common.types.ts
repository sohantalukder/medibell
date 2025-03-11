/* routes */
/* routes */
interface RouteProps {
  name: string;
  component: React.FC;
  title?: string;
  isLazy?: boolean;
  isHide: boolean;
  accessLabel: number | string;
}

export type {RouteProps};
