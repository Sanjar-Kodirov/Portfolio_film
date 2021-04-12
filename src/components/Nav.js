import React from 'react'
import styled from 'styled-components'
const Nav = () => {
    return (
        <div>
            <StyledNav>
                <h1><a id="logo" href="#">Capture</a></h1>
                <ul>
                    <li><a href="#">1. About us</a></li>
                    <li><a href="#">2. Our work</a></li>
                    <li><a href="#">3. Contact us</a></li>
                </ul>
            </StyledNav>
        </div>
    )
}
const  StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #232323;
    a{
        text-decoration: none;
        color: #fff;
    }
    ul{
        display: flex;
        list-style: none;
        li{
            padding-left: 2rem;
            position: relative;
        }
    }
    #logo{
        font-family: 'lobster';
        font-weight: lighter;
        font-size: 1.5rem;
    }

`
export default Nav
