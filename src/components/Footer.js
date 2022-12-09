import React from 'react';

export default function Footer() {
    return (
        <div className='footer--maincontainer'>
            <div className='footer--container'>
                <hr></hr>
                <div className='footer--socials'>
                    <div className='footer--icon'>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                    <div className='footer--icon'>
                        <i className="fa-brands fa-instagram"></i> 
                    </div>
                    <div className='footer--icon'>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='footer--icon'>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className='footer--icon'>
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>
                </div>
                <p>© 2022 by MovieZ</p>
            </div>
        </div>
    )
}
