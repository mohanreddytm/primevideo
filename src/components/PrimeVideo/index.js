import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="main-container-all-time">
      <img
        className="main-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="lower-one-container">
        <h1 className="movies-heading">Action Movies</h1>
        <div className="making-width">
          <MoviesSlider details={moviesList} joner="ACTION" />
        </div>

        <h1 className="movies-heading">Comedy Movies</h1>
        <div className="making-width">
          <MoviesSlider details={moviesList} joner="COMEDY" />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
