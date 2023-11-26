import 'react-native-gesture-handler';
import { AppStackNavigation } from "./src/AppStackNavigation";
import { PaperProvider } from "react-native-paper"; //Não estou usando mais

export default function App() {
  return (
      <PaperProvider>
        <AppStackNavigation/>
      </PaperProvider>
  );
}