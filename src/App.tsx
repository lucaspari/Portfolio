import { Header } from "./components/header/Header";
import "./index.css";
import { Box, Text } from "@chakra-ui/react";
import { Body } from "./components/body/Body";
import { MyTimeline } from "./components/timeline/MyTimeline";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Box p={"2em"}>
        <Text as="b" fontSize={"3xl"}>
          Hello, I'm Lucas Pari
        </Text>
      </Box>
      <section>
        <Body />
      </section>
      <section>
        <MyTimeline />
      </section>
    </div>
  );
}

export default App;
