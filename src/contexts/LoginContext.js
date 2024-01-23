import { createContext } from "react";

export const LoginContext = createContext({});   // null, empty object or string, or default value
// we export the context object from the file, so that we can import it in other files.
// We also export the Provider component, so that we can wrap our components in it.
export const LoginProvider = LoginContext.Provider;
// We also export the Consumer component, so that we can use it in other files.
export const LoginConsumer = LoginContext.Consumer;
// The Consumer component is used to consume the context in functional components.
// The Provider component is used to provide the context to the components.


