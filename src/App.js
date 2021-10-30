import './App.css';
import SignUp from './Components/SignUp';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <SignUp />
      </div>
    </ChakraProvider>
  );
}

export default App;
