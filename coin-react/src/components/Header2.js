import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function Logo({onClick}){ 
    const Logo = styled.div`
        font-size: 17px;
        line-height: 60px;
        font-weight: 400px;
        float: left;
        margin-left: 40px;
        cursor: pointer;
    `
    return(<Logo onClick={onClick}>coin-tube</Logo>)
}

const SerarchBarContainer = styled.div`
    width: 100%; height: 60px;
    background-color: #C4C4C4;
    margin-bottom: 30px;
`
const Button = styled.div`
    font-size: 15px;
    font-weight: 400;
    line-height: 60px;
    color: #444444;
    float: right;
    margin: 0px 30px 0px 10px;
    cursor: pointer;
`

function Header2(){
    let navigate = useNavigate();

    const user = localStorage.getItem('user');

    function logoutHandler(){
        localStorage.removeItem('user');
        navigate('/');
    }

    return(
        <SerarchBarContainer>
            <Logo onClick={()=> navigate('/')}/>
            {user?<Button style={{marginRight: '50px'}} onClick={logoutHandler}>Logout</Button>
            : <Button style={{marginRight: '50px'}} onClick={()=>navigate('/login')}>Login</Button>}
            
            <Button onClick={user? ()=>navigate('/admin') : ()=>navigate('/login')}>MyPage</Button>
        </SerarchBarContainer>
    );
}

export default Header2;