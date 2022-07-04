import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation";

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
