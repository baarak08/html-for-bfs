import React from 'react';
import './App.css';
import satu from './svg/1.svg';
import dua from './svg/2.svg';
import tiga from './svg/3.svg';
import empat from './svg/4.svg';
import laptop from './svg/mac.svg';
import baarak from './svg/baarakFoto.svg';
import rizky from './svg/rizkyFoto.svg';
import farrel from './svg/farrelFoto.svg';
import nadhirul from './svg/nadhirulFoto.svg';
import dicky from './svg/dickyFoto.svg';
import hp from './svg/hp.svg';
import video from './mp4/StoryVideo.mp4';
import videodemo from './svg/gameplay.svg';
import videodemoBg from './svg/bg.svg';
import insta from './svg/instagram.svg';
import line from './svg/pembatas.svg';
import logo from './svg/bfs.svg';
import Navbar from './Navbar';


function App() {
  return (
    <div className="app">
      
      {/* Navigation Bar */}
      <Navbar/>

      {/* Header Section */}
      <header className="header">
        <video className="header-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Game Description */}
        <section id="description" className="description">
        <div style={{ height: '60px', marginTop: '-60px' }} id="how-to-play-offset"></div>
          <h1>Bender Force Saga</h1>
          <h2>Arcade experience at home.</h2>
          <p>
          In the mystical land of Kodonia, where elemental forces intertwine to create a world of boundless beauty, darkness stirs at the horizon. Ruthless invaders, drawn by Kodonia’s rich lands, threaten to shatter the harmony that has endured for centuries. Four courageous Kodos—Aghni, Pavana, Tirtha, and Grung—stand as the last line of defense, each embodying a powerful elemental force: Fire, Earth, Wind, and Water.
          </p>
          <p>
          Bender Force Saga is a unique 4-player adventure where players embody the heroic Kodos, defending their homeland through physical movements detected by an iOS app. Using Apple’s Vision and Core ML frameworks, every motion translates into in-game actions, immersing players in an experience where they feel every attack, dodge, and spell cast.          </p>
          <p>
          Journey through lush landscapes and ancient battlegrounds as you join forces with friends to repel the invaders, protect Kodonia’s delicate balance, and safeguard the elemental forces that bind their world. In Bender Force Saga, the fate of Kodonia rests in your hands—do you have the strength to protect its legacy?
          </p>
        </section>

        <div className="spacer"></div>

        {/* Features Section */}
        <section id="features" className="features">
        <div style={{ height: '80px', marginTop: '-80px' }} id="how-to-play-offset"></div>
          <h2>Expensive Experience For Free!</h2>
          <div className="feature">
          <div className='featureContent'>
          <h1>Play with Seamless Controller</h1>
          <p>
          Turn your iPhone into a game controller and experience effortless interaction. Perform physical actions to trigger in-game mechanics, all without tapping the screen.            </p>
            </div>
            <img src={laptop} alt="Feature 1" />
          </div>
          <div className="feature">
            <img src={hp} alt="Feature 2" />
            <div className='featureContent'>
            <h1>Immersive-Interactive Games</h1>
            <p>
            Feel the thrill of becoming a true elemental hero. Your physical movements control attacks, defenses, and abilities, mirroring the actions of the Kodos in battle. Dive into the world of Kodonia where every gesture connects you to the game like never before.            </p>
            </div>
          </div>
        </section>

        <div className="spacer"></div>

        {/* How to Play Section */}
        <section id="how-to-play" className="how-to-play">
        <div style={{ height: '320px', marginTop: '-320px' }} id="how-to-play-offset"></div>
          <h2>How to Play</h2>
          <p>
          Follow these 4 steps to play Bender Force Saga easily with your friends!            
          </p>
          <div className="numbers">

          <div>
          <div className="numbers">
          <img src={satu}/>
          <p>
          Download Bender Force Saga on MacBook         
          </p>
          </div>
          <div className="numbers">
          <img src={tiga}/>
          <p>
          Host a room in Bender Force Saga on MacBook          
          </p>
          </div>
          </div>    

          <div className="duadanempat">
          <div className="numbers">
          <img src={dua}/>
          <p>
          Download DetAction on iPhone as the controller          
          </p>
          </div>
          <div className="numbers">
          <img src={empat}/>
          <p>
          Enter room code and play through DetAction on iPhone          
          </p>
          </div>
          </div> 
          </div>

        </section>

        <div className="spacer"></div>
        
      </main>

        {/* Video Demo Section */}
        <section id='videodemos' className="videodemos">
        <div style={{ height: '320px', marginTop: '-320px' }} id="how-to-play-offset"></div>
          <div className="videodemo">
            <a
            className="App-link"
            href="https://youtu.be/D8se5_odq2Y?si=aOrNm4hwGjE3-xdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img src={videodemo} alt="videodemo" className="videodemoView"/>
            </a>
            <div className='videodemoContent'>
              <h2>Bender Force Saga Demo</h2>
              <p>
              In this exclusive demo, see how Bender Force Saga lets you control the game with physical gestures using your iPhone as the controller.            
              </p>
              <button
              className="buttonVideoDemo"
              onClick={() => window.open('https://youtu.be/D8se5_odq2Y?si=aOrNm4hwGjE3-xdf', '_blank')}
              >
              Watch Demo
              </button>

            </div>
          </div>
          <img src={videodemoBg} alt="videodemoBackground" className='videodemoBackground'/>
          </section>
          <div className="spacer"></div>




      {/* Main Content */}
      <main className="main-content">
      <div className="spacer"></div>


        {/* About Section */}
        <section id="about" className="about">
        <div id="how-to-play-offset"></div>
          <h2>About This Game</h2>
          <p>Bender Force Saga is developed by Motio Studio, a small team from Indonesia in Apple Developer Academy @IL 2024.</p>
          <div className="numbers">
          <img src={rizky}/>
          <img src={farrel}/>
          <img src={dicky}/>
          <img src={nadhirul}/>
          <img src={baarak}/>

          </div>
        </section>

        <div className="spacer"></div>

        {/* Available Now Section */}
        <section id="available-now" className="available-now">
        <div style={{ height: '320px', marginTop: '-320px' }} id="how-to-play-offset"></div>
          <h2>Available Now!</h2>
          <p>
          The wait is over—Bender Force Saga is here! Dive into an epic adventure where your movements control the action. With groundbreaking gameplay that turns your iPhone into a seamless controller, experience the thrill of unleashing elemental powers and defending Kodonia like never before. Don't just play—become the hero. Download now on the App Store and join the fight to restore harmony in this one-of-a-kind immersive game. Kodonia needs you!          </p>
          <div className="store-buttons">
          <a
          className="App-link"
          href="https://testflight.apple.com/join/CWc8euxS"
          target="_blank"
          rel="noopener noreferrer"
          >
          <p>Bender Force Saga (MacOS)</p>
          </a>
          <a
          className="App-link"
          href="https://testflight.apple.com/join/w9jRVJzG"
          target="_blank"
          rel="noopener noreferrer"
          >
          <p>DetAction (iOS)</p>
          </a>
          </div>
        </section>

        <div className="spacer"></div>

      </main>

      <section id="footer" className="footerContainer">
        <div className="footer">
            <div className="subFooter">
            <p>Realeased</p>
            <h2>2024</h2>
            </div>

            <div className="subFooter">
            <p>Developer</p>
            <h2>Motio Studio</h2>
            </div>
            
            <div className="footerIcons">
            <img src={insta} alt="Line" className="navbarImageInsta"/>
            <img src={line} alt="Line" className="navbarImageLine"/>
            <img src={logo} alt="Line" className="navbarImageLogo"/>
            </div>

          </div>
          </section>

        <div className="spacer"></div>
    </div>
  );
}

export default App;
