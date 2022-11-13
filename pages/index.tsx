import { DatePicker } from 'antd'
import Head from 'next/head'
import { FC } from 'react'
import GithubNotice from '../components/GithubNotice'
import AppLayout from '../components/AppLayout'
// import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: FC = () => {
  return (
    <>
    <AppLayout>
      <Head>
        <title>DevTool</title>
        <meta name="description" content="A simple development tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GithubNotice />
      </main>
    </AppLayout>
    </>
  );
}

export default Home
