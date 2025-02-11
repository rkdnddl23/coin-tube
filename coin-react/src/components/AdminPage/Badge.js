import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 220px; width: 131px;
    border: 1px solid #cccccc;
    text-align: center;

    position: relative;
    margin-left: 10px;
    margin-top:1px;

    cursor: pointer;
`

const BadgeImg = styled.img`
    max-width: 100%; height: 100px;
`

const TextCotainer = styled.div`
    display: block;
    text-align: center;
`
const YouserName = styled.text`
    font-size: 20px; font-weight: bold;
    display: block;
    margin-bottom: 4px;
    text-align: center;
`
const Font1 = styled.text`
    display: block;
    color: #CCCCCC;
    font-size: 14px;
`

function Badge({setSeletedBadge}){
    const badgeImg = "https://cdn.shopify.com/s/files/1/0514/6332/3817/products/Prefect_Hufflepuff2_grande.png?v=1610030025";
    const userName = "username";
    const badgeSubscriber = "00";
    const badgePrice = "00.0";
    const badgeBought = false;

    // const badgeImg = badgeinfo.youtuber_img_url;
    // const userName = badgeinfo.youtuber_name;
    // const badgeSubscriber = badgeinfo.floor_price;
    // const badgePrice = badgeinfo.available_badges;
    // const badgeState = badgeinfo.youtuber_img_url;

    function CantBuy(){
        return( 
            <Container onClick={() => setSeletedBadge('change')}>
                <BadgeImg src={badgeImg}/>
                <TextCotainer>
                    <YouserName>{userName}</YouserName>
                    <Font1>{badgeSubscriber}</Font1>
                    <Font1>{badgePrice} klay</Font1>
                </TextCotainer>
            </Container>)
    }

    function buttonClickHandler(){

    }

    return(
        <div>
            <CantBuy/>
        </div>
    )
}

export default Badge;