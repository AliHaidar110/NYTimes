import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      overflow="hidden"
      {...props}>
      <Path d="M168.53300000000002 469.333h686.934q40.533 0 40.533 40.534v4.266q0 40.534-40.533 40.534H168.533q-40.533 0-40.533-40.534v-4.266q0-40.534 40.533-40.534zM168.53300000000002 682.667h686.934Q896 682.667 896 723.2v4.267Q896 768 855.467 768H168.533Q128 768 128 727.467V723.2q0-40.533 40.533-40.533zM168.53300000000002 256h686.934Q896 256 896 296.533v4.267q0 40.533-40.533 40.533H168.533Q128 341.333 128 300.8v-4.267Q128 256 168.533 256z" />
    </Svg>
  );
}

export default Menu;
