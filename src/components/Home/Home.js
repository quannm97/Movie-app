import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/api/movieApi'


const Home = () => {

  useEffect(() => {
    let movieText;
    const fetchMovies = async () => {
      const response = await movieApi.get(`/titles`)
      .catch((error) => {
        console.log("Err:", error);
      })
      console.log(response);
    }
    fetchMovies();
    
  }, [])
  

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing></MovieListing>
    </div>
    
  )
}

export default Home