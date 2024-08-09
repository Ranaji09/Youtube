import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { API_KEY, value_convter } from '../../data'
import { Link } from 'react-router-dom';

const Recommended = (categroryId) => {
     const [apiData, setapiData] = useState([]);
     const fetchData = async () => {
          const relatedVideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&${categroryId}=0&key=${API_KEY}`
          await fetch(relatedVideo_url).then(res => res.json()).then(data => setapiData(data.items))
     }
     useEffect(() => {
          fetchData()
     }, [])
     return (
          <>
               <div className='recommended'>
                    {apiData.map((item, index) => {
                         return (
                              <Link to={`/video/${item.snippet.categroryId}/${item.id}`} key={index} className="side-video-list">
                                   <img src={item.snippet.thumbnails.medium.url} alt="" />
                                   <div className="vide-info">
                                        <h4>{item.snippet.title}</h4>
                                        <h3>{item.snippet.channelTitle}</h3>
                                        <p>{value_convter(item.statistics.viewCount)} views</p>
                                   </div>
                              </Link>
                         )
                    })}

               </div>
          </>
     )
}

export default Recommended