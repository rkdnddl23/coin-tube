import React, { useEffect, useState } from 'react';
import {findCreators} from '../../commons/firestore2';
import NotYoutuber from './NotYoutuber';

function YoutuberProfile2({isCreator}){
    return(<>{isCreator? <div/> : <NotYoutuber/>}</>);
}

export default YoutuberProfile2;
//testId@gmail.com / 123456
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