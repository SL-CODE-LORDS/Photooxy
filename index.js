const {image_to_buffer,photoOxy,get_info_url} = require('./lib')
const axios = require('axios')

class PhotoOxy {
    constructor() {
        this.data_url = 'https://raw.githubusercontent.com/SL-CODE-LORDS/Photooxy/main/data/photooxy.json'
    }
    async get_urls_list() {
        const res = await axios.get(this.data_url)
        return res.data.link
    }
    async analyze_url(url) {
        return await get_info_url(url)
    }
    async image_to_buffer(direct_url) {
        return await image_to_buffer(direct_url)
    }
    async create({url,text=[],images=[],selection=[]}) {
        const inputs = {
            url, // photooxy html url
            text, // if analyze_url().text == 0 or 1 or 2 ... add the array of text => ['sl','code','lords']
            images, // if analyze_url().images.length > 0 ... add the array of images path => ['./ex_1.jpg','./ex_2.jpg','./ex_3.jpg']
            selection, // if analyze_url().selection.length > 0 ... add the array of selection (if analyze_url().selection[0] == 30 , you need to add 0-30 number for the place) ==> [12,1,2]
        }
        return await photoOxy(inputs)
    }
}

module.exports = PhotoOxy