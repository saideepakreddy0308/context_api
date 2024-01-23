import { createContext, useState } from "react";

export const LoginContext = createContext({});   // null, empty object or string, or default value
// why createContext is used in React? because, it is used to create a context object. Just like a store in redux. 
// How different is it from redux? It is different from redux because, it is not a global store. It is a local store.
// global store means, it is available to all the components in the app. local store means, it is available to the components that are wrapped in the provider component.
// reducer is used to update the state. but in contextapi we use useState hook to update the state.It does not mean that we cannot use reducer in contextapi. we can use it.
// we use contextapi to pass the state to the child components. we use reducer to update the state.
// reducer and contextapi are different. we can use both of them together.
// reducer and useState differs in the way that, reducer is used to update the state. useState is used to update the state. But, it only differs in names. They both are used to update the state.


// we export the context object from the file, so that we can import it in other files.
// We also export the Provider component, so that we can wrap our components in it.
export const LoginProvider = LoginContext.Provider;
// We also export the Consumer component, so that we can use it in other files.
export const LoginConsumer = LoginContext.Consumer;
// The Consumer component is used to consume the context in functional components.
// The Provider component is used to provide the context to the components.


