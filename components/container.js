import Navigation from './nav'
import Head from 'next/head'

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>NextJs App</title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
}

export default Container