import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Calendar = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    {...props}>
    <Path
      fill="#828282"
      d="M832 128H704V96a32 32 0 0 0-64 0v32H384V96a30.08 30.08 0 0 0-32-32 30.08 30.08 0 0 0-32 32v32H192a60.16 60.16 0 0 0-64 64v640a60.16 60.16 0 0 0 64 64h640a60.16 60.16 0 0 0 64-64V192a64 64 0 0 0-64-64zm0 704H192V320h640z"
    />
    <Path
      fill="#828282"
      d="M288 384h128q32 0 32 32v128q0 32-32 32H288q-32 0-32-32V416q0-32 32-32Z"
    />
  </Svg>
);

export default Calendar;
