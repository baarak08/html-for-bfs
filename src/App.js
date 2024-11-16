import React from 'react';
import './App.css';
import logo from './svg/logo.svg';
import satu from './svg/1.svg';
import dua from './svg/2.svg';
import tiga from './svg/3.svg';
import empat from './svg/4.svg';
import laptop from './svg/laptop.svg';
import baarak from './svg/baarak.svg';
import rizky from './svg/rizky.svg';
import farrel from './svg/farrel.svg';
import nadhirul from './svg/nadhirul.svg';
import dicky from './svg/dicky.svg';
import hp from './svg/hp.svg';
import buttonDownload from './svg/buttonDownload.svg';
import video from './mp4/StoryVideo.mp4';


function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <video className="header-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <img src={logo} alt="Overlay" className="header-image" />
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Game Description */}
        <section className="description">
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
        <section className="features">
          <h2>Expensive Experience For Free!</h2>
          <div className="feature">
          <div className='featureContent'>
          <h1>Play with Seamless Controller</h1>
          <p>
              Journey through lush landscapes and ancient battlegrounds as you join forces with friends to repel the invaders.
            </p>
            </div>
            <img src={laptop} alt="Feature 1" />
          </div>
          <div className="feature">
            <img src={hp} alt="Feature 2" />
            <div className='featureContent'>
            <h1>Immersive-Interactive Games</h1>
            <p>
            Journey through lush landscapes and ancient battlegrounds as you join forces with friends to repel the invaders.            
            </p>
            </div>
          </div>
        </section>

        <div className="spacer"></div>

        {/* How to Play Section */}
        <section className="how-to-play">
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

        {/* About Section */}
        <section className="about">
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
        <section className="available-now">
          <h2>Available Now!</h2>
          <p>
          Journey through lush landscapes and ancient battlegrounds as you join forces with friends to repel the invaders, protect Kodonia’s delicate balance, and safeguard the elemental forces that bind their world. In Bender Force Saga, the fate of Kodonia rests in your hands—do you have the strength to protect its legacy?          </p>
          <div className="store-buttons">
          <a
          className="App-link"
          href="https://testflight.apple.com/join/w9jRVJzG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={buttonDownload}/>
          </a>
          </div>
        </section>

    

        <div className="spacer"></div>

      </main>
    </div>
  );
}

export default App;
