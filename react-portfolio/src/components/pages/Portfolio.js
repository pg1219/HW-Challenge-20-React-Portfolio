import React from 'react';
// import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'white',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Portfolio() {
  return (
    <section style={styles.sectionStyles} className="section">
        <h2>Portfolio</h2> 
        <div>
        {/* <div class="image"> */}
        <a href="https://pg1219.github.io/HW1-code-refactor/" target="_blank"><img src="../public/assets/Images/horiseon.jpg" alt="Screen grab of Horiseon webpage"></a>
        {/* <div class="text-box">
          <h4>Challenge 1</h4> */}
        </div>
       </div>
       <div id="second-row">
       <div class="image">
        <a href="https://pg1219.github.io/Group-6-Marvel-Ranker/" ><img src="../public/assets/Images/marvelMock.png" alt="Project 1 mock up"></a>
       </div>
       <div class="image">
        <a href="https://nameless-ravine-04537.herokuapp.com/" ><img src="../public/assets/Images/timekeeperlogo.jpg" alt="timekeeper logo"></a>
       </div>
      </div>
  );
}

export default Portfolio;
