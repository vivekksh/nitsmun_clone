import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title';
import Gallery from './components/Gallery/Gallery';
import Review from './components/Review/Review';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
       <Title subTitle='Gallery' title='Photo Gallery'/>
       <Gallery/>
       <Title subTitle='Review' title='What student Says'/>
       <Review/>
      </div>
    </div>
  );
}

export default App
