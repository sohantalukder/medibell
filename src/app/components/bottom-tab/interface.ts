import {IconProps} from '@entity-models/iconProps.types';
import {screens} from '@routes/routeName.routes';

interface BottomTabInterface {
  Icon: React.FC<IconProps>;
  route: screens;
  name: string;
  Component: React.FC;
}

export type {BottomTabInterface};
