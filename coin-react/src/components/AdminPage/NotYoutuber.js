import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header2 from '../Header2';
import config from '../../config';

const Text1 = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "0.5em",
  }))`
    color: black;
    font-size: 1em;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    width: 400px;
    margin: 10px;
    padding: 5px 10px 5px 10px;

    :: placeholder{
        font-size: 14px;
        color: #CCCCCC;
    }
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
    font-size: 14px;
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
    background-color: #C4C4C4;
    color: white;
    font-size: 14px;
    margin: 1em;
    margin-top: 2.25em;
    padding: 0.4em 1.3em;
    border: 2px  #E0E0E0;
    display: block;
`

function NotYoutuber(){
    let youtubeUrl = React.createRef();

    // const AddCreator = async (url) => {
    //     let res = null;
    //     const words = url.split('/');
    //     const {api_key} = config;
    //     var username = words[words.length-1];
    //     var channelId = null;
    //     var channelName = null;
    //     var channelImage = null;
    //     const searchCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${username}&key=${api_key}`;
    //     await fetch(searchCall)
    //     .then(result => result.json())
    //     .then(data => {
    //         channelId = data.items[0].id.channelId;
    //         channelName = data.items[0].snippet.title;
    //         channelImage = data.items[0].snippet.thumbnails.default.url
    //         });
    //     // Creator에 저장
    //     res = await addCreator(userId, "", url, channelId, 1, channelImage, channelName);
    //     console.log('addCreator finish', res);
    // }

    async function addCreator2(stringUrl){
        stringUrl = stringUrl.split('/')
        const username = stringUrl[stringUrl.length -1]
        const {api_key} = config;
        const proxyserver = 'https://cors-anywhere.herokuapp.com/'
        const searchCall = `https://www.googleapis.com/youtube/v3/channels?id=${username}&key=${api_key}&part=snippet,statistics,brandingSettings`;

        const creatorInfo = {};

        console.log(username);
        await axios.get(proxyserver+searchCall).then(response => {
            const data = response.data.items[0];
            creatorInfo.channelId = username;
            creatorInfo.channelName = data.snippet.title;
            creatorInfo.channelthumbnail = data.snippet.thumbnails.high.url;
            creatorInfo.channeldescription = data.snippet.description;
            creatorInfo.channelBanner = data.brandingSettings.image.bannerExternalUrl;
            creatorInfo.channelSubscriberCount = data.statistics.subscriberCount;
        });
    }

    function youtuberAuthHandler(){
        const stringUrl = youtubeUrl.current.value;
        const user = JSON.parse(localStorage.getItem('user'));
        
        if(stringUrl.size === 0){
            // TODO : URL검증
        }
        else{
            // TODO : 신청 정보 admin 페이지로 보내기
            
            addCreator2(stringUrl);
        }
    }


    // const setCreatorInfo = async (creator) => {
    //     // 유튜버 정보 셋팅
    //     console.log('유튜버 정보 셋팅');
    //     var channelId = creator[0].channel_id;
    //     const {api_key} = config;
    //     const infoCall = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,snippet,statistics&`;
    //     await fetch(`${infoCall}id=${channelId}&key=${api_key}`)
    //     .then(result => result.json())
    //     .then(data => {
    //         setSubscriberCount(data.items[0].statistics.subscriberCount);
    //         if (data.items[0].brandingSettings.image != undefined) {
    //             setChannelBanner(data.items[0].brandingSettings.image.bannerExternalUrl);
    //         }
    //         setChannelNameThumbnails(data.items[0].snippet.thumbnails.default.url);
    //     });
    // }



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

    const NoApply = () => (
       <div>
           <Row1>
               <Font1>Youtube 채널 URL</Font1>
               <Text1 ref={youtubeUrl} name='youtubeUrl' placeholder="https://www.youtube.com/채널" />
           </Row1>
           <Row>
               <Font2 style={{"marginTop": "-5px"}}>회원가입 정보와 유튜브 계정이 다를 경우 거절될 수 있습니다.</Font2>
           </Row>
           <Row3>
               <CustomButton type="button" onClick={youtuberAuthHandler}>유튜버 인증 신청</CustomButton>
           </Row3>
       </div>
    )
    return(<><NoApply/></>)
}

export default NotYoutuber;

