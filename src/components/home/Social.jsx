import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://x.com/irohitna_" className="home__social-icon" target='_blank' rel="noreferrer">
            <i class="uil uil-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/in/rohitna" className="home__social-icon" target='_blank' rel="noreferrer">
            <i class = "uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/Inasync-io" className="home__social-icon" target='_blank' rel="noreferrer">
            <i class = "uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social