import Layout from '../../../../components/layout';
import RestApiPathInfo from '../../../../components/RestApiPath';
import FunctionList from '../../../../components/FunctionList';
import {getUsageInfo} from '../../../../lib/filesystem';
import jotApiPath from './funcName.module.css';

export default function JotApiPath(props) {
    return (
        <Layout>
            <nav className={jotApiPath.functionNav}>
                <FunctionList activeFunc={props.currentPage.funcName} funcList={props.usageInfo} />
            </nav>
            <div className={jotApiPath.pathInfo}>
                <RestApiPathInfo {...props.currentPage} version="v1" />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    let usageInfo = await getUsageInfo("jotapi", "v1");
    usageInfo = usageInfo.map(item => {return {params: item}});

    return {
        paths: usageInfo,
        fallback: false
    }
}

export async function getStaticProps(context) {
    let usageInfo = await getUsageInfo("jotapi", "v1");
    const currentPage = usageInfo.find(item => item.funcName == context.params.funcName);
    return {
        props: {
            usageInfo,
            currentPage
        }
    }
}