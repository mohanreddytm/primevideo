import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachItem} = props

  const {thumbnailUrl, videoUrl} = eachItem

  console.log('mohan')

  return (
    <div>
      <Popup
        modal
        trigger={
          <img className="thumbnail-url" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="video-container">
            <IoMdClose
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            />
            <ReactPlayer controls url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
