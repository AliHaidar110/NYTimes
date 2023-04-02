import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { CONSTANTS, MenuIcon, OptionsIcon, SearchIcon } from '../resources';
import { StoriesListScreen, StoryDetailsScreen } from '../screens';

const Stack = createSharedElementStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#52e3c4',
        },
        headerLeftContainerStyle: {
          paddingStart: 8,
        },
      }}>
      <Stack.Screen
        name={CONSTANTS.SCREENS.LIST}
        component={StoriesListScreen}
        options={{
          title: 'NY Times Most Viewed Articles',
          headerTitle: 'NY Times Most Viewed Articles',
          headerLeft: () => <MenuIcon />,
          headerRight: () => (
            <>
              <SearchIcon />
              <OptionsIcon />
            </>
          ),
          headerRightContainerStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          },
        }}
      />
      <Stack.Screen
        animationEnabled={false}
        sharedElements={getSharedElemnts}
        name={CONSTANTS.SCREENS.DETAILS}
        component={StoryDetailsScreen}
        options={{
          title: 'Article Details',
          headerTitle: 'Article Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;

function getSharedElemnts(route) {
  return [
    route.params.imgSharedId,
    route.params.authorSharedId,
    route.params.dateSharedId,
  ];
}
