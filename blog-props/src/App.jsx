import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import data from './data'

const App = () => {

  const posts = data.map(item => {
    return (
      <BlogPost
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <section className='postList'/>
          {posts}
        <Footer/>
    </div>
  )
}

export default App
