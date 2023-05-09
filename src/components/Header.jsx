import React from 'react';

function Header() {
  return (
    <div className="container">
        <div className="d-flex justify-content-between">
            <div className="col-7">
                <h1 className="text-primary">The revolution is here</h1>
                <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p>
                <button className="btn btn-primary btn-lg " type="button">See my work</button>
                <button className="btn btn-primary btn-lg " type="button">About me</button>
            </div>
            <div className="col-5">
                <img src="./Coding.png" className="device" width="300" height="300"></img>
            </div>
        </div>
    </div>
  );
}

export default Header;
