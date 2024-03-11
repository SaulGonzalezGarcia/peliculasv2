import { useEffect, useState } from 'react';
import CardComponet from '../components/Card/Card.jsx';
import './movies.css';

export default function Movies(props) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();


    useEffect(() => {
        if (loading) {
            fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setLoading(false);
                });
        }
    }, []);

    if (loading) {
        return <>
            <p>Loading...</p>
        </>

    } else {
        return (
            <>
                <h1 className="titulo">Welcome {data.genero}</h1>
                <div className="container">
                <div className="row">
                
                {data.peliculas.map((movie, index,) => {
                    return (
                    <div className="col cardHover">
                    <CardComponet key={index} titulo={movie.titulo} portada={movie.portada} sinopsis={movie.sinopsis}/></div>
                    )
                })}
                        </div>
                    </div>
            </>
     
        );
    }
}