import Layout from '../../../../components/layout';
import RestApiPathInfo from '../../../../components/RestApiPath';
import {getUsageInfo} from '../../../../lib/filesystem';

export default function JotApiPath(props) {
    return (
        <Layout>
            <RestApiPathInfo {...props} version="v1" />
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
            ...currentPage
        }
    }
}