import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Countdown } from "./components/Countdown";
import { DefaultInput } from "./components/DefaultInput.tsx";
import { Cycles } from "./components/Cycles.tsx";
import { DefaultButton } from "./components/DefaultButton.tsx";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer.tsx";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <DefaultInput
              labelText="Qualquer coisa"
              id="meuInput"
              type="text"
              title="TITULO"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
