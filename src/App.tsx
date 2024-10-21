import Container from "./components/Container"
import Router from "./Router"
import NavBar from "./templates/NavBar"
import "@fortawesome/fontawesome-free/css/all.min.css"

const App = () => {

  return (
    <>
      <Container class="flex flex-col min-h-screen">
        <NavBar />
        <Container class="flex-grow">
          <Router />
        </Container>  
      </Container>
    </>
  )
}

export default App
