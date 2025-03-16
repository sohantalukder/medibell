import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const AlarmIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <G fill={fill || colors.default1}>
        <Path
          fillRule="evenodd"
          d="M10 4.75a6 6 0 100 12 6 6 0 000-12m-7 6a7 7 0 1114 0 7 7 0 01-14 0"
          clipRule="evenodd"
        />
        <Path
          fillRule="evenodd"
          d="M3.146 17.604a.5.5 0 00.708 0l1.5-1.5a.5.5 0 10-.708-.707l-1.5 1.5a.5.5 0 000 .707m11.5-2.207a.5.5 0 01.708 0l1.5 1.5a.5.5 0 01-.708.707l-1.5-1.5a.5.5 0 010-.707M10 7.25a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5"
          clipRule="evenodd"
        />
        <Path
          fillRule="evenodd"
          d="M13.5 10.75a.5.5 0 01-.5.5h-3a.5.5 0 010-1h3a.5.5 0 01.5.5"
          clipRule="evenodd"
        />
        <Path d="M2.381 2.546c2.023-1.931 3.951.376 3.951.376L2.574 6.51S.358 4.478 2.381 2.546" />
        <Path
          fillRule="evenodd"
          d="M3.97 2.783c-.225.027-.53.135-.898.487-.369.352-.49.651-.528.875-.039.235.001.481.103.735q.026.064.055.125l2.12-2.025a2 2 0 00-.122-.06 1.36 1.36 0 00-.73-.137m1.602-.518c-.746-.494-1.95-.903-3.19.281s-.888 2.407-.43 3.175a4 4 0 00.622.79l3.758-3.59s-.067-.08-.19-.198a4 4 0 00-.57-.458"
          clipRule="evenodd"
        />
        <Path d="M17.619 2.546c-2.023-1.931-3.951.376-3.951.376l3.758 3.588s2.216-2.032.193-3.964" />
        <Path
          fillRule="evenodd"
          d="M16.03 2.783c.225.027.53.135.898.487.369.352.49.651.528.875.039.235-.001.481-.103.735a2 2 0 01-.055.125l-2.12-2.025q.06-.032.122-.06c.249-.114.493-.165.73-.137m-1.602-.518c.746-.494 1.95-.903 3.19.281s.888 2.407.43 3.175c-.15.251-.312.454-.432.59-.113.128-.19.2-.19.2l-3.758-3.59s.067-.08.19-.198c.131-.127.326-.297.57-.458"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
export default AlarmIcon;
