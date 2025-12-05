import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Novita from './components/Novità'
import SideBar from './components/SideBar'
import { Container, Row, Col } from 'react-bootstrap'
import NewEpiRadio from './components/NewEpiRadio'
import NewSongs from './components/NewSongs'
import Esplora from './components/Esplora'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <div className="d-flex flex-grow-1">
      <SideBar />
      <Container className="flex-grow m-0 bg-dark">
        <Row>
          < MyNavbar />
          <div className="bg-dark">
            <Novita />
            <NewEpiRadio />
            <NewSongs />
            <Esplora />
          </div>
          <MyFooter />
        </Row>
      </Container>
    </div>
  );
};


export default App
