
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "./style.css"


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {

    const photos = [
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT919reDzrVM7U1T-wOItl6vY5pA0OmwVF3uxDalJ7H7ltF4jt8qWpzBIA7fIkYlynfTpE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JZ7BJbUiCCgWNYoDhjHv5vKB5dqYa0zngfCg1dXTiC7iZ2Lj9bG9vblmSuvQE8OrKE0&usqp=CAU",
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600"

    ]

    return (
        <div className="galleryContainer">
            <div className="aboutBanner">Gallery</div>

            <div className="App">
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {
                        photos.map((item) => {
                            return (
                                <a href={item}>
                                    <img className='galleryImage' alt="SS Medical Equipments" src={item} />
                                </a>
                            )
                        })
                    }


                    ...
                </LightGallery>
            </div>
        </div>
    );
}

export default Gallery;