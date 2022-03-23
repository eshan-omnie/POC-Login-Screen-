import React, {useContext}from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../App';

import styled from 'styled-components';

function Profile(){
    const authContext= useContext(AuthContext);

    if(!authContext.State){
        return<Redirect to='/' />
    }
    return(
        <Banner>
            <BannerItems>
                <Li>
                    <h1>Press the Button to LogOut.</h1>                    
                </Li> 
                <Li>
                    <Span>
                        <Button onClick={()=>authContext.Dispatch('Fal')}>Logout</Button>
                    </Span>
                </Li>
            </BannerItems>
        </Banner>
    );
}

const Banner= styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    width: 726px;
    height: 426px;
    background-color: white;
    border: 0.5px solid grey;

`;

const BannerItems= styled.ul`
    list-style:none;
    text-decoration: none;
    margin-top: 120px;
`;

const Li= styled.li`
    margin-left: auto;
    margin-right: auto;

`;

const Span= styled.span`
    margin-left: 175px;
`;

const Button= styled.button`
    background-color: black;
    border: 1px solid black;
    color: white;
    font-weight: bolder;
    font-size:25px;
    padding: 15px;
    &:hover{
        color: palevioletred;
    }

`;



export default Profile;