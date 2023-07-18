import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <header class="header">
      <img src="./assets/Images/headshot.jpg" alt="PG headshot">
      <h1 id="h1">Peter Gronseth </h1> 
      <nav>
        <ul>
          <li><a href="#About-Me">About Me</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#Contact-Me">Contact Me</a></li>
        </ul>
      </nav>
    </header>
    </section>
    <main>
      <section id="About-Me" class="section">
        <h2 class="container">About Me</h2>
          <p>My name is Peter and this is my portfolio. I am a bootcamp student learning to code for the first time. This portfolio will highlight my best efforts throughout the class.
        </p>
    </section>
    <section id="Work" class="section">
        <h2 class="work-container">Work</h2> 
        <div>
        <div class="image">
        <a href="https://pg1219.github.io/HW1-code-refactor/" target="_blank"><img src="./assets/Images/horiseon.jpg" alt="Screen grab of Horiseon webpage"></a>
        <div class="text-box">
          <h4>Challenge 1</h4>
        </div>
       </div>
       <div id="second-row">
       <div class="image">
        <a href="https://pg1219.github.io/Group-6-Marvel-Ranker/" ><img src="./assets/Images/marvelMock.png" alt="Project 1 mock up"></a>
       </div>
       <div class="image">
        <a href="https://nameless-ravine-04537.herokuapp.com/" ><img src="./assets/Images/timekeeperlogo.jpg" alt="timekeeper logo"></a>
       </div>
      </div>
        </div>
      </section>
      <section id="Contact-Me" class="section">
        <h2 class="contact-container">Contact Me</h2>
        <div>
        <ul class="section-div">
          <li><strong id="phone">(203)253-1714</strong></li>
          <li> <a href="mailto:peter.gronseth@gmail.com"><strong>peter.gronseth@gmail.com</strong><a></li>    
          <li><a href="https://github.com/pg1219"><strong>Github</strong></a></li>   
        </ul>
      </div>
      </section>
    </main>
  </body>
  );
}

export default App;
