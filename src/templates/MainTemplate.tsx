import "../styles/theme.css";
import "../styles/global.css";
import { Container } from "../components/Container.tsx";
import { Logo } from "../components/Logo.tsx";
import { Menu } from "../components/Menu.tsx";
import { Footer } from "../components/Footer.tsx";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
