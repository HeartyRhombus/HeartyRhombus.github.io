import './App.css';
import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ContactContainer from './containers/ContactContainer';

function App() {
  return (
    <div className="App">
      <AboutContainer/>
      <ProjectsContainer/>
      <ContactContainer/>
    </div>
  );
}

export default App;
