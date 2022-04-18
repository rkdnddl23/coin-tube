import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header2 from '../Header2';

const Text1 = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "0.5em",
  }))`
    color: black;
    font-size: 1em;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    width: 450px;
    margin: 10px;
    padding: 5px 10px 5px 10px;
  `;

const Row = styled.text`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Row1 = styled(Row)`
    padding-top: 100px;
`
const Row3 = styled(Row)`
    padding-bottom: 60px;
`
const Font1 = styled.text`
    font-size: 15px;
    color: black;
    font-weight: 500;
    padding-right: 10px;
`
const Font2 = styled.text`
    display: block;
    font-size: 16px;
    color: #b5b5b5;
`
const Font3 = styled.text`
    margin-top: 15px;
    display: block;
    font-size: 16px;
    color: #1b1b1b;
`
const Font4 = styled.text`
    display: block;
    font-size: 16px;
    color: #1b1b1b;
`
const CustomButton = styled.button`
    display: inline-block;
    color: #b5b5b5;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px  #E0E0E0;
    display: block;
`
function NotYoutuber(){
    return(<><NoApply/></>)
}

export default NotYoutuber;


const Apply = () => (
   <div>
       <Row1>
           <Font1>유튜버 인증 신청이 완료되었습니다.</Font1>
       </Row1>
       <Row3>
           <Font2>심사기간은 1-3일 소요됩니다.(공휴일 제외)</Font2>
       </Row3>
   </div>
)
let youtubeUrl = React.createRef();
const NoApply = () => (
   <div>
       <Row1>
           <Font1>Youtube 채널 URL</Font1>
           <Text1 ref={youtubeUrl} name='youtubeUrl' placeholder="https://www.youtube.com/채널" />
       </Row1>
       <Row>
           <Font2>회원가입 정보와 유튜브 계정이 다를 경우 거절될 수 있습니다.</Font2>
       </Row>
       <Row3>
           <CustomButton type="button">유튜버 인증 신청</CustomButton>
       </Row3>
   </div>
)