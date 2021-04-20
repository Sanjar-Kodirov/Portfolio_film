import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'

const OurWork = () => {
    return (
        <>
            <Work>
                <Movie>
                    <h2>The athlete</h2>
                    <div className="line"></div>
                    <Link>
                        <img src={athlete} alt=""/>
                    </Link>
                </Movie>
                <Movie>
                    <h2>The racer</h2>
                    <div className="line"></div>
                    <Link>
                        <img src={theracer} alt=""/>
                    </Link>
                </Movie>
                <Movie>
                    <h2>The good times</h2>
                    <div className="line"></div>
                    <Link>
                        <img src={goodtimes} alt=""/>
                    </Link>
                </Movie>
            </Work>
        </>
    )
}   
const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    color: #fff;
    h2{
        padding: 1rem 0rem;
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.2rem;
        background: #cccccc;
        margin-bottom: 1rem;
    }
    img{
        width: 100%;
    }
`

export default OurWork
