import './App.css';
const { PUBLIC_URL } = process.env;
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img src={`${PUBLIC_URL}/images/me.jpeg`}/>
        <header>
          <h2> Chit thiri Maung</h2>
          <a href="mailto:chitthirimaung@gmail.com">email me</a><br/>
          <a href="https://www.linkedin.com/in/chit-thiri-maung">Linked In</a>
          <p>Chit is passionate programmer with 12+ years of experience in UI Engineering technologies like Angular, React, Vue.js. Enthusiastic in User experience and strongly believe in writing clean code and reusable components to give users meaningful experiences. Working with the scrum team on prioritisation, estimations and planning to deliver the project deliverables. </p>
          </header>
      </div>
        <div className="content">
          <h3>EXPERIENCE</h3>
          <ul>
            <li>Expertise in HTML, CSS, JavaScript, Typescript</li>

            <li> Experienced with JavaScript libraries and frameworks, Angular, React, Nodejs</li>

            <li> Experienced with AJAX/JSON and web API integration</li>

            <li> Experienced in responsive design using with frameworks such as Bootstrap or without Framework</li>

            <li> Experienced with source code management tools such as SVN, Git, Bitbucket, JIRA.</li>

            <li> Typescript, ES6, Progressive WebApp and AI</li>

            <li> Self-driven and seek continuous improvement opportunities in systems and business processes.</li>

            <li> Work collaboratively with cross-functional distributed teams in engineering, QA and product
              management in all phases</li>
          </ul>
          <div className='divider'></div>
          <h3>Contribution and Volunteer</h3>
            <ul>
              <li>Invited as Activated Young Talent Opensource Women Adacamp DC (Women in OpenSource) which was held July 10-12 at Washington DC.
                 Community Manager at Mozilla Myanmar Community (2011 to 2013) Mozilla Representative (2011 to 2013)<br/>
                 <a href='https://reps.mozilla.org/u/ahkeno/'>https://reps.mozilla.org/u/ahkeno/</a>  </li>
              <li>Contribute to Mozilla Reps, Joomla Conference and build as birdge between burmese community and developer network.</li>
            </ul>
      </div>
      
    </div>
  );
}

export default App;
