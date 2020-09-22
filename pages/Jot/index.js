import Layout from '../../components/layout';
import Head from 'next/head';

export default function JotHome(props) {
    return (
        <Layout {...props}>
            <Head>
                <title>Borum Jot API Home</title>
            </Head>

            <ul>
                <li><Link href="./Documentation"><a>Documentation</a></Link></li>
            </ul>
        </Layout>
    );
}