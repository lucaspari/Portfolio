import { Header } from "./components/header/Header";
import "./index.css";
import { Box, Text } from "@chakra-ui/react";
import { Body } from "./components/body/Body";
import { Timeline } from "./components/timeline/Timeline";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
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
        <Timeline />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
