import Navigation from "./components/Navigation/Navigation.jsx"
import Education from "./components/Education/Education.jsx"
import Education_touchedOn from "./components/Education/Education_touchedOn.jsx"
import Project from "./components/Project/project.jsx"


const App = () => {
  return (
    <main>
      <Navigation/>
      <Education/>
      <Education_touchedOn/>
      <Project/>



      <div style={{paddingBottom: "1600px"}}>
        
      </div>
      
    </main>
  )
}
export default App
