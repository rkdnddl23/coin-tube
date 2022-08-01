import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { mintWithTokenURI } from '../../api/UseKlip2';
import {findCreators} from '../../commons/firestore2';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import QRCode from "qrcode.react";
import NotYoutuber from './NotYoutuber';

// const executeMinting = async(uri) => {
//     const user_data = await getKlipAddress(userId);
//     console.log('klip_address: ~~~~~~~~', (user_data[0].address));
//     const TokenId = String(new Date().getMilliseconds) + String(userId);
//     mintCardWithURI(user_data[0].address, TokenId, uri, setQrvalue, (result) => {
//         alert(JSON.stringify(result));
//     })
//     console.log('뱃지 발행!!!');
//     // setMintShow(false);
//     // TODO SmartContract 연동
//     // 화면 새로고침?
// }


function Youtuber({user}){
    const [mintShow, setMintShow] = useState(false);
    const [badgeImage, setBadgeImage] = useState();
    const [qrvalue, setQrvalue] = useState("DEFAULT_QR_CODE");
    
    function executeMinting({uri}){
        // const TokenId = String(user.uid) + String(creator.mint_order) + String(creator.badge_seq)
        const tokenId = String(new Date().getMilliseconds()) + String(user.uid);

        mintWithTokenURI(user.useraddress, tokenId, badgeImage, setQrvalue, (result) => {
            alert(JSON.stringify(result))
        })
    }

    return(<>
            <button onClick={() => setMintShow(true)}>민팅 버튼</button>
            <Modal show={mintShow} backdrop="static" onHide={mintShow} keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
            
                <Modal.Body>
                    <input onChange={(e) => setBadgeImage(e.target.value)}/>
                    <button onClick={()=>executeMinting(badgeImage)}>발행</button>
                    <QRCode value={qrvalue} size={256} style={{ margin: "auto" }} />
                    <button onClick={() => setMintShow(false)}>닫기</button>
                </Modal.Body>

            </Modal>
        </>
    )
}

function YoutuberProfile2({isCreator, user}){
    return(<>{isCreator? <Youtuber user={user}/> : <NotYoutuber/>}</>);
}


export default YoutuberProfile2;
//test11@gmail.com / 123456
// const checkCreators = async () => {
//     const creator = await findCreators(userId);
//     console.log(creator);
//     if (creator.length > 0) {
//         setApplyResults(creator[0].apply_flag);
        
//         if (creator[0].apply_flag === 2) {
//             Promise.all([setCreatorInfo(creator), setMintInfo()]);
//         }
//     } else {
//         setApplyResults(0);
//     }
//  };