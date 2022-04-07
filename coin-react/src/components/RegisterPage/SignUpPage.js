import React, { useState } from "react";
import QRCode from 'qrcode.react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    margin: 0 auto;
    width: 950px; height:635px;
    box-shadow: 0px 1px 2px 1px #DDDDDD;
    padding: 0px 47px 27px 47px;
`

const Text = styled.div`
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 2px;
`

const Input = styled.input`
    width: 100%; height: 36px;
    background-color: #E9E9E9;
    border: 1px solid #CCCCCC;
    color: black;
    font-size: 15px;
    font-weight: 500;
    padding-left: 5px;
    &:focus {
        outline:none;
        color: black;
        font-weight: 500;
        font-size: 15px;
        padding-left: 5px;
    }
`

function LogoDiv(){
    const Container = styled.div`
        font-size: 40px; font-weight: 100;
        padding: 4% 8% 8% 0px;    
        padding-bottom: 35px;
        margin-bottom: 25px;
        border-bottom: 1px solid #CCCCCC;
    `
    return(
        <Container>coin-tube</Container>
    )
}

const LoginButton = ({onClick}) => {
    const Container = styled.div`
        height: 36px; line-height:36px;
        background-color: #C4C4C4;
        text-align: center;
        color: white;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        margin-top: 45px;
    `
    return(
        <Container onClick={onClick}>Sign up</Container>
    )
}

function SignUpPage(){
    const [qrvalue, setQrvalue] = useState("DEFAULT_QR_CODE");

    return(
        <LoginContainer>
            <LogoDiv/>
            <div style={{width: "40%", marginRight: "11%", float: "left"}}>
                <div style={{paddingTop:"20px"}}>
                    <Text>email</Text>
                    <Input/>
                </div>
                <div style={{paddingTop:"20px"}}>
                    <Text>name</Text>
                    <Input/>
                </div>
                <div style={{paddingTop:"20px"}}>
                    <Text>password</Text>
                    <Input type={"password"}/>
                </div>
                <div style={{paddingTop:"20px"}}>
                    <Text>password check</Text>
                    <Input type={"password"}/>
                </div>
                <LoginButton/>
            </div>
            <div style={{float: "left"}}>
                <Text style={{paddingTop:"20px"}}>klip address</Text>
                <QRCode value={qrvalue} size={180} style={{boxShadow: "0px 1px 2px 1px #DDDDDD", padding: "10px", marginTop: "57px"}}/>
                <Text style={{fontSize: "14px", color: "#B5B5B5", paddingTop:"5px"}}>QR코드를 촬영하여 Klip 지갑을 연동해주세요.</Text>
            </div>
        </LoginContainer>
    )
}

export default SignUpPage;