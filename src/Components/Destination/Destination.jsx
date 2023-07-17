import React from 'react';
import './destination.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';
import London from '../../Assets/London.jpg';
import Milan from '../../Assets/Milan.jpg';
import China from '../../Assets/China.jpg';
import Italy from '../../Assets/Italy.jpg';
import Camboya from '../../Assets/Camboya.jpg';
import India from '../../Assets/India.jpg';

const Data = [
    {
        id: 1,
        imgSrc: Milan,
        destTitle: 'Iglesia de Milan',
        location: 'Milan, Italy',
    },
    {
        id: 2,
        imgSrc: China,
        destTitle: 'Gran Muralla',
        location: 'China',
    },
    {
        id: 3,
        imgSrc: Italy,
        destTitle: 'Coliseo de Roma',
        location: 'Italy',
    },
    {
        id: 4,
        imgSrc: Camboya,
        destTitle: 'Templos de Angkor',
        location: 'Camboya',
    },
    {
        id: 5,
        imgSrc: India,
        destTitle: 'Taj Mahal',
        location: 'India',
    },
    {
        id: 6,
        imgSrc: London,
        destTitle: 'Londres',
        location: 'Inglaterra',
    },
]


const Destination = () => {

    return (
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Destinos Populares
                        </h2>
                        <p>
                            ¡Ven a disfrutar de lo mejor del mundo, desde ciudades históricas hasta espectáculos naturales!
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id, imgSrc, destTitle, location}) => {
                            return (
                                <div className="singleDestination">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image" />

                                        <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>{location}</p>

                                            <BsArrowRightShort className="icon" />
                                        </div>
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>

                                        <div className="destText flex">
                                            <h6>
                                                {location}
                                            </h6>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Destination;