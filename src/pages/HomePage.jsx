import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import FaqComponents from "../components/FaqComponents";

import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage" id="home">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-2s"style={{ color: "#1e2484" }}>
                Memupuk Rasa Ingin Tahu <br /> <span>Satu Cerita Dalam Satu Waktu</span> <br />
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-2s">Thrivchaos adalah podcast yang membahas isu-isu terkini dengan gaya santai dan menghibur. Fokusnya pada trending topic internet, mengajak audiens berpikir kritis, dan membantu pendengar tetap mengikuti tren serta isu sosial yang berkembang.</p>
              <figure class="wp-block-audio me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-2s" >
                <audio controls src="https://github.com/nwnbllh/thrivchaos/blob/main/src/assets/audio/thrivchaos.mp3"></audio>
              </figure>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Our Video</h1>
              <p className="text-center">Di era digital, media sosial membentuk opini publik di Indonesia. Tren seperti FOMO sering diikuti tanpa pemahaman mendalam, sementara isu penting jarang dibahas kritis. Podcast Thrivchaos hadir dengan pembahasan santai yang relatable, khususnya untuk gen Z.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col className="shadow rounded" key={kelas.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <a href="https://youtu.be/wBy0H6qMtCQ?si=2E8oswQwY41tvM1d" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-dark-blue rounded-1">{kelas.buy}</button></a>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center" data-aos="fade-up" data-aos-duration="1000">
              <button className="btn btn-secondary rounded-5 btn-lg" onClick={() => navigate("/ourvideo")}>
                Lihat Semua Video
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">About Us</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide className="shadow-sm" key={data.id}>
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* SECTION FAQ */}
      <FaqComponents />
      {/* SECTION FAQ */}
    </div>
  );
};

export default HomePage;
