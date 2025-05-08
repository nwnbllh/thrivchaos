import FaqComponents from "../components/FaqComponents";
import { Container, Row, Col } from "react-bootstrap";

import { ourVideo, kelasTerbaru } from "../data/index";

const OurVideoPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Our Video</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Di era digital, media sosial membentuk opini publik di Indonesia. Tren seperti FOMO sering diikuti tanpa pemahaman mendalam, sementara isu penting jarang dibahas kritis. Podcast Thrivchaos hadir dengan pembahasan santai yang relatable, khususnya untuk gen Z.</p>
            </Col>
          </Row>
          <Row>
            {ourVideo.map((kelas) => {
              return (
                <Col className="shadow rounded" key={kelas.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <a href={kelas.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-dark-blue rounded-1">{kelas.buy}</button></a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurVideoPage;
