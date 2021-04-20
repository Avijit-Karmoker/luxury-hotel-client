import React from "react";
import hotelRoom1 from '../../../images/hotelRoom1.jpg';
import hotelRoom2 from '../../../images/hotelRoom2.jpg';
import hotelRoom3 from '../../../images/hotelRoom3.jpg';

const Headers = () => {
  return (
    <section >
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img style={{ height: '800px' }} src={hotelRoom2} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Luxury Hotel by <br/> Ovijit.co</h1>
              <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam ex tempora incidunt, aut modi.</h4>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img style={{ height: '800px' }} src={hotelRoom1} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Enjoy Your Stay</h1>
              <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam ex tempora incidunt, aut modi.</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img style={{ height: '800px' }} src={hotelRoom3} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h1>Away from the Hustle and Bustle of City Life</h1>
              <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam ex tempora incidunt, aut modi.</h4>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Headers;
