import React from 'react';

export default function AboutUs() {
  return (
    <div className='container-fluid'>

      <div className='row' style={{ backgroundColor: '#80d8c8' }}>
        <div className='col-md-6'>
          image
        </div> 
        <div className='text-center col-md-5 p-5 text-md-end'>
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est illo eveniet velit ratione beatae assumenda nisi. Omnis voluptates doloremque ducimus dicta maiores tempore cupiditate sint, magnam eum, sunt molestiae. Laudantium saepe sapiente eligendi, voluptas sunt inventore dolores autem aliquid dolore quasi repudiandae perferendis neque tenetur eum nihil vitae molestiae quae aut distinctio mollitia, voluptatem enim optio quis consectetur. Veniam eum consequuntur excepturi hic incidunt architecto quo ipsum, harum ratione natus corrupti impedit optio est inventore corporis minima. Consequuntur repellat soluta quas modi esse! Adipisci at magni impedit iure deleniti incidunt ullam temporibus beatae! Odit enim commodi blanditiis nisi explicabo.
          </p>
        </div> 
      </div>

      <div className='row bg-black justify-content-center p-5 '> {/* Added justify-content-center class */}
        <div className='col-11 m-4 text-center rounded' style={{ backgroundColor: '#01cda9' }}> {/* Added text-center class */}
          <div className='row p-3'>
            <div className='col-md-6'>
              image
            </div>
            <div className='col-md-6 p-3'>
              <h1 className='text-white text-start'>
                What We Do!!
              </h1>
              <p className='text-white text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores quae ratione odit ea, harum porro reiciendis ex eligendi sit, nam inventore quod illo delectus nisi deleniti dicta ducimus voluptate? Quod, recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row bg-black justify-content-center'>
        <div className='col-11 m-4 text-center rounded'>
          <div className="container">
            <h2 className="text-center mb-4 text-white">My Team</h2>
            <div className="row justify-content-center"> {/* Added justify-content-center class */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">Email: john@example.com</p>
                            <p className="card-text">University: Example University</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Jane Smith</h5>
                            <p className="card-text">Email: jane@example.com</p>
                            <p className="card-text">University: Another University</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Alice Johnson</h5>
                            <p className="card-text">Email: alice@example.com</p>
                            <p className="card-text">University: University XYZ</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Alice Johnson</h5>
                            <p className="card-text">Email: alice@example.com</p>
                            <p className="card-text">University: University XYZ</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Alice Johnson</h5>
                            <p className="card-text">Email: alice@example.com</p>
                            <p className="card-text">University: University XYZ</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
