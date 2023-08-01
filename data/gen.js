(async function gen() {
    var axios = require('axios')
    var cheerio = require('cheerio')
    var fs = require('fs')
    var { get_info_url } = require('../lib/index')
    var _link = []
    var data = {
        status: true,
        code_author: { name: 'Ravindu Manoj', github: 'ravindu01manoj' },
        link: []
    }
    var get_data = async (url) => {
        try {
           return await get_info_url(url)
        } catch (error) {
            return {}
        }
    }
    var urls = []
    for (let index = 1; index < 17; index++) {
        var _dt;
        try {
            var _dt = await axios.get('https://photooxy.com/home-p' + index + '.html',{"headers": {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}})
        } catch (e){
            console.log(e)
            break;
        }
        var $ = cheerio.load(_dt.data)
        $('.row > div > div.div-effect').find('a').each((colIndex, colElement) => {
            try {
                var title = $(colElement).find('div.title-effect-home').text().trim()
                if (title) {
                    var url = 'https://photooxy.com' + $(colElement).attr('href')
                    _link.push({ url, title })
                }
            } catch { }
        });
        for (const i of _link) {
            if (!urls.includes(i.url)) {
                urls.push(i.url)
                var dat = await get_data(i.url)
                data.link.push({ ...i, ...dat })
            }
        }
    }
    fs.writeFileSync('photooxy.json', JSON.stringify(data, null, 4))
})()