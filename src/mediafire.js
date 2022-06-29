const axios = require("axios");
const cheerio = require("cheerio");
const { JSDOM } = require("jsdom")
const fetch = require('node-fetch')
let fs = require('fs');

mediafire = function mediafire(text) {
return new Promise((resolve, reject) => {
axios ({
    methode: "GET",
    url: `${text}`,
    headers: {
        "cookie":'ukey=i1qk63begkttqs5oislas2jaw1f0p1lb; _gid=GA1.2.1579732563.1656392124; __gads=ID=5131d3d3fdaa694e:T=1656392126:S=ALNI_Mab6u9M8qLvAjHnARhY_5ZhI3HQLA; conv_tracking_data-2={"mf_source":"regular_download-34","mf_content":"Free","mf_medium":"windows\/Chrome","mf_campaign":"n2cbrerhd2rug6s","mf_term":"4d72fed11b6dea593c5bde8fddcbcf07"}; _fbp=fb.1.1656459932594.936939848; _hjFirstSeen=1; _hjSession_1232118=eyJpZCI6IjMzZmZmZTI0LWMzZDUtNDU3My04MmEyLTBlYTVhY2FiOTI2NSIsImNyZWF0ZWQiOjE2NTY0NTk5NDYwNTMsImluU2FtcGxlIjp0cnVlfQ==; __mmapiwsid=c88acea7-2999-4e94-9445-e8969d18ab0a:2fbe5c713492471fcbea4dbd809daf7ab7f11790; __gpi=UID=0000070be443c0ee:T=1656392126:RT=1656460035:S=ALNI_MZpw5FzDdevSnkVq5l4qYPNduLd0Q; __cf_bm=vQRD0k6x1Huw26CzXMo2dNtxMXlPJWylihRLz9eBRJc-1656461054-0-AV6aCZxJM2qwAUOj1btCrSfdakCnIy1RLH+KijeNBIqOmnjkWnuL0/phsputv95wUZJbdkp2dFniGFGameI/LYA=; amp_28916b=3GjkJYPf5Vj0yRoulaZab5...1g6mb9cbn.1g6mcg92d.0.8.8; FCNEC=[["AKsRol_nf7a-qRcWMi-O_8UGA_Dnvyz5j2pjBn-DW34sAfXezCM96jagIbje_13fMrFBs_jzJesK-giWbLlJTs1TPcUuOuJZP_pmten0aA5sdfPqym5Wd0kbuWNZKkTNdHAZS3C-30L0ixAi9t0xgG858hq3xrG8Yg=="],null,[]]; _hjSessionUser_1232118=eyJpZCI6IjlkZWU4ZjJkLTE5NjQtNTE5NC1hOTk5LWNiMDJhYWIxOTBiMSIsImNyZWF0ZWQiOjE2NTY0NTk5MzMyMDMsImV4aXN0aW5nIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjIncludedInSessionSample=1; user=1b8cedbd179e845de75d9ca7bb1b39558ab56578f73dbf72f46c42c90aada506ab207b36bc3089cb99045f970abe58f4e56d1d8ccb004b62; _ga_K68XP6D85D=GS1.1.1656459932.1.1.1656461247.0; _ga=GA1.2.1996377412.1656392124; amp_9956c2=63FAFlhCQsu4U8N7pDVybv.OWRjNDRiNTUwMGVhMmQxN2Q4YmYzNWI2M2Y5OGYwYTM=..1g6mchj5e.1g6mchj65.0.1.1; _ga_PZYNX62DRR=GS1.1.1656461247.1.1.1656461335.0',
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    }
}).then(res => {
    const $ = cheerio.load(res.data);
    let Array = [];
    $("div.center").each((i, el) => {
        Array.push({
            link: $(el).find("div.download_link > a.input").attr("href"),
            filename: $(el).find("div.intro > div.filename").text()
    })
    })
    resolve(Array)
}).catch(reject)
})
}
module.exports = { mediafire }