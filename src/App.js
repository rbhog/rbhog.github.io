import './App.scss';
// import scrollStyle from './scroll.module.scss';
import Gallery from './components/Gallery';
import { SocialIcon } from 'react-social-icons';
import {FaChevronDown} from 'react-icons/fa';

function App() {
  let arrowStyle = {
    position: "absolute", 
    bottom: "40px", 
    // transform: "translate(-50%, -50%)",
    // transition: "200ms all ease",
    // animation: "animate 2s ease",
    // animationIterationCount: "infinite"
  };
  return (
    <div class="wrapper">
      <div class="intro">
        <h1>My name is <div class="name">Rithvik Bhogavilli</div>!</h1>
        <h2>I'm a senior in the SMCS program at Poolesville High School.</h2>
        <hr width="100rem"/>
        <FaChevronDown onClick={() => {
          window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: "smooth"
          })
          }}
          style={arrowStyle}
        />
      </div>
      <div class="about">
        <div class="about_face">
          <img 
            style={{
              borderRadius: "50%",
              width: "256px",
              height: "256px",
              objectFit: "cover"
            }}
            src="/tomas.png"></img>
        </div>
        <div class="about_splitter"></div>
        <div class="about_blurb">
          <p>
            Hi there, I guess you found me. I'm Rithvik and I'm a senior in high school. I do robotics, cybersecurity, and engineering. If you are good at web development, please help me.
          </p>
        </div>
      </div>
      <div class="socials">
        <SocialIcon url="https://www.linkedin.com/in/rithvik-bhogavilli/" bgColor="#fff" />
        <SocialIcon url="https://github.com/rbhog" bgColor="#fff" />
        <SocialIcon url="https://www.instagram.com/rbhog/" bgColor="#fff" />
        <SocialIcon url="mailto:rbhogavilli@gmail.com" bgColor="#fff" />
      </div>
      <Gallery />
    </div>
  );
}

export default App;
