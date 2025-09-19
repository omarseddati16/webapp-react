import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function HomePage() {
  const [films, setFilms] = useState([])

  const fetchFilms = () => {
    axios.get('http://localhost:3000/movies').then((resp) => {
      setFilms(resp.data)
    })
      .catch((err) => console.log(err))
  };

  useEffect(fetchFilms, [])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-center my-5'>
      <div className="row">
        {films.map((film) => (
          <div key={film.id} className="col-md-4">
            <div className="card m-3">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{film.title}</h5>
                <img className="card-image" src={`http://localhost:3000/img/${film.image}`} alt='' style={{ width: '100%' }} />
                <p className="card-text">{film.description}</p>
                <Link to={`/films/${film.id}`} className="btn btn-primary ">
                  Dettagli
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
