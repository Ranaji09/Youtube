import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'


const Video = () => {
     const { videoId, categroryId } = useParams();
     return (
          <>
               <div className="play-container">
                    <Playvideo videoId={videoId} />
                    <Recommended categroryId={categroryId} />

               </div>
          </>
     )
}

export default Video