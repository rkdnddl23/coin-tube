import axios from "axios";
import {NFT_CONTRACT_ADDRESS} from "../constants";

const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "COIN_TUBE";

// qrcode 가져오는 API
export function getAddress(setQrValue){
    axios.post(
        A2P_API_PREPARE_URL,
        {
            bapp: {name: APP_NAME},
            type: "auth"
        }
    ).then((response)=>{
        const {request_key} = response.data;
        const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
        
        setQrValue(qrcode);
        let timerId = setInterval(()=>{
            axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then((response)=>{
                if(response.data.result){
                    console.log(`[Result] ${JSON.stringify(response.data.result)}`);
                    clearInterval(timerId);
                }
            });
        }, 1000)
    })
}

export const mintWithTokenURI = async (
    toAddress,
    tokenId,
    uri,
    setQrvalue,
    callback
  ) => {
    const functionJson =
    `{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"string"},{"name":"tokenURI","type":"string"}],"name":"mintWithTokenURI","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}`;

    executeContract(
      NFT_CONTRACT_ADDRESS,
      functionJson,
      "0",
      `["${toAddress}","${tokenId}","${uri}"]`,
      setQrvalue,
      callback
    );
  };

  // smart contrat API
  export const executeContract = (
    txTo,
    functionJSON,
    value,
    params,
    setQrvalue,
    callback
  ) => {
    console.log(`to: ${txTo} abi: ${functionJSON} value: ${value} params: ${params}`)
    axios
    .post(A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: "execute_contract",
      transaction: {
        to: txTo,
        abi: functionJSON,
        value: value,
        params: params,
      },

    }).catch(error => {
      console.log(error.response)
    });
    
          //.then((response) => {
          //const { request_key } = response.data;
  
          // let timerId = setInterval(() => {
          //   axios.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then((res) => {
          //       if (res.data.result) {
          //         console.log(`[Result] ${JSON.stringify(res.data.result)}`);
          //         callback(res.data.result);
          //         clearInterval(timerId);
          //         setQrvalue("DEFAULT");
          //       }
          //     });
          // }, 1000);
      // });
  };

// export const setCount = (count, setQrvalue) => {
//     axios.post(
//         A2P_API_PREPARE_URL,
//         {
//             bapp: {name: APP_NAME},
//             type: "execute_contract",
//             transaction: {
//                 to: COUNT_CONTRACT_ADDRESS,
//                 abi:'',
//                 value: "0",
//                 params: `[\"${count}\"]`
//             }
//     }).then((response)=>{
//         const {request_key} = response.data;
//         const qrcode = ``;
//         setQrvalue(qrcode);
//         let 
//     })
// }