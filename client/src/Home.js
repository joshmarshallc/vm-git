import React from 'react'
import './Home.css';
import home_icon1 from './home_icon1.png'
import home_icon2 from './home_icon2.png'
import home_image2 from './home_image2.jpg'

import PickupForm from './PickupForm'

function Home() {
    return (
        <div className='home'>
            <div className='home_image1'>               
                <div className='home_container1'>
                    <h1>Rent.</h1>
                    <h1>Ride.</h1>
                    <div className='home_buttoncontainer'>
                        <button className='home_button'>Book a ride now</button>
                    </div>
                </div>
            </div>    
            <div className='home_container2'>
                <div className='home_subcontainer1'>
                    <h2 className='home_subtitle1'>Sanitized Vehicles</h2>
                    <div className='home_body'>Before your rental, we'll take extra care to clean the vehicle with disinfectant and sanitizer for your protection.</div>
                </div>
                <div className='home_subcontainer1'>
                    <h2 className='home_subtitle1'>Home Delivery</h2>
                    <div className='home_body'>RB fleet executives, wearing protective gear, will drop the vehicle at your doorstep through no contact delivery.</div>
                </div>
            </div>

            <div className='home_container3'>
                <div className='home_subcontainer2'>
                    <img name='icon1' src={home_icon1} alt='' />
                    <div>Vehicle Insurance</div>
                </div>
                <div className='home_subcontainer2'>
                    <img name='icon2' src={home_icon2} alt='' />
                    <div>24/7 Roadside Assistance</div>
                </div>
                <div className='home_subcontainer2'>
                    <img name='icon3' src={home_icon2} alt='' />
                    <div>Bike Management</div>
                </div>
            </div>

            <img className='home_image2' name='image2' src={home_image2} alt='' />       

            <div className='home_container4'>
                <div className='home_subcontainer3'>
                    <h2 className='home_subtitle2'>WE BELIEVE IN QUALITY</h2>
                </div>
            </div>
        </div>
    )
}

export default Home
