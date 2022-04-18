import React, { useState } from "react";
import styled from 'styled-components';

import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import { getUser } from '../../commons/firestore2';

import Header2 from "../Header2";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
    margin: 0 auto;
    width: 420px; height:635px;
    box-shadow: 0px 1px 2px 1px #DDDDDD;
    padding: 0px 27px 27px 27px;
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
        text-align: center;
        padding: 8%;    
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
        <Container onClick={onClick}>Login</Container>
    )
}

const SignUpButton = ({onClick}) => {
    const Container = styled.div`
        height: 36px; line-height:36px;
        text-align: center;
        color: #B5B5B5;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 30px;
    `
    return(
        <Container onClick={onClick}>Sign up</Container>
    )
}

const WithGoogleButton = ({onClick}) => {
    const Container = styled.div`
        height: 34px; line-height:34px;
        background-color: #EEEEEE;
        text-align: center;
        color: #403C3C;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        margin: 0 auto;
        width: 60%;
        border-radius: 10px;
    `
    return(
        <Container onClick={onClick}>continue with google</Container>
    )
}

function OrLine(){
    const Container = styled.div`
        text-align: center;
        display: grid; width: 100%;
        grid-template-columns: 1fr 0.25fr 1fr;;
        margin-bottom: 40px;
        font-size: 13px;
        line-height: 220%;
        color: #B5B5B5;
    `
    const HoriLine = styled.hr`
        color: #CCCCCC;
    `
    
    return(
        <Container>
            <HoriLine/>or<HoriLine/>
        </Container>
    )
}

function LoginPage2(){
    const navigate = useNavigate();

    const [email, SetEmail] = useState("");
    const [password, SetPassowrd] = useState("");

    const [loading, setLoading] = useState("");
    const [errorfromsubmit ,setErrorFromSubmit] = useState("");
    
    const onSubmit = async () => {
        try {
            const auth = getAuth();
            setLoading(true);
            const firebaseUser = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            setLoading(false);
        
            const user = await getUser(firebaseUser.user.uid);
            if(user.size > 0){
                //로그인 성공
                let data = user.docs[0];
                localStorage.setItem('user', JSON.stringify(data.data()));
                
                navigate('/');
            }
        //   } else {
        //     // 아직 주소 등록 안한 경우 -> 회원가입 처리
        //     navigate(
        //       `/register?uid=${firebaseUser.user.uid}&email=${firebaseUser.user.email}`
        //     );
        //   }
        } catch (error) {
            console.log(error);
            // setErrorFromSubmit(error.message);
            // setLoading(false);
            // setTimeout(() => {
            //     setErrorFromSubmit('');
            // }, 5000);
        }
      };
    
    return(
        <>
        <Header2/>
        <LoginContainer>
            <LogoDiv/>
            <div style={{padding:"20px 20px 0px 20px"}}>
                <div>
                    <Text>email</Text>
                    <Input onChange={(e) => SetEmail(e.target.value)} />
                </div>
                <div style={{paddingTop:"20px"}}>
                    <Text>password</Text>
                    <Input type={'password'} onChange={(e) => SetPassowrd(e.target.value)}/>
                </div>
                <LoginButton onClick={onSubmit}/>
                <SignUpButton onClick={()=>navigate('/register')}/>
            </div>
            <OrLine/>
            <WithGoogleButton/>
        </LoginContainer>
        </>
    )
}

export default LoginPage2;