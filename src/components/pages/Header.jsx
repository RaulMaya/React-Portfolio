import React from 'react';

function Header() {
  return (
    <div className="container-fluid ps-5 pt-5 pb-4 bg-one">
        <div className="d-flex justify-content-between ps-5">
            <div className="col-7">
                <h1 className="text-light">Hello, I'm <span className="text-primary">Raul Maya</span></h1>
                <h3 className="text-light text-wrap">a self-taught <span className="text-primary">data analyst</span> and <span className="text-primary">web developer</span></h3>
                <p className="text-light mt-3">Take a look to some of my projects</p>
                <a href=""><button className="btn btn-primary btn-md me-2 mt-3" type="button">See my work</button></a>
                <a href=""><button className="btn btn-primary btn-md ms-2 mt-3" type="button">About me</button></a>
                
            </div>
            <div className="col-5">
                <img src="./me.jpeg" className="coder" width="300" height="350"></img>
            </div>
        </div>
    </div>
  );
}

export default Header;
