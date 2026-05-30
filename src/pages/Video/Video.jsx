import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

    const {videoId, categoryId} = useParams();

    console.log("Video.jsx videoId:", videoId);

  return (
    <div className="play__container">
        <PlayVideo key={videoId} videoId={videoId}/>
        <Recommended category={categoryId}/>
    </div>
  )
}

export default Video