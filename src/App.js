import React, { Component } from 'react';
import './App.css';
import './youtube-search.js'

const API_KEY = 'AIzaSyCQZaqAqDtqyff4Syz5X285h3wVswCCh8c'

class App extends Component {

  



  render() {
    return (
    <a>
     <body className="body">
       <div id="container" className="container">
         <header className="header">
           <h1 className="h1" >Search <span className="span" >Videos</span></h1>
           <p>Search all YouTube Videos</p>
         </header>
         <section className="section">
           <form id="search-form" className="search-form" method="get" action="">
             <div class="fieldcontainer" className="fieldcontainer">
               <input type="search" id="query" name="query" class="search-field" className="search-field" placeholder="Search YouTube"/>
               <input type="submit" name="search-btn" class="search-btn" className="search-btn" value="검색" />
             </div>
           </form>

           <ul id="results" class="item-list">
             <li class="item" className="item">
               <a className="a1" href="http://www.youtube.com/watch?v=e3Nl_TCQXuw" target="_blank">
               <h3 className="h3">Beauty and the Beast – US Official Final Trailer</h3>
               <div class="image-wrapper">
                 <img className="img" src="https://i.ytimg.com/vi/e3Nl_TCQXuw/hqdefault.jpg"/>
               </div>
               <div class="description" className="description">
                 <small>By <span class="channel-title" className="channel-title">Disney Movie Trailers</span> on <time>2017-01-31T02:44:39.000Z</time></small>
                 <p className="p">The final trailer for Beauty and the Beast is here On March 17, rediscover a tale as old as time. Get your tickets now at BeOurGuest.com -- Disney's “Beauty ...</p>
               </div>
             </a></li>
           </ul>
         </section>
       </div>
     </body>
     </a>
    );
  }
}

export default App;
