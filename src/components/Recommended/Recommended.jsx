import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'


const Recommended = ({categoryId}) => {

    const [apiData,setApiData] = useState([]);

    const fetchData = async () =>{

        console.log("categoryId:", categoryId)

        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url)
            .then(res=>res.json())
            .then(data=>setApiData(data.items || []));
    }

    useEffect(()=>{
        if (categoryId) {
            fetchData();
        }
    },[categoryId])

    console.log(apiData)
    
  return (
    <div className="recommended">
        {apiData?.map((item, index)=>{
            return (
                <div key={index} className="side__video--list">
                    {item.snippet.thumbnails.medium && (
                        <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                    )}
                    <div className="video__info">
                        <h4>Best channel that helps you become a web developer</h4>
                        <p>GreatStack</p>
                        <p>199K Views</p>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default Recommended