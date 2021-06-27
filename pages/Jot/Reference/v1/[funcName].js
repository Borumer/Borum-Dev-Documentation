import Layout from "../../../../components/layout";
import RestApiPathInfo from "../../../../components/RestApiPath";
import FunctionList from "../../../../components/FunctionList";
import { loadApiSpecFile } from "../../../../lib/filesystem";
import jotApiPath from "./funcName.module.css";
import Head from "next/head";

export default function JotApiPath(props) {
	return (
		<Layout>
			<Head>
				<title>{props.currentPage.name} | Jot Docs</title>
			</Head>
			<nav className={jotApiPath.functionNav}>
				<FunctionList
					activeFunc={props.currentPage.funcName}
					funcList={props.endpointInfo}
				/>
			</nav>
			<div className={jotApiPath.pathInfo}>
				<RestApiPathInfo {...props.currentPage} version="v1" />
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	let { resources } = await loadApiSpecFile("jotapi");
	const paths = resources.map((item) => {
		return { params: item };
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const endpointInfo = (await loadApiSpecFile("jotapi")).resources;

	const currentPage = endpointInfo.find(
		(item) => item.funcName === context.params.funcName
	);

	console.info(currentPage);

	return {
		props: { endpointInfo, currentPage },
	};
}
