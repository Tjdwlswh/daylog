import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import LogContext from "./contexts/LogContext";
import { LogContextProvider } from "./contexts/LogContext";
import { SearchContextProvider } from "./contexts/SearchContext";

export default function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}
