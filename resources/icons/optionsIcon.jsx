import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function OptionsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      overflow="hidden"
      {...props}>
      <Path d="M512 305.7c-57.3 0-103.8-46.5-103.8-103.8S454.7 98.2 512 98.2 615.8 144.7 615.8 202 569.3 305.7 512 305.7zm0 311.3c-57.3 0-103.8-46.5-103.8-103.8S454.7 409.5 512 409.5 615.8 456 615.8 513.3 569.3 617 512 617zm0 311.3c-57.3 0-103.8-46.5-103.8-103.8S454.7 720.8 512 720.8s103.8 46.5 103.8 103.8S569.3 928.3 512 928.3z" />
    </Svg>
  );
}

export default OptionsIcon;
