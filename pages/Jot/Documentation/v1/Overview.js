import Head from 'next/head';
import Layout from '../../../../components/layout';
import FunctionList from '../../../../components/FunctionList';
import {getUsageInfo} from '../../../../lib/filesystem';
import jotApiPath from './funcName.module.css';
import restpath from '../../../../components/restapipath.module.css';

export default function JotV1PageOverview(props) {
    return (
        <Layout>
            <Head>
                <title>Jot Documentation Overview</title>
            </Head>
            <nav className={jotApiPath.functionNav}>
                <FunctionList activeFunc="Overview" funcList={props.usageInfo} />
            </nav>
            <div className={jotApiPath.pathInfo}>
                <article className={restpath.restpath}>
                    <p className={restpath.description}>
                        The Borum Jot Documentation provides serverless functions for getting authorized access to user jottings, labels, and share circles
                    </p>
                </article>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let usageInfo = await getUsageInfo("jotapi", "v1");
    
    return {
        props: {
            usageInfo,
        }
    }
}