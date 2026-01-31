import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'
import './ExclusiveOffers.css';

const ExclusiveOffers = () => {
    return (
        <div className='exclusive-container'>
            <div className='exclusive-header'>
                <Title align='left' title='Exclusive Offers' subTitle='Limited Time Offer Ending Soon Get The Deal' />
                <button className="alloffers">
                    View All Offers
                    <img src={assets.arrowIcon} alt="arrow-Icon" className='arrow-icon' />
                </button>
            </div>
            <div className='exclusive-grid'>
                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className='exclusive-card'
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <p className="discount">{item.priceOff}% OFF</p>
                        <div className="content">
                            <p className="heading">{item.title}</p>
                            <p className="details">{item.description}</p>
                            <p className="expire">Expires {item.expiryDate}</p>
                        </div>
                        <button className="offerbutton">
                            View Offers
                            <img className='arrow-icon invert' src={assets.arrowIcon} alt="arrow-Icon" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers;
