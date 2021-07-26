import './App.css';
import NavBar from './components/NavBar'
import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ContactContainer from './containers/ContactContainer';

function App() {
  return (
    <div id="home" className="App">
      <div className="NavBar">
        <NavBar/>
      </div>
      <div>
        <AboutContainer/>
      </div>
      <div id="projects">
        <ProjectsContainer/>
      </div>
      <div id="contact">
        <ContactContainer/>
      </div>
    </div>
  );
}

export default App;
