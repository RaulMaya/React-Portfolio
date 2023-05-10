import React from 'react';

function Footer() {
    return (
        <footer className="container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between">
            <section className="flex w-1/2 gap-8 md:gap-12 text-xl">
                <a href="">Github</a>
                <a href="">Github</a>
                <a href="">Github</a>
                <a href="">Github</a>
            </section>
            <p className="font-light text-dark-300 dark:text-dark-400"> Raul Maya</p>
        </footer>
    );
}

export default Footer;