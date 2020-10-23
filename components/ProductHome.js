import Layout from './layout';
import Head from 'next/head';
import Link from 'next/link';
import productHome from './productHome.module.css';

export default function ProductHome(props) {
    // Determines link, filtering out "Borum" if it's part of the product name
    const link = props.name.includes("Borum") ? props.name.substring(6) : props.name;

    return (
        <Layout {...props}>
            <Head>
                <title>{props.name} API Home</title>
            </Head>

            <ul className={productHome.productServices}>
                <li><Link href={`./${link}/Documentation/v1/Overview`}><a>Documentation</a></Link></li>
            </ul>
        </Layout>
    );
}