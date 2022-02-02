import React from 'react'
import Masthead from './Masthead';
import './Tariff.css'
import tariff_image1 from './tariff_image1.png';
import tariff_image2 from './tariff_image2.png';
import tariff_image3 from './tariff_image3.png';
import tariff_image4 from './tariff_image4.png';
import tariff_image5 from './tariff_image5.png';
import tariff_image6 from './tariff_image6.png';
import tariff_image7 from './tariff_image7.png';
import tariff_image8 from './tariff_image8.png';
import tariff_image9 from './tariff_image9.png';

function Tariff2() {
    return (
        <>
        <div className='tariff'>
            <h1 className='tariff_title'>
                Bike rental tariff
            </h1>   
            <div className='tariff_container'>      
                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Honda Activa 3G
                        </h4>
                        <img className='tariff_image' name='honda_activa_3G' src={tariff_image1} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>19</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>19</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>19</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>5</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>4.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Yamaha Fascino
                        </h4>
                        <img className='tariff_image' name='yamaha_fascino' src={tariff_image2} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>20</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>20</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>20</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>5</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>4.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Honda Dio
                        </h4>
                        <img className='tariff_image' name='honda_dio' src={tariff_image3} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>20</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>20</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>20</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>5</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>4.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            TVS Apache RTR 180
                        </h4>
                        <img className='tariff_image' name='tvs_apache_rtr_180' src={tariff_image4} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>39</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>39</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>39</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>10</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>5.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Bajaj Pulsar 150 Neon
                        </h4>
                        <img className='tariff_image' name='bajaj_pulsar_150_neon' src={tariff_image5} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>30</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>30</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>30</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>10</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>5.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Yamaha FZ
                        </h4>
                        <img className='tariff_image' name='yamaha_fz' src={tariff_image6} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>32</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>32</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>32</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>10</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>5.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                        Honda CB Hornet 160
                        </h4>
                        <img className='tariff_image' name='honda_cb_hornet_160' src={tariff_image7} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>32</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>32</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>32</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>10</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>5.0</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Royal Enfield Classic 350
                        </h4>
                        <img className='tariff_image' name='royal_enfield_classic_350' src={tariff_image8} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>47</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>47</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>47</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>12</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>5.5</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>

                <div className='tariff_subcontainer'>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            Royal Enfield Thunderbird 350
                        </h4>
                        <img className='tariff_image' name='royal_enfield_thunderbird_350' src={tariff_image9} alt=''/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>47</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>47</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>47</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>12</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>5.5</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <div className='tariff_buttoncontainer'>
                        <button className='tariff_button'>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
        <Masthead />
        </>
    )
}

export default Tariff2;
