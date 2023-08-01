(async function test() {
    var fs = require('fs')
    var PhotoOxy = require('..')
    var photooxy = new PhotoOxy()

    //only one text
    var image1 = await photooxy.create({url : 'https://photooxy.com/create-blackpink-style-logo-effects-online-for-free-417.html',text : ['sl code lords']})
    console.log(image1)
    var img1_buf = await photooxy.image_to_buffer(image1.url)
    fs.writeFileSync('./saved/'+image1.file_name,img1_buf)

    //double text
    var image2 = await photooxy.create({url : 'https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html',text : ['Ravindu','Manoj']})
    console.log(image2)
    var img2_buf = await photooxy.image_to_buffer(image2.url)
    fs.writeFileSync('./saved/'+image2.file_name,img2_buf)

    //image
    var image3 = await photooxy.create({url : 'https://photooxy.com/create-a-360-degree-bedroom-panoramic-online-407.html',images : ['./media/i1.jpg','./media/i2.png']})
    console.log(image3)
    var img3_buf = await photooxy.image_to_buffer(image3.url)
    fs.writeFileSync('./saved/'+image3.file_name,img3_buf)

    // selection
    var image4 = await photooxy.create({url : 'https://photooxy.com/league-of-legends/make-your-logo-pentakill-lol-128.html',text : ['sl code lords'],selection:[24,5]})
    console.log(image4)
    var img4_buf = await photooxy.image_to_buffer(image4.url)
    fs.writeFileSync('./saved/'+image4.file_name,img4_buf)
    
    // selection + image + text
    var image5 = await photooxy.create({url : 'https://photooxy.com/league-of-legends/avatar-custom-your-lol-rank-127.html',text : ['Ravindu','Manoj'],selection:[5],images : ['./media/i2.png']})
    console.log(image5)
    var img5_buf = await photooxy.image_to_buffer(image5.url)
    fs.writeFileSync('./saved/'+image5.file_name,img5_buf)

})()