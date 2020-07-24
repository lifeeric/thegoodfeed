import React, {Component} from 'react';
import '../EmotionCSS.css';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

class Sad extends Component {
    render(){
        return(
          <div class="container">
            <div class="emojiNavBar">
              <div class="emoji">
                <Link to="/anxiety" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/cDXx3RL.jpg" alt="anxietyEmoji" class="emojiImg" />
                  <p>Anxious</p>
                </Link>
              </div>
              <div class="emoji">
                <Link to="/happy" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/a19PgPn.jpg" alt="happyEmoji" class="emojiImg" />
                  <p>Happy</p>
                </Link>
              </div>
              <div class="emoji">
                <Link to="/angry" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/Wm7bH2r.jpg" alt="angryEmoji" class="emojiImg" />
                  <p>Angry</p>
                </Link>
              </div>
              <div class="emoji selectedEmoji">
                <Link to="/sad" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/4bTQhis.jpg" alt="sadEmoji" class="emojiImg" />
                  <p>Sad</p>
                </Link>
              </div>
              <div class="emoji">
                <Link to="/fear" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/BQtaQJm.jpg" alt="fearEmoji" class="emojiImg" />
                  <p>Fear</p>
                </Link>
              </div>
              <div class="emoji">
                <Link to="/meh" style={{ textDecoration: 'none' }}>
                  <img src="https://imgur.com/QQV4kCY.jpg" alt="mehEmoji" class="emojiImg" />
                  <p>Meh</p>
                </Link>
              </div>
            </div>

            <div className="container align-items-center mt-5">
              <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/Dx7O0AP.jpg></iframe>" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://youtube.com/embed/PRJHORk4pZg" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/pCu09GI.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                          <a href="https://www.goodreads.com/book/show/40880320-don-t-be-sad" target="_blank" rel="noopener noreferrer"> 
                          <img src="https://imgur.com/nB2BqRI.jpg" alt="..." className="card-img-top rounded Big"/></a>
                      
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/3lrAI6u.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                    <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/16112413-reclaim-your-heart" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/OwngtC6.jpg" alt="..." className="card-img-top rounded Big"/></a>
                      
                        </div>
                      </div>
                    </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/0ugBQDD.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://deenspiration.com/podcast-player/" target="_blank" rel="noopener noreferrer">   
                        <img src="https://imgur.com/lqHOshv.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/BZThqeX.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="http://mentalhealth4muslims.com/dealing-with-grief/" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/145Tbuo.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                       <img src="https://imgur.com/TR1tSZY.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://yaqeeninstitute.org/sarah-sultan/everything-is-falling-apart-dealing-with-unexpected-life-detours/" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/EkK7Kdb.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                    </div>

                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/X4nErHM.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://youtube.com/embed/Qdkrzb9zwBs" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/yBB817G.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/41811277-surahs-verse-from-the-holy-quran-for-stress-depression-anxiety" target="_blank" rel="noopener noreferrer"> 
                          <img src="https://imgur.com/8qJIRXK.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/wNiiFZa.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/910495.Du_a" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/9V245sj.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                  <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                          <img src="https://imgur.com/UypVEW5.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.apa.org/research/action/speaking-of-psychology" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/0W6PwzU.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/oly4jDm.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://thriveglobal.com/stories/stop-social-media-comparison-tips/" target="_blank" rel="noopener noreferrer"> 
                        <img src="https://imgur.com/U03LLyL.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/OJfHHYi.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.psychologytoday.com/us/blog/compassion-matters/201507/the-value-sadness" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/P2JIH0g.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/HrCLIzz.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <Iframe url="https://youtube.com/embed/eFbBBQPgkYk" className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/HqYRmzN.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                  </div>


                  <div className="row mb-4">
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/21413760-the-upward-spiral" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgur.com/hRENN3A.jpg" alt="..." className="card-img-top rounded Big"/></a>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <img src="https://imgur.com/ZBZrPr3.jpg" alt="..." className="card-img-top rounded"/>
                        </div>
                      </div>
                      <div className="col xl-4">
                        <div className="card img-fluid border border-white rounded">
                        <a href="https://www.goodreads.com/book/show/13237327-the-magic" target="_blank" rel="noopener noreferrer">  
                        <img src="https://imgur.com/8TAJrBY.jpg" alt="..." className="card-img-top  rounded Big"/></a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          
            
        );
    }
}

export default Sad;
