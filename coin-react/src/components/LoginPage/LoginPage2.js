import React from "react";
import styled from 'styled-components';

const LoginContainer = styled.div`
    width:360px; height:580px;
    border: 1px solid #CCCCCC;
`

function OrLine(){
    const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18%, auto));
        border: 1px solid red;
    `
    const HoriLine = styled.hr`
        color: #CCCCCC;
    `
    
    return(
        <Container>
            {/* <HoriLine style={{float: "right"}}/><HoriLine style={{float: "left"}}/> */}
            <HoriLine/>or<HoriLine/>
        </Container>
    )
}

function LoginPage2(){
    
    return(
        <LoginContainer>
            <OrLine/>
        </LoginContainer>
    )
}

export default LoginPage2;