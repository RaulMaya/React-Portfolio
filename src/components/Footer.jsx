import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="container-fluid d-flex justify-content-between ps-5 bg-two">
            <section className="d-flex w-50 gap-2 gap-md-3 ps-5">
                <a className='fs-2 p-3 text-one facebook' href=""><FontAwesomeIcon icon={faFacebook} /></a>
                <a className='fs-2 p-3 text-one github' href=""><FontAwesomeIcon icon={faGithub} /></a>
                <a className='fs-2 p-3 text-one twitter' href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a className='fs-2 p-3 text-one whatsapp' href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
            </section>
            <p className="text-one fs-3 p-3 me-5"> © Raul Maya</p>
        </footer>
    );
}

export default Footer;