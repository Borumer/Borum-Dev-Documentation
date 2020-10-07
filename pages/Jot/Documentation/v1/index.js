import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../../components/layout';
import {getUsageInfo} from '../../../../lib/filesystem';

export default function JotV1Page(props) {
    return (
        <Layout>
            <Head>

            </Head>

            <ul>
                {props.pages.map(item => (
                <li><Link href={`./v1/[path].js`} as={`./v1/${item.funcName}`}><a>{item.name}</a></Link></li>
                ))}
            </ul>
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