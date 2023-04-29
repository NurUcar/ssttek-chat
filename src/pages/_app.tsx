import "@/assets/styles/globals.css";
import { store } from "@/store/store";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { install } from "resize-observer";

if (typeof window !== "undefined" && !window.ResizeObserver) {
	install();
}
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);
	return (
		<Provider store={store}>
			{getLayout(<Component {...pageProps} />)}{" "}
		</Provider>
	);
}

export default MyApp;

