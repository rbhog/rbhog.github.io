import './App.scss';

function App() {
  return (
    <div class="wrapper">
      <div class="intro">
        <h1>My name is <div class="name">Rithvik Bhogavilli</div>!</h1>
        <h2>I'm a senior in the SMCS program at Poolesville High School.</h2>
        <hr width="100rem"/>
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
          <p>Hi there, I guess you found me. I'm Rithvik and I'm a senior in high school. I do robotics, cybersecurity, and engineering. If you are good at web development, please help me.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
