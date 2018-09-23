// const line = require('@line/bot-sdk');
// const express = require('express');
// const axios = require('axios');
 
// const config = {
//   channelAccessToken: "WieVSkkstB+KILW7ZqdpMKkPs+BzI4M3cEcjXyIrNe9ynVjJZKUd9XKveN5EeA24iabMnLB704xKwQZMD3RxKU+m/IZT2t/hJK/biFhJi4922QoIaksxgcjVaY2AEsOhPVJKbGfeMiQwR8HXgXgewdB04t89/1O/w1cDnyilFU=",
//   channelSecret: "50609a42ec09ac881edf63a1ada5317c",
// };
 
// // create LINE SDK client
// const client = new line.Client(config);
// const app = express();
 
// // register a webhook handler with middleware
// // about the middleware, please refer to doc
// app.post('/callback', line.middleware(config), (req, res) => {
//   Promise
//     .all(req.body.events.map(handleEvent))
//     .then((result) => res.json(result))
//     .catch((e)=>{
//       console.log(e);
//     });
 
// });
 
// function handleEvent(event) {
 
//     if(event.message.text == "hai"){
//       const echo = { type: 'text', text: "Halo juga :)·" };
//       return client.replyMessage(event.replyToken, echo);
//     }
 
//     const echo = { type: 'text', text: "Saya tidak mengerti, saya simpan dulu" };
//     return client.replyMessage(event.replyToken, echo);
// }
 
// // listen on port
// const port = 3000;
// app.listen(port, () => {
//   console.log(`listening on ${port}`);
// });