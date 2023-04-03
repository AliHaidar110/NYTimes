
### How to run the code

1. navigate to the root folder and open terminal at location
2. `npm i` or `yarn`
3. for IOS `npx pod-install`

- For development
  1. `npx react-native start`
  2. for IOS `npx react-native run-ios`
  for Android `npx react-native run-android`

### MVVM Explained

MVVM (Model-View-ViewModel) is a software architecture pattern that separates an application's user interface (View) from its data and logic (Model) by using a mediator called ViewModel. The ViewModel communicates with the Model to retrieve and manipulate data and exposes this data in a way that can be easily consumed by the View. The View then binds to the data provided by the ViewModel, displaying it to the user and responding to user input by calling methods on the ViewModel. MVVM is commonly used in building modern applications and is especially useful for developing applications with complex user interfaces and data interactions.

- Pros:

  - Provides a clear separation of concerns by dividing an application into three main components: Model, View, and ViewModel.
  - Makes it easier to maintain and update the codebase as each component has its own specific responsibilities.
  - Enables unit testing of individual components.
  - Allows for easier data binding between the ViewModel and View, which can help reduce boilerplate code.
  - Encourages the use of reactive programming, which can improve application performance.
- Cons:

  - The architecture can become complex as the application grows, which can make it difficult to manage.
  - The separation of concerns can result in a lot of inter-component communication, which can slow down the application.
  - Requires additional libraries or frameworks to implement data binding.

### MVVM in this aplication

In this architecture, the view components (React Native components) subscribe to the store, and the store sends updates to the components whenever the state changes. The components can also dispatch actions to the store to update the state. The Redux Thunks can be used to perform side effects like API calls, and then dispatch actions to update the state of the store.

Redux can be considered as part of the Model layer in MVVM and can be used to manage the application state, while the ViewModel layer can be implemented using components that are connected to the Redux store like selectors and dispatchers.

### Summary

After considering several software architecture patterns for my application demo, I ultimately decided to use the MVVM (Model-View-ViewModel) architecture. I took into account the scalability of the demo and the ease of implementation, as well as the ease of onboarding new developers, especially those who may be less experienced.

MVVM seemed like the best fit for my needs because it separates the user interface (View) from the data and logic (Model) using a mediator called ViewModel. The ViewModel communicates with the Model to retrieve and manipulate data, and exposes this data in a way that can be easily consumed by the View. This makes it especially useful for building modern applications with complex user interfaces and data interactions. Overall, I believe that using the MVVM architecture will help me to create a robust and maintainable application that can grow and evolve over time.