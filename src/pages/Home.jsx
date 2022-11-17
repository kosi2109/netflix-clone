import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row'
import requests from '../request'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Home