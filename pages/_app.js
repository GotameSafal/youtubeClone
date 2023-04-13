import { store } from "@/Redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
