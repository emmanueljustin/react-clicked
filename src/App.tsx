import Router from "./Router"
import NavBar from "./templates/NavBar"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Router />
        </div>  
      </div>
    </>
  )
}

export default App
