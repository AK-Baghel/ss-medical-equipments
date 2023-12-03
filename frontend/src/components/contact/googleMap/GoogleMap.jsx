import React from 'react'
import "./style.css"

function GoogleMap() {
    return (
        <div className='googleMapContainer'>
            <iframe className='googleMap'
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.916926904845!2d-73.97555342476448!3d40.763851834440814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f0741ceda7%3A0x4fd23cddb7a3d144!2sApple%20Fifth%20Avenue!5e0!3m2!1sen!2sin!4v1701577693513!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>




        </div>
    )
}

export default GoogleMap