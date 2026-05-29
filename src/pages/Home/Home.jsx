import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
        <Sidebar sidebar={sidebar} />
        <div className={`container ${sidebar?"":'large__container'}`}>
            <Feed/>
        </div>
    </>
  )
}

export default Home