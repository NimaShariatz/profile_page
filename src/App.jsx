import Navigation from "./components/Navigation/Navigation.jsx"
import Education from "./components/Education/Education.jsx"
import Education_touchedOn from "./components/Education/Education_touchedOn.jsx"
import Project_sect from "./components/Project/Project_sect.jsx"
import Experience from "./components/Experience/Experience.jsx"

const App = () => {
  return (
    <main>
      <Navigation/>
      <Education/>
      <Education_touchedOn/>
      <Project_sect/>
      <Experience/>




      <div style={{paddingBottom: "500px"}}>
        
      </div>
      
    </main>
  )
}
export default App
