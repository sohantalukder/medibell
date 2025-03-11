import {screens} from '@routes/routeName.routes';
import {RouteProps} from '@entity-models/common.types';
import ChatDetails from '@modules/chats/features/chat-details/ChatDetails';
import CallInfo from '@modules/calls/features/call-info/CallInfo';
import SelectContact from '@modules/calls/features/select-contact/SelectContact';

const chatRoutes: Array<RouteProps> = [
  {
    accessLabel: 0,
    component: ChatDetails as any,
    isHide: false,
    name: screens.chatDetails,
  },
  {
    accessLabel: 0,
    component: CallInfo as any,
    isHide: false,
    name: screens.callInfo,
  },
  {
    accessLabel: 0,
    component: SelectContact as any,
    isHide: false,
    name: screens.selectContact,
  },
];

export default chatRoutes;
