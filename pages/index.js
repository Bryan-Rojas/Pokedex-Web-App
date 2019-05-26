import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import PkmnCard from '../components/pkmncard';

const Index = (props) => (
    <Layout>
        <center>
            <h1>React-dex</h1>
            Welcome to Bryan's Pokedex Web Application built with React. :)
            <hr/>
        </center>
        <div className="row">
            <PkmnCard/>
            <PkmnCard/>
            <PkmnCard/>
            <PkmnCard/>
            <PkmnCard/>
        </div>

    </Layout>
);

Index.getInirialProps = async function() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.count}`)
    
    return {
        pokemons: data.map(entry => entry.pkmn)
    }
}

export default Index;