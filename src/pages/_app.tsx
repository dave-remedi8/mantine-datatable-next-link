import { MantineProvider, createTheme } from "@mantine/core";
import type { AppProps } from "next/app";
// import '@mantine/core/styles.layer.css';
// import 'mantine-datatable/styles.layer.css';
import '@/styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
    const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
