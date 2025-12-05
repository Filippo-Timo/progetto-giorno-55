import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const NewSongs = () => {
    const [data, setData] = useState([]);
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=pupo';

    const getSongs = () => {
        fetch(apiUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Errore nella risposta!");
                }
            })
            .then(songs => {
                setData(songs.data.slice(0, 10));
            })
            .catch(error => {
                console.error("Errore nel recupero delle canzoni:", error);
            });
    };

    useEffect(() => {
        getSongs();
    }, []);

    return (

        <Container>
            <h2 className="text-light mb-4">Nuove uscite <i class="bi bi-caret-right-fill"></i></h2>
            <Row className="row-cols-3 row-cols-md-5">
                {data.map((song, i) => (
                    <Col key={i} className="my-3">
                        <div className="text-center">
                            <img
                                src={song.album.cover}
                                alt={song.title}
                                className="img-fluid rounded w-100 mb-2"
                            />
                            <p className="text-light m-0">{song.title}</p>
                            <p className="text-light m-0">{song.artist.name}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </ Container>
    );
};

export default NewSongs;