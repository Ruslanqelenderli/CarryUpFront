import { Button, Col, Row } from "reactstrap";
import "./assets/css/style.css"
import logo from "./assets/images/1.png"


function App() {
  return (
    <div>
      <header>
        <div>
          <h1>NH</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">About me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>

          </ul>
        </nav>
      </header>
      <Row className="main">
        <Col md="8" style={{marginTop:"120px"}}>
          <section>
            <h3>Hi There!</h3>
            <h1>I am Frontend Developer</h1>
            <h2>Nurjan Huseynova</h2>
            <p>Welcome to my portfolio.</p>
            <Button>Explore my work </Button>
         

          </section>
        </Col>
        <Col md="3">
          <aside>
            <img src={logo} />
          </aside>
        </Col>


      </Row>

      <div className="about">
   <p>
          I graduated from Baku Engineering University majoring in Information
          Technologies. I am a Frontend developer with 1+ years of experience in
          enterprise level design, development and implementation. I have strong
          problem-solving skills and the ability to work effectively in a
          team-based environment.
        </p>
      </div>

    </div>
  );
}

export default App;
