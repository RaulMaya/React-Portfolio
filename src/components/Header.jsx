import React from 'react';

function Header() {
  return (
    <div className="container mt-5 mb-4">
        <div className="d-flex justify-content-between">
            <div className="col-7">
                <h1 className="text-primary">Hello, I'm Raul Maya</h1>
                <h3 className="text-wrap">a self-taught data analyst and web developer</h3>
                <p className="mt-3">Take a look to some of my projects</p>
                <button className="btn btn-primary btn-md me-2 mt-3" type="button">See my work</button>
                <button className="btn btn-primary btn-md ms-2 mt-3" type="button">About me</button>
            </div>
            <div className="col-5">
                <img src="./Developer.png" className="coder" width="300" height="300"></img>
            </div>
        </div>
    </div>
  );
}

export default Header;
