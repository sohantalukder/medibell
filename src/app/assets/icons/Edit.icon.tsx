import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const EditIcon: React.FC<IconProps> = ({width = 40, height = 40, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.776 3.35a8.872 8.872 0 016.543 2.315 8.968 8.968 0 012.331 6.56v15.55a8.955 8.955 0 01-2.314 6.56 8.91 8.91 0 01-6.56 2.314h-15.55a8.886 8.886 0 01-6.56-2.314 8.886 8.886 0 01-2.315-6.56v-15.55a8.886 8.886 0 012.314-6.56 8.886 8.886 0 016.56-2.315h15.551zm-9.474 24.725l11.206-11.239c1.015-1.032 1.015-2.697 0-3.712l-2.165-2.165a2.633 2.633 0 00-3.73 0l-1.115 1.132a.442.442 0 000 .616s2.647 2.63 2.697 2.697c.184.2.3.467.3.766 0 .6-.483 1.1-1.099 1.1-.283 0-.55-.117-.732-.3l-2.78-2.764a.362.362 0 00-.5 0l-7.942 7.942a2.998 2.998 0 00-.883 2.064l-.1 3.946c0 .216.067.416.217.566.15.15.35.233.566.233h3.913c.799 0 1.565-.316 2.147-.882z"
        fill={fill || colors.primary}
      />
    </Svg>
  );
};
export default EditIcon;
