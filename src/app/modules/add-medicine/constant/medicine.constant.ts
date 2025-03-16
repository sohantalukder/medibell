import {IconProps} from '@entity-models/iconProps.types';
import CalenderIcon from '@icons/Calender.icon';
import RepeatIcon from '@icons/Repeat.icon';
import SunnyIcon from '@icons/Sunny.icon';
import SyncIcon from '@icons/Sync.icon';
import TimeIcon from '@icons/Time.icon';
interface HowOftenArray {
  id: number;
  icon: React.FC<IconProps>;
  title: string;
}
interface HowLongArray {
  id: number;
  icon: string | React.FC<IconProps>;
  title: string;
}
const howOftenArray: HowOftenArray[] = [
  {
    id: 1,
    icon: SunnyIcon,
    title: 'Once Daily',
  },
  {
    id: 2,
    icon: SyncIcon,
    title: 'Twice Daily',
  },
  {
    id: 3,
    icon: TimeIcon,
    title: 'Three Times Daily',
  },
  {
    id: 4,
    icon: RepeatIcon,
    title: 'Four Times Daily',
  },
  {
    id: 5,
    icon: CalenderIcon,
    title: 'As Needed',
  },
];

const howLongArray: HowLongArray[] = [
  {
    id: 1,
    icon: '7',
    title: '7 Days',
  },
  {
    id: 2,
    icon: '14',
    title: '14 Days',
  },
  {
    id: 3,
    icon: '30',
    title: '30 Days',
  },
  {
    id: 4,
    icon: '90',
    title: '90 Days',
  },
  {
    id: 5,
    icon: '∞',
    title: 'On Going',
  },
  {
    id: 6,
    icon: CalenderIcon,
    title: 'Custom',
  },
];
const INTAKE_TYPES = {
  BEFORE_MEAL: 'Before Meal',
  AFTER_MEAL: 'After Meal',
  WITH_MEAL: 'With Meal',
  EMPTY_STOMACH: 'Empty Stomach',
  ANYTIME: 'Anytime',
  BEFORE_BED: 'Before Bed',
} as const;

export type IntakeType = keyof typeof INTAKE_TYPES;

export {howOftenArray, howLongArray, INTAKE_TYPES};
