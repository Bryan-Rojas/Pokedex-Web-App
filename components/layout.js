import Head from 'next/head';
import Navigation from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Pokedex</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
        </Head>
        <Navigation/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;