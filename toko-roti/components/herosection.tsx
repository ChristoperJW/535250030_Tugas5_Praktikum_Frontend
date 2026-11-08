"use client";
import Carousel from "react-bootstrap/Carousel";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const slides: Slide[] = [
  { title: "Roti Segar Setiap Hari", subtitle: "Dipanggang pagi hari dengan bahan pilihan.", imageUrl: "/images/banner_1.jpg" },
  { title: "Aneka Pastry Favorit", subtitle: "Croissant, danish, dan banyak lagi.", imageUrl: "/images/banner_2.jpg" },
  { title: "Pesan Kue Custom", subtitle: "Untuk ulang tahun dan acara spesialmu.", imageUrl: "/images/banner_3.jpg" },
];

const HeroSection = () => {
  return (
    <section id="home">
      <Carousel fade interval={4000} pause={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
              }}
            />
            <Carousel.Caption>
              <h1 className="display-5 fw-bold">{slide.title}</h1>
              <p className="lead d-none d-sm-block">{slide.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;