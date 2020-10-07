import Layout from './layout';
import Head from 'next/head';
import Link from 'next/link';

export default function ProductHome(props) {
    // Determines link, filtering out "Borum" if it's part of the product name
    const link = props.name.includes("Borum") ? props.name.substring(6) : props.name;

    return (
        <Layout {...props}>
            <Head>
                <title>{props.name} API Home</title>
            </Head>

            <ul>
                <li><Link href={`./${link}/Documentation`}><a>Documentation</a></Link></li>
            </ul>
        </Layout>
    );
}