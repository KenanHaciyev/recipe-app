import './App.css'
import {Col, Row} from "antd";
import HomePage from "./Layouts/HomePage";
import HeaderComponent from "./components/HeaderComponent";

function App() {

  return (
      <Row justify='center' >
          <Col>
              <HeaderComponent/>
              <HomePage/>
          </Col>
      </Row>
  )
}

export default App
