import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/api/movieApi'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let movieText;
    const fetchMovies = async () => {
      const response = await movieApi.get(`/titles`)
      .catch((error) => {
        console.log("Err:", error);
      })
      console.log(response);
      dispatch(addMovies(response.data))
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