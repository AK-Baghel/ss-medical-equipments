import React from 'react'
import "./style.css"

function GoogleMap() {
    return (
        <div className='googleMapContainer'>
            <iframe className='googleMap'
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.3630556508933!2d77.30029387463293!3d28.226658202397694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd0db6d8837a1%3A0x7fa35db16ff8959b!2sVamani%20Overseas%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1699937495294!5m2!1sen!2sin"
                // width="1200"
                // height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default GoogleMap