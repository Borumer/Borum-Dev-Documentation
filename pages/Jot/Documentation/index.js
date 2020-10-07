import Layout from '../../../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function JotDocumentation(props) {
    return (
        <Layout>
            <Head>
                <title>Borum Jot API Documentation</title>
            </Head>

            <ul>
                <li><Link href="./Documentation/v1"><a>v1</a></Link></li>
            </ul>
        </Layout>
    );
}