import { useEffect } from "react"
import Container from "./screens/components/Container"
import Router from "./utils/Router"
import NavBar from "./screens/templates/NavBar"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { useDispatch } from "react-redux"
import { authCheck } from "./store/authSlice"

const App = () => {
  const dispatch = useDispatch();
  
  // Used for checking if tehre is any active token/session on going on the web application
  useEffect(() => {
    dispatch(authCheck());
  })

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
