import {BottomTabInterface} from '@components/bottom-tab/interface';
import CallIcon from '@icons/Call.icon';
import ChatsIcon from '@icons/Chats.icon';
import StoryIcon from '@icons/Story.icon';
import CallsIndex from '@modules/calls';
import ChatsIndex from '@modules/chats';
import StatusIndex from '@modules/status';
import {screens} from '@routes/routeName.routes';

const bottomTabList: BottomTabInterface[] = [
  {
    Icon: ChatsIcon,
    route: screens.chats,
    Component: ChatsIndex,
    name: 'Chats',
  },
  {
    Icon: StoryIcon,
    route: screens.status,
    Component: StatusIndex,
    name: 'Status',
  },
  {
    Icon: CallIcon,
    route: screens.calls,
    Component: CallsIndex,
    name: 'Calls',
  },
];

export {bottomTabList};
