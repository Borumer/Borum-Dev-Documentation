import Head from 'next/head';
import Layout from '../../../../components/layout';
import FunctionList from '../../../../components/FunctionList';
import {loadApiSpecFile} from '../../../../lib/filesystem';
import flytrapApiPath from './funcName.module.css';
import restpath from '../../../../components/restapipath.module.css';

export default function FlytrapV1PageOverview(props) {
    return (
        <Layout>
            <Head>
                <title>Flytrap Documentation Overview</title>
            </Head>
            <nav className={flytApiPath.functionNav}>
                <FunctionList activeFunc="Overview" funcList={props.usageInfo} />
            </nav>
            <div className={flytrapApiPath.pathInfo}>
                <article className={restpath.restpath}>
                    <p className={restpath.description}>
                        The Flytrap Documentation provides serverless functions for getting authorized access to user audios, folders, and share circles
                    </p>
                </article>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let usageInfo = await loadApiSpecFile("flytrapapi", "v1");
    
    return {
        props: {
            usageInfo,
        }
    }
}