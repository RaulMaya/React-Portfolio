import React from 'react';

function Header() {
  return (
    <div className="container hero">
        <div className="row">
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                <h1>The revolution is here.</h1>
                <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><button className="btn btn-light btn-lg action-button" type="button">Learn More</button>
            </div>
            <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                <div className="iphone-mockup">
                    <img src="./Coding.png" className="device" width="300" height="300"></img>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
