import React from 'react';

export default function AboutUs() {
  return (

    // about us page carousel is not changing page

    <div className='container-fluid'>
      <div className='row bg-secondary'>
        <div className='col-md-6'>
          <p>shapes</p>
        </div> 
        <div className='text-center col-md-5 p-5 text-md-end'>
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est illo eveniet velit ratione beatae assumenda nisi. Omnis voluptates doloremque ducimus dicta maiores tempore cupiditate sint, magnam eum, sunt molestiae. Laudantium saepe sapiente eligendi, voluptas sunt inventore dolores autem aliquid dolore quasi repudiandae perferendis neque tenetur eum nihil vitae molestiae quae aut distinctio mollitia, voluptatem enim optio quis consectetur. Veniam eum consequuntur excepturi hic incidunt architecto quo ipsum, harum ratione natus corrupti impedit optio est inventore corporis minima. Consequuntur repellat soluta quas modi esse! Adipisci at magni impedit iure deleniti incidunt ullam temporibus beatae! Odit enim commodi blanditiis nisi explicabo.
          </p>
        </div> 
      </div>

      <div className='row' style={{ backgroundColor: '#ff0000' }}>
        <div className='col-md-6'>
          <p>images</p>
        </div>  
        <div className='text-center col-md-6 p-5 text-md-start'>
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est illo eveniet velit ratione beatae assumenda nisi. Omnis voluptates doloremque ducimus dicta maiores tempore cupiditate sint, magnam eum, sunt molestiae. Laudantium saepe sapiente eligendi, voluptas sunt inventore dolores autem aliquid dolore quasi repudiandae perferendis neque tenetur eum nihil vitae molestiae quae aut distinctio mollitia, voluptatem enim optio quis consectetur. Veniam eum consequuntur excepturi hic incidunt architecto quo ipsum, harum ratione natus corrupti impedit optio est inventore corporis minima. Consequuntur repellat soluta quas modi esse! Adipisci at magni impedit iure deleniti incidunt ullam temporibus beatae! Odit enim commodi blanditiis nisi explicabo.
          </p>
        </div>
      </div>

      <div className='row bg-secondary'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./default.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./default.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./default.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}