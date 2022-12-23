import Head from 'next/head';

export const MetaData = (props) => {
    return (
        <Head>
            <title>{`seggi | ${props.page}`}</title>
        </Head>
    );
};
