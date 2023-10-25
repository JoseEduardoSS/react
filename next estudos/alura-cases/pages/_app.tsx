import GlobalStyle from "../src/theme/GlobalStyle";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
