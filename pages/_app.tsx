import { ThemeContainer } from "../contexts/ThemeContainer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
