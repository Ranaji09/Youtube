import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import like from '../../assets/Like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.jpg'
import moment from 'moment'
import { API_KEY, value_convter } from '../../data'
import { useParams } from 'react-router-dom'

const Playvideo = ({ }) => {
     const { videoId } = useParams();
     const [apiData, setapiData] = useState(null)
     const [channelData, setchannelData] = useState(null)
     const [commentData, setcommentData] = useState([]);
     const fectvideoData = async () => {
          // Fech Our Video Data.
          const vodeoDetaild_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
          await fetch(vodeoDetaild_url).then(res => res.json()).then(data => setapiData(data.items[0]))
     }
     const fetchotherData = async () => {
          // fect Channel Data url
          const channelData_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
          await fetch(channelData_url).then(res => res.json()).then(data => setchannelData(data.items[0]))

          // Feaching commet data 
          const comment_url = `  https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=20&videoId=${videoId}&key=${API_KEY} `
          await fetch(comment_url).then(res => res.json()).then(data => setcommentData(data.items))
     }

     useEffect(() => {
          fectvideoData();
     }, [videoId])

     useEffect(() => {
          fetchotherData();
     }, [apiData])

     return (
          <div className='play-video'>
               {/* <video src={vide1} controls autoPlay muted></video> */}
               <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               <h3>{apiData ? apiData.snippet.title : "Title Hare"}</h3>
               <div className="play-video-info">
                    <p>{apiData ? value_convter(apiData?.statistics.viewCount) : "16K"} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : " "} </p>
                    <div>
                         <span><img src={like} alt="" />{apiData ? value_convter(apiData.statistics.likeCount) : 200}</span>
                         <span><img src={dislike} alt="" title='dislike' /></span>
                         <span><img src={share} alt="" title='share' /></span>
                         <span><img src={save} alt="" title='save' /></span>
                    </div>
               </div>
               <hr />
               <div className="publisher">
                    <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                    <div>
                         <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                         <span>{channelData ? value_convter(channelData.statistics.subscriberCount) : " "} Subscribers</span>
                    </div>
                    <button>Subscribe</button>
               </div>
               <div className="vid-discription">
                    <p> {apiData ? apiData.snippet.description.slice(0, 250) : " Description is Hare"} </p>
                    <hr />
                    <h4>  {apiData ? value_convter(apiData.statistics.commentCount) : 200} Comments</h4>

                    {commentData.map((item, index) => {
                         return (
                              <div key={index} className="comment">
                                   <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                   <div>
                                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                        <div className='comment-action'>
                                             <img src={like} alt="" />
                                             <span>{value_convter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                             <img src={dislike} alt="" />
                                        </div>
                                   </div>

                              </div>
                         )
                    })}


               </div>
          </div>
     )
}

export default Playvideo