import { useEffect, useState } from 'react';
import CardComponet from '../components/Card/Card.jsx';

export default function Movies() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();


    useEffect(() => {
        if (loading) {
            fetch('https://api-pelis-back.onrender.com/comedia')
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


                {data.peliculas.map((movie, index) => {
                    return <CardComponet key={index} titulo={movie.titulo} portada={movie.portada} text={movie.sinopsis} />
                })}
            </>
        );
    }
}