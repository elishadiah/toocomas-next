import Head from 'next/head';
import useTwitter from '../hooks/useTwitter';

export default function Home() {
  const data = useTwitter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{JSON.stringify(data, null, 2)}</main>
    </>
  );
}
