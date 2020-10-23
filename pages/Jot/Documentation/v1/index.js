import Head from 'next/head';
import Layout from '../../../../components/layout';
import FunctionList from '../../../../components/FunctionList';
import {getUsageInfo} from '../../../../lib/filesystem';

export default function JotV1Page(props) {
    return (
        <Layout>
            <Head>
                <title>Jot Documentation Overview</title>
            </Head>
            <FunctionList dirPath="v1" funcList={props.pages} />
        </Layout>
    );
}

export async function getStaticProps() {
    const pages = await getUsageInfo("jotapi", "v1");

    return {
        props: {
            pages
        }
    };
}