import React from 'react'
import Clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import Money from '../img/money.svg'
import Teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import {About, Description, Image} from '../Styles'
const ServicesSection = () => {
    return (
        <Services>
         
                <Description>
                    <h2>High <span>quality</span> services</h2>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <img src={Clock} alt=""/>
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={Teamwork} alt=""/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={diaphragm} alt=""/>
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={Money} alt=""/>
                                <h3>Money</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                    </Cards>
                </Description>
        
                <Image>
                    <img src={home2} alt=""/>
                </Image>
        </Services>
    )
}
const Services = styled(About)`
    h2{
        padding-bottom: 2rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    .icon{
        display: flex;
        align-items: center;
        img{
            padding: 0.5rem;
        }
    }
`



export default ServicesSection
