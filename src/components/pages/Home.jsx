import React from 'react';

function Home() {
  return (
    <div className="container-fluid ps-5 pt-5 pb-4 bg-one pb-5">
        <div className="d-flex justify-content-between ps-5">
            <div className="col-7 mt-5 pt-5">
                <h1 className="text-light">Hello, I'm <span className="text-primary">Raul Maya</span></h1>
                <h3 className="text-light text-wrap">a self-taught <span className="text-primary">data analyst</span> and <span className="text-primary">web developer</span></h3>
                <p className="text-light mt-3">Take a look to some of my projects</p>
                <a href="#about"><button className="btn btn-primary btn-md me-2 mt-5 mb-5" type="button">See my work</button></a>
                <a href="" onClick={() => handlePageChange('Connect')}><button className="btn btn-primary btn-md ms-2 mt-5 mb-5" type="button">About me</button></a>
                
            </div>
            <div className="col-5">
                <img src="./me.jpeg" className="shadow-lg p-1 mb-5 bg-body rounded" width="400" height="450"></img>
            </div>
        </div>
    </div>
  );
}

export default Home;
