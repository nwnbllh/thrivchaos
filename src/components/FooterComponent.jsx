import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Thrivchaos Podcast</h3>
            <p className="desc">Central Park Mall 3rd Floor - Unit 112 Podomoro City, Jl. Let. Jend. S. Parman Kav. 28 West Jakarta, 11470, Indonesia</p>
            <div className="no mb-1 mt-4">
              <Link to="https://www.youtube.com/@thrivchaos" className="text-decoration-none">
                <i className="fa-brands fa-youtube"></i>
                <p className="m-0">@thrivchaos</p>
              </Link>
            </div>
            <div className="mail">
              <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKHRtlTbFnJCsRqwmkcgFNgLnqTkTdwwgCnVJPpTHcKqHdJVhWGJSXFJPXNVkGjdJBpVcBV" className="text-left-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">thrivchaos@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="ourvideo">Our Video</Link>
            <Link to="aboutus">About Us</Link>
            <Link to="faq">FAQ</Link>
            <Link to="reqandbuy">Request & Buy</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk Info Menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-dark-blue rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-instagram">
                <Link to="https://www.instagram.com/thrivchaos.podcast/"></Link>
              </i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Thrivchaos</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
