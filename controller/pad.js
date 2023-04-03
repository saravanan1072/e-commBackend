const pad=(req,res)=>{
    res.send([
        {
        "id":"1",
        "title":"Apple 2022  iPad ",
        "description":"Wi-Fi + Cellular, 128GB - Silver (6th Generation) | ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/814P0ojHArL._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":" 1,26,999",
        "discount":"1",
        "actualPrice":"1,27,999",
        "rating":"4",
        "ratingCount":"8",
    },   {
        "id":"2",
        "title":"Samsung Galaxy Tab ",
        "description":"A8 10.5 inches Display, RAM 3 GB, ROM 32 GB Expandable, Wi-Fi Tablets, Gray, (SM-X200NZAAINU) ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91veRYPjpeL._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":"15,000 ",
        "discount":"21",
        "actualPrice":"21,599",
        "rating":"3.5",
        "ratingCount":"127",
    },   {
        "id":"3",
        "title":"Xiaomi Pad 5 ",
        "description":" Qualcomm Snapdragon 860| 120Hz Refresh Rate| 6GB, 128GB| 2.5K+ Display (10.95-inch/27.81cm)|1 Billion Colours| Dolby Vision Atmos| Quad Speakers| Wi ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Eb9vtdSML._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":"26,999 ",
        "discount":"21",
        "actualPrice":"37,999",
        "rating":"4",
        "ratingCount":"3527",
    },   {
        "id":"4",
        "title":"IKALL N7 WiFi Only Tablet ",
        "description":"7 Inch IPS Display, Android 6.0| 2GB RAM, 16GB Storage -Black",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61s2PrOwwTL._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":"4,999 ",
        "discount":"42",
        "actualPrice":"5,999",
        "rating":"3",
        "ratingCount":"87",
    },   {
        "id":"5",
        "title":"realme Pad X WiFi+5G Tablet ",
        "description":"6GB RAM 128GB ROM (Expandable), 27.9cm (11 inch) WUXGA+ Display | 6nm SD Processor | Dolby Atmos Quad Speakers | 8340 mAh Battery ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61OduK+OwBL._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":"26,999 ",
        "discount":"44",
        "actualPrice":"44,999",
        "rating":"3",
        "ratingCount":"5,667",
    },   {
        "id":"6",
        "title":" Motorola Tab ",
        "description":"11inch, 4GB, 64GB, WiFi+LTE Calling), Modernist Teal with Mediatek Helio G90T Processor, Quadcore Speakers with Dolby Atmos, Face Unlock and Google Assistant   ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41YiWiIVh-L._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":" ",
        "discount":"22,844",
        "actualPrice":"35,000",
        "rating":"4",
        "ratingCount":"1378",
    },   {
        "id":"7",
        "title":"Samsung Galaxy Tab S7 ",
        "description":" FE 31.5 cm (12.4 inch) Large Display, Slim Metal Body, Dolby Atmos Sound, S-Pen in Box, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Mystic Black ",
        "image":"https://m.media-amazon.com/images/I/915rA4VNXuL._AC_UY327_QL65_.jpg",
        "discountPrice":" 45,999",
        "discount":"8",
        "actualPrice":"49,999",
        "rating":"3",
        "ratingCount":"567",
    }, 
    {
        "id":"8",
        "title":"Lenovo M10 Fhd Plus 2Nd Gen ",
        "description":"  10.3 Inches (4Gb, 128 Gb, Wi-Fi + Lte, Volte Calling) Tab With Active Pen, Kids Mode With Parental Control, Dolby Atmos Speakers,Tuv Certified",
        "image":"https://m.media-amazon.com/images/I/71UD5dhwyYS._AC_UY327_QL65_.jpg",
        "discountPrice":"19,999 ",
        "discount":"51",
        "actualPrice":"39,000",
        "rating":"4",
        "ratingCount":"8,765",
    }, 
    {
        "id":"9",
        "title":"Lenovo Tab P11 Plus Tablet ",
        "description":"11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Voice Calling), Slate Grey with 2K Display, Quad Speakers with Dolby Atmos, 7700 mAH Battery and TU ",
        "image":"https://m.media-amazon.com/images/I/511mMK0LW2L._AC_UY327_QL65_.jpg",
        "discountPrice":" 27,999",
        "discount":"32",
        "actualPrice":"39,000",
        "rating":"4",
        "ratingCount":"8,877",
    }, 
    {
        "id":"10",
        "title":"Apple ipad ",
        "description":" 10.9-inch iPad (Wi-Fi + Cellular, 64GB) - Pink (10th Generation) ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61-y844vGPL._AC_UY327_FMwebp_QL65_.jpg",
        "discountPrice":" 56,989",
        "discount":"5",
        "actualPrice":"59,999",
        "rating":"4",
        "ratingCount":"433",
    }, 
    {
        "id":"11",
        "title":"Apple 2022 ipad pro ",
        "description":"Apple 2022 12.9-inch iPad Pro (Wi-Fi + Cellular, 2TB) - Space Grey (6th Generation) ",
        "image":"https://m.media-amazon.com/images/I/81hAx31maUL._AC_UY327_QL65_.jpg",
        "discountPrice":"2,36,900",
        "discount":"1",
        "actualPrice":"2,37,900",
        "rating":"4",
        "ratingCount":"199",
    }, 
    {
        "id":"12",
        "title":"Apple ipad max ",
        "description":"ProElite Smart Flip Case Cover for Apple iPad Pro 11 4th/3rd Gen 2022/2021 & iPad Air 5th/4th Gen 10.9, Transparent Back with Pencil Holder, Black ",
        "image":"https://m.media-amazon.com/images/I/71MrIgHZSBL._AC_UY327_QL65_.jpg",
        "discountPrice":"43,999 ",
        "discount":"1",
        "actualPrice":"45,999",
        "rating":"5",
        "ratingCount":"2",
    }, 

])

}

const caroPad=(req,res)=>{
    res.send([
        {
            "id":"1",
            "image":"https://images.ctfassets.net/i2qsnovxhn7q/6BNwUAX91kDTwO5Hxio2Gn/cf957e0d3a0b03b33230beb589c1b8e7/jb-au-20221020-computers-ipad-10th-learn-more_carousel_desktop.jpg?fm=jpg"
        }, {
            "id":"2",
            "image":"https://www.iphonelife.com/sites/iphonelife.com/files/whichipad_0.jpg"
        }, {
            "id":"3",
            "image":"https://media.cnn.com/api/v1/images/stellar/prod/210531110759-best-ipad-lead.jpg?q=w_2082,h_1171,x_0,y_0,c_fill"
        }
    ])
}

module.exports={pad,caroPad}