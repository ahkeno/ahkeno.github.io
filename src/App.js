import ContactMe from './componets/contactMe';
import Experiences from './componets/experiences';
import Contribute from './componets/contribution';
import './App.css';
const { PUBLIC_URL } = process.env;
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <img src={`${PUBLIC_URL}/images/me.jpeg`}/>
        <header>
          <h2> Chit thiri Maung</h2>
          <ContactMe></ContactMe>
          <p>Chit is passionate programmer with 12+ years of experience in UI Engineering technologies like Angular, React, Vue.js. Enthusiastic in User experience and strongly believe in writing clean code and reusable components to give users meaningful experiences. Working with the scrum team on prioritisation, estimations and planning to deliver the project deliverables. </p>
          </header>
      </div>
        <div className="content">
          <Experiences></Experiences>
          <div className='divider'></div>
          <Contribute></Contribute>
          <div className='divider'></div>
      </div>
      
    </div>
  );
}

export default App;
