<p align="center">
  <a href="https://www.npmjs.com/package/@sl-code-lords/photooxy" rel="noopener">
 <img height=70px src="https://photooxy.com/images/logo/logo-oxy.png" alt="SL Code LORDS"></a>
</p>
<h2 align="center">Photooxy</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/Photooxy.svg)](https://github.com/SL-CODE-LORDS/Photooxy/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/Photooxy.svg)](https://github.com/SL-CODE-LORDS/Photooxy/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> full scrap - [photooxy](https://photooxy.com)
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Source](#source)
- [Donation](#donation)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

full scrap - [photooxy](https://photooxy.com)

## 👨‍💻 Download Source Code <a name = "about"></a>

you can download full source code without encryption
[Download Source](https://www.buymeacoffee.com/ravindu01manoj/e/155199)

## 💕 Donation <a name = "donation"></a>

<a href="https://www.buymeacoffee.com/ravindu01manoj"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="60"></a>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Installing


```sh
yarn add @sl-code-lords/photooxy
```

or

```sh
npm i @sl-code-lords/photooxy
```

## 🎈 Usage <a name="usage"></a>

```ts
var fs = require('fs')
var Photooxy = require('@sl-code-lords/photooxy')

var photooxy = new PhotoOxy()

```
## get photooxy Url List
```ts
var links = await photooxy.get_urls_list()
console.log(links)
```
```ts
[
    {
        "url": "https://photooxy.com/prism-kaleidoscope-photo-effects-online-420.html",
        "title": "Prism kaleidoscope photo effects online",
        "images": [
            {
                "height": "667",
                "width": "1000"
            }
        ],
        "text": 0
    },
    {
        "url": "https://photooxy.com/create-a-broken-glass-mirror-photo-effect-online-419.html",
        "title": "Create a broken glass mirror photo effect online",
        "images": [
            {
                "height": "667",
                "width": "1000"
            }
        ],
        "text": 0
    },
    {
        "url": "https://photooxy.com/art-effects/create-pencil-sketch-effect-with-your-photo-online-1.html",
        "title": "Create pencil sketch effect with your photo online",
        "images": [
            {
                "height": "434",
                "width": "434"
            }
        ],
        "text": 0
    },
    {
        "url": "https://photooxy.com/other-design/double-love-photo-frame-401.html",
        "title": "Double love photo frame editor",
        "images": [
            {
                "height": "321",
                "width": "393"
            },
            {
                "height": "321",
                "width": "393"
            }
        ],
        "text": 0
    },
    {
        "url": "https://photooxy.com/other-design/double-photo-frame-400.html",
        "title": "Free double photo frame maker online",
        "images": [
            {
                "height": "266",
                "width": "196"
            },
            {
                "height": "269",
                "width": "231"
            }
        ],
        "text": 0
    },
    ...300 more items
]
```
## get photooxy Url info
```ts
var info = await photooxy.analyze_url("https://photooxy.com/league-of-legends/avatar-custom-your-lol-rank-127.html")
console.log(info)
```
```ts
{
    "url": "https://photooxy.com/league-of-legends/avatar-custom-your-lol-rank-127.html",
    "title": "Custom your own LOL avatar with rank boder",
    "images": [
        {
            "height": "460",
            "width": "305"
        }
    ],
    "selections": [
        12
    ],
    "text": 2
}
```

## create only one text image
```ts
var image1 = await photooxy.create({
  url : 'https://photooxy.com/create-blackpink-style-logo-effects-online-for-free-417.html',
  text : ['sl code lords']
  })
var img1_buf = await photooxy.image_to_buffer(image1.url)
fs.writeFileSync('./saved/'+image1.file_name,img1_buf)
```

## create double text image
```ts
var image2 = await photooxy.create({
  url : 'https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html',
  text : ['Ravindu','Manoj']
  })
var img2_buf = await photooxy.image_to_buffer(image2.url)
fs.writeFileSync('./saved/'+image2.file_name,img2_buf)
```

## create image text effect
```ts
var image3 = await photooxy.create({
  url : 'https://photooxy.com/create-a-360-degree-bedroom-panoramic-online-407.html',
  images : ['./media/i1.jpg','./media/i2.png']
  })
var img3_buf = await photooxy.image_to_buffer(image3.url)
fs.writeFileSync('./saved/'+image3.file_name,img3_buf)
```

## create selection text effect
```ts
var image4 = await photooxy.create({
  url : 'https://photooxy.com/league-of-legends/make-your-logo-pentakill-lol-128.html',
  text : ['sl code lords'],
  selection:[24,5]
  })
var img4_buf = await photooxy.image_to_buffer(image4.url)
fs.writeFileSync('./saved/'+image4.file_name,img4_buf)
```

## create selection + text + image image
```ts
var image5 = await photooxy.create({
  url : 'https://photooxy.com/league-of-legends/avatar-custom-your-lol-rank-127.html',
  text : ['Ravindu','Manoj'],
  selection:[5],
  images : ['./media/i2.png']
  })
var img5_buf = await photooxy.image_to_buffer(image5.url)
fs.writeFileSync('./saved/'+image5.file_name,img5_buf)
```
## ✍️ Authors <a name = "authors"></a>

- [@ravindu01manoj](https://github.com/ravindu01manoj) Project Author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Photooxy/contributors) who participated in this project.