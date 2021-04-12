import React from 'react'
import styled from 'styled-components'
import {About} from '../Styles'
const FaqSection = () => {
    return (
        <div>
            <Faq>
                <h2>Any Questions  <span>FAQ</span> </h2>
                <div className="question">
                    <h2>How do i start</h2>
                    <div className="answear">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, culpa?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h2>How do i start</h2>
                    <div className="answear">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, culpa?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h2>How do i start</h2>
                    <div className="answear">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, culpa?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Faq>
        </div>
        
    )
}
const Faq = styled(About)`
    display: block;
    h2{
        font-size: 2rem;
        font-weight: lighter;
        padding-bottom: 2rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answear{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection
