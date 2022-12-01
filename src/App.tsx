import { Header } from "./components/header/Header";
import "./index.css";
import { Box, Text } from "@chakra-ui/react";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Box p={"2em"}>
        <Text as="b" fontSize={"3xl"}>
          Hello, I'm Lucas Pari
        </Text>
      </Box>
    </div>
  );
}

export default App;
