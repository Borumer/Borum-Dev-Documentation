import Layout from '../../../../components/layout';
import RestApiPathInfo from '../../../../components/RestApiPath';
import FunctionList from '../../../../components/FunctionList';
import { loadApiSpecFile } from '../../../../lib/filesystem';
import flytrapApiPath from './funcName.module.css';
import Head from 'next/head';

export default function FlytrapApiPath(props) {
    return (
        <Layout>
            <Head>
                <title>{props.currentPage.name} | Flytrap API Reference</title>
            </Head>
            <nav className={flytrapApiPath.functionNav}>
                <FunctionList activeFunc={props.currentPage.funcName} funcList={props.usageInfo} />
            </nav>
            <div className={flytrapApiPath.pathInfo}>
                <RestApiPathInfo {...props.currentPage} version="v1" />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    let usageInfo = await loadApiSpecFile("flytrapapi");
    usageInfo = usageInfo.map(item => {return { params: item } });

    return {
        paths: usageInfo,
        fallback: false
    }
}

export async function getStaticProps(context) {
    let usageInfo = await loadApiSpecFile("flytrapapi");

    const currentPage = Object.keys(usageInfo.paths).find(item => item.funcName == context.params.funcName);
    
    return {
        props: {
            usageInfo,
            currentPage
        }
    }
}