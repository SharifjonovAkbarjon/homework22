import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Stayhome from '../../components/StayHome/Stayhome'
import Collection from '../../components/Collection/Collection'

const Home = () => {
    return (
        <>
            <Hero/>
            <Featured/>
            <Stayhome/>
            <Collection/>
        </>
    )
}

export default Home