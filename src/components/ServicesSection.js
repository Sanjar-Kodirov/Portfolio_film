import React from 'react'
import Clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import Money from '../img/money.svg'
import Teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
const ServicesSection = () => {
    return (
        <div>
            <div className="services">
                <div className="description">
                    <h2>High <span>quality</span> services</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={Clock} alt=""/>
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={Teamwork} alt=""/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt=""/>
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={Money} alt=""/>
                                <h3>Money</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt=""/>
            </div>
        </div>
    )
}

export default ServicesSection
