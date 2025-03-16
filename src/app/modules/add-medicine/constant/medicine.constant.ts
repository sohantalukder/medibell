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

export {howOftenArray};
