import { Provider } from "react-redux";
import "../public/css/core/globals.css";
import { store } from "@/component/store/store";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
