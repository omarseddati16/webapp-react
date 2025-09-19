import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function DetailFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`)
      .then(resp => setFilm(resp.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center my-5">
      <div className="card m-3">
        <h2>{film.title}</h2>
        <img className='p-3' src={`http://localhost:3000/img/${film.image}`} alt={film.title} style={{ width: '500px' }} />
        <p className="mt-3 ">{film.description}</p>
        <Link to="/" className="btn btn-secondary mb-3 ">Torna ai films</Link>
      </div>
    </div>
  );
}

export default DetailFilm
