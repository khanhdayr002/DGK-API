
  var axios = require("axios");
  var data = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "www.facebook.com",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    cookie: "locale=vi_VN;vpd=v1%3B716x360x2;sb=HMooYiDm9Kh7aSMOcHelM8N4;dpr=0.75;datr=fdvlYvC9Fvk5PmP1OdUVJPdA;c_user=100051638101791;xs=34%3AMzGftV8OZsIaDA%3A2%3A1659444562%3A-1%3A6302%3A%3AAcUIK2FToCJUpKC7OP1D94fb3WLYZWmBWyamfYT9Nw;wd=426x697;fr=0u2wnFW1rdRrMmV2H.AWVZwiKSz57GiBld87K4gqE44dg.Bi6S0Q.22.AAA.0.0.Bi6S07.AWX_71t969g;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659448690469%2C%22v%22%3A1%7D;"
  };

var cookie = "sb=rAx6ZZ7NlUYy0clzOq8gMtRJ;ps_n=1;ps_l=1;wd=1876x956;c_user=100004752336149;datr=CUt4Zrx1iTbaePmXVBvXn2vg;i_user=61556666968083;xs=19%3AZQpM9T-2Y_G5Ig%3A2%3A1719159559%3A-1%3A5144%3A%3AAcUaTjBfQN3ZOQWP3Ys33fwsIjfzIWnwE13DMtOwmQ;fr=1q4sz7S7vYGXC2vI2.AWWsfPwV1bB7gYR7S0xUz46E6n8.BmeLVj..AAA.0.0.BmeLVj.AWX_Q9OE-UQ;"
const facebookStoryDL = async function (url) {
   var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
    return new Promise(async (resolve, reject) => {
        axios.get(url, {
      headers: {
            'authority': 'business.facebook.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': "Windows",
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'Cookie': cookie
        } 
    }).then(async function (rawResponse) {
// const datas = (await axios.post('https://nodejs.tuanvudev2.repl.co/upcode', {code: rawResponse.data})).data
//           console.log(datas)
          var data = rawResponse.data;
          
          const permalink = data.match(/"permalink_url":"(.*?)"/);
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
        // console.log(match)
      if (nodes && nodes[1]) {
        var result = {
          data: {
          url: url,
          thumbnail: object && object[1] ? wrap(object[1]) : "",
          
          videos: {
         sd: wrap(nodes[1]),
         hd: match[0] && match[1] ? wrap(match[1]) : ""
             }
        },
          author: 'Nguyễn Liên Mạnh'
        };
       // console.log(result)
            resolve(result)
      }
        }).catch(err => {
            reject(err)
        })
    })

}
const facebookDL = async function (url) {
  var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
  return new Promise(async (resolve, reject) => {
        axios.get(url, {
      headers: {
            'authority': 'business.facebook.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': "Windows",
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'Cookie': cookie
        } 
    }).then(async function (rawResponse) {
           var data = rawResponse.data;
          const articleBody = data.match(/"articleBody":"(.*?)"/) || 'Không có';
          const permalink = data.match(/"permalink_url":"(.*?)"/);
        const duration = data.match(/"playable_duration_in_ms":(.*?),/);
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
         // const authors = data.match(/"owner_as_page":{(.*?)}/) || data.match(/"owning_profile":{(.*?)}/);
         //console.log(articleBody[1])
          //var au = JSON.parse(`{${authors[1]}}}`)
      if (nodes && nodes[1]) {
        var result = {
          data: {
       //   title: articleBody,
          url: url,
         //duration: duration[1],
         link: permalink[1].replace(/\\/g, ''),
         thumbnail: object && object[1] ? wrap(object[1]) : "", 
        // author_video: au,
          videos: {
         sd: wrap(nodes[1]),
         hd: match[0] && match[1] ? wrap(match[1]) : ""
             }
          },
          author: "Nguyễn Liên Mạnh"
        };
       // console.log(nodes)
            resolve(result)
      }
        }).catch(err => {
            reject(err)
          console.log(err)
        })
})
                     }
const facebookGrupDL = async function (url) {
   var wrap = function getValue(callbackId) {
    return JSON.parse('{"text": "' + callbackId + '"}').text;
  };
    return new Promise(async (resolve, reject) => {
        axios.get(url, {
      headers: {
            'authority': 'business.facebook.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': "Windows",
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'Cookie': cookie
        } 
    }).then(async function (rawResponse) {
// const datas = (await axios.post('https://nodejs.tuanvudev2.repl.co/upcode', {code: rawResponse.data})).data
//            console.log(datas) 
          var data = rawResponse.data;
         // console.log(data)
          //resolve(data)
          const permalink = data.match(/"permalink_url":"(.*?)"/);
      var nodes = data.match(/"playable_url":"(.*?)"/);
      var match = data.match(/"playable_url_quality_hd":"(.*?)"/);
      var object = data.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
         // const authors = data.match(/"owner_as_page":{(.*?)}/) || data.match(/"owning_profile":{(.*?)}/);
         //console.log(articleBody[1])
         // var au = JSON.parse(`{${authors[1]}}}`)
          var hd = ''
          if(match == null) {
            hd = wrap(nodes[1])
          } else {
            hd = match[0] && match[1] ? wrap(match[1]) : ""
          }
        // console.log(match)
      if (nodes && nodes[1]) {
        var result = {
          data: {
          url: url,
          thumbnail: object && object[1] ? wrap(object[1]) : "",
        //  author_video: au,
          videos: {
         sd: wrap(nodes[1]),
         hd: hd
             }
        },
          author: 'Nguyễn Liên Mạnh'
        };
       // console.log(result)
            resolve(result)
      }
        }).catch(err => {
            reject(err)
        })
    })

}

module.exports = {
  facebookDL,
  facebookStoryDL,
  facebookGrupDL
}
