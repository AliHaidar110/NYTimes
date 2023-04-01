import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const RightArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    {...props}>
    <Path fill="gray" d="M341.957 959.355c-12.893 0-25.842-4.426-36.387-13.468-23.493-20.106-26.224-55.426-6.064-78.892L603.93 511.79 299.506 156.582c-20.16-23.465-17.428-58.787 6.064-78.892 23.438-20.024 58.787-17.373 78.838 6.065l335.675 391.62c17.975 20.952 17.975 51.875 0 72.828l-335.675 391.62c-11.036 12.895-26.716 19.532-42.45 19.532z" />
  </Svg>
);

export default RightArrow;
