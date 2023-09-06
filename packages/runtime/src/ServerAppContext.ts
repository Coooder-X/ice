import * as React from 'react';
// import React, {createContext} from "react";

// const Context = createContext();
const Context = (React as any).createServerContext();

Context.displayName = 'AppServerContext';

function useServerAppContext() {
  const value = React.useContext(Context);
  return value;
}

// function useAppData() {
//   const value: any = React.useContext(Context);
//   return value.appData;
// }

const ServerAppContextProvider = Context.Provider;

export {
  useServerAppContext,
  // useAppData,
  ServerAppContextProvider,
};
