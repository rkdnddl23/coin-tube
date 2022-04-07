import axios from "axios";

const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "COIN_TUBE";

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