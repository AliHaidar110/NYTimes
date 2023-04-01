import { createStackNavigator } from '@react-navigation/stack';

import { CONSTANTS } from '../resources';

// type RootStackParamList = {
//   [CONSTANTS.SCREENS.LIST]: undefined;
//   [CONSTANTS.SCREENS.DETAILS]: undefined;
// }

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CONSTANTS.SCREENS.LIST} component={() => <></>} />
      <Stack.Screen name={CONSTANTS.SCREENS.DETAILS}  component={() => <></>} />
    </Stack.Navigator>
  );
}

export default MainStack