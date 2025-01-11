import { Container, Row, Col } from "react-bootstrap";
import { produkBaru, kelasTerbaru } from "../data/index";

const ReqAndBuyPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-keten-box min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp">Request Topik Podcast</h1>
              <p className="text-center animate__animated animate__fadeInUp">Haii, kamu bisa drop Topik yang mau kamu bahas di form ini ya.</p>
              <form action="https://formsubmit.co/najwanabilah2216@gmail.com" method="post" class="mt-10">
                <div className="text-center mb-2 fw-bold animate__animated animate__fadeInUp">                  
                  <input type="text" className="form-control" id="name" placeholder="Nama Lengkap" />
                </div>
                <div className="text-center mb-2 fw-bold animate__animated animate__fadeInUp"> 
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="text-center mb-2 fw-bold animate__animated animate__fadeInUp"> 
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-dark-blue w-100 text-center mb-3 fw-bold animate__animated animate__fadeInUp">
                  Kirim</button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="text-center mb-5 fw-bold animate__animated animate__fadeInUp"></div>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp">Promosi Produk</h1>
              <p className="text-center animate__animated animate__fadeInUp">.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {produkBaru.map((kelas) => {
              return (
              <Col className="shadow rounded" key={kelas.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <a href="https://shopee.co.id/" target="_blank" rel="noopener noreferrer">
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

export default ReqAndBuyPage;
