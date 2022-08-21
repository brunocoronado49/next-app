import Navigation from './nav'
import Head from 'next/head'

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>NextJs App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/solar/bootstrap.min.css" integrity="sha384-NCwXci5f5ZqlDw+m7FwZSAwboa0svoPPylIW3Nf+GBDsyVum+yArYnaFLE9UDzLd" crossorigin="anonymous" />
      </Head>
      <Navigation />
      <div className="container p-4">{props.children}</div>
    </div>
  );
}

export default Container