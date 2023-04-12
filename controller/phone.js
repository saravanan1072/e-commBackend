
const phoneStructure=require('../model/phone')
const phone=async(req,res)=>{
    const fetchData=await phoneStructure.find() 
    res.send(fetchData)

    
   // res.send([
    //    {
    //     "id":"1",
    //     "title":"iQOO Z7 5G by vivo",
    //     "description":"Norway Blue, 6GB RAM, 128GB Storage | Dimensity 920 5G 6nm Processor | 64MP OIS Ultra Stable Camera | Segment's Brightest AMOLED Display | 44W ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/611jxZCY1bL._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":" 18,999",
    //     "discount":"14",
    //     "actualPrice":"21,999",
    //     "rating":"4",
    //     "ratingCount":"87",
    // },  {
    //     "id":"2 ",
    //     "title":"Redmi Note 11 Pro",
    //     "description":"Stealth Black, 8GB RAM, 128GB Storage)| 67W Turbo Charge | 120Hz Super AMOLED Display | Charger Included | Get 2 Months of YouTube Premium Free! ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/717DeSsnXpL._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":"20999 ",
    //     "discount":" 16",
    //     "actualPrice":"24999",
    //     "rating":"4",
    //     "ratingCount":"789",

    // },  {
    //     "id":"3 ",
    //     "title":"Samsung Galaxy  ",
    //     "description":"Samsung Galaxy M32 (Black, 4GB RAM, 64GB | FHD+ sAMOLED 90Hz Display | 6000mAh Battery | 64MP Quad Camera ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Q3iSQAwAS._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":"14,499 ",
    //     "discount":" 14",
    //     "actualPrice":"17,999",
    //     "rating":"4.2",
    //     "ratingCount":"1067",

    // },  {
    //     "id":"4 ",
    //     "title":"Oppo A78 5G ",
    //     "description":"Oppo A78 5G Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/8104evx11QL._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":" 18,999",
    //     "discount":"18,999 ",
    //     "actualPrice":"21,999",
    //     "rating":"4",
    //     "ratingCount":"256",

    // },  {
    //     "id":"5 ",
    //     "title":"OPPO A74 5G",
    //     "description":" Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71geVdy6-OS._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":" 14,999",
    //     "discount":" 21",
    //     "actualPrice":"18,999",
    //     "rating":"3.9",
    //     "ratingCount":"4678",

    // },  {
    //     "id":"6",
    //     "title":"Samsung Galaxy Z Fold4 5G",
    //     "description":"Beige, 12GB RAM, 512GB Storage) with No Cost EMI/Additional Exchange Offers ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/714QNdK8BWL._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":"1,64,999 ",
    //     "discount":"21",
    //     "actualPrice":"1,87,000",
    //     "rating":"4.1",
    //     "ratingCount":"23",

    // },  {
    //     "id":"7 ",
    //     "title":"Apple iPhone 14 Pro (1 TB) - Silver",
    //     "description":"15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion |48MP Main camera for up to 4x greater resolution ",
    //     "image":" https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61lKQWyMdDL._AC_UY327_FMwebp_QL65_.jpg",
    //     "discountPrice":"1,72,093 ",
    //     "discount":"4 ",
    //     "actualPrice":"1,79,999",
    //     "rating":"3.5",
    //     "ratingCount":"8909",

    // },  {
    //     "id":"8 ",
    //     "title":"MI 10T 5G Cosmic Black",
    //     "description":"MI 10T 5G Cosmic Black, 8GB RAM, 128GB Storage - | Additional Exchange/No Cost EMI Offers ",
    //     "image":" https://m.media-amazon.com/images/I/71phm03oYhL._AC_UY327_QL65_.jpg",
    //     "discountPrice":" 24,999",
    //     "discount":"42 ",
    //     "actualPrice":"42,999",
    //     "rating":"4",
    //     "ratingCount":"23",

    // },  {
    //     "id":"9 ",
    //     "title":"Nokia G21 Android Smartphone,",
    //     "description":" Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue ",
    //     "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71x+m2-yb7L._AC_UY327_FMwebp_QL65_.jpg ",
    //     "discountPrice":"14,399 ",
    //     "discount":"14 ",
    //     "actualPrice":"17,499",
    //     "rating":"4",
    //     "ratingCount":"45",

    // },  {
    //     "id":"10 ",
    //     "title":"OnePlus 11R 5G",
    //     "description":"Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage | Additional Exchange/No Cost EMI Offers",
    //     "image":" https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UY327_QL65_.jpg",
    //     "discountPrice":" 44,999",
    //     "discount":"9 ",
    //     "actualPrice":"48,000",
    //     "rating":"4.5",
    //     "ratingCount":"4",

    // },  {
    //     "id":"11 ",
    //     "title":"Apple iPhone 14 Pro ",
    //     "description":" 15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion | 48MP Main camera for up to 4x greater resolution",
    //     "image":"https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UY327_QL65_.jpg ",
    //     "discountPrice":"1,23,099 ",
    //     "discount":"5 ",
    //     "actualPrice":"1,29,900",
    //     "rating":"4",
    //     "ratingCount":"10",

    // }
    // , {
    //     "id":"12",
    //     "title":"Apple iPhone 9 Pro ",
    //     "description":" 15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion | 48MP Main camera for up to 4x greater resolution",
    //     "image":"https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UY327_QL65_.jpg ",
    //     "discountPrice":"1,23,099 ",
    //     "discount":"5 ",
    //     "actualPrice":"1,29,900",
    //     "rating":"4",
    //     "ratingCount":"10",

    // }

 // ]  )

}

const carosalPhone=(req,res)=>{
    res.send([
        {
            "id":"1",
            "image":"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img23/Wireless/ssserene/Larry/LP/Larry_LP_2303_DT1.jpg",
            "title":"iphone 14 Pro Max",
            "description":"Gray Shadow, 16GB RAM, 256GB Storage",
            "content":"Brighter 15.54 cm (6.1-inch) Super Retina XDR display¹ featuring Always-On, which keeps your info at a glance",
           "content1":" Dynamic Island, a magical new way to interact with iPhone",
           "content2":" Superfast 5G. With SmartData mode, iPhone downshifts automatically to save power when you don’t need all that speed.",
           "content3":"  48MP Main camera with an advanced quad-pixel sensor for up to 4x the resolution",
           "content4":" A16 Bionic chip —superfast and super-efficient for amazing all-day battery life",
            "price":"1,47,000",

        }, {
            "id":"2",
            "image":"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/OPPOStore/TopBanner/D64076915_WLD-OPPO-Family_BAU_Pc_Header_1500x450_2.gif",
            "title":"OnePlus Nord 2T 5G",
            "description":"Gray Shadow, 8GB RAM, 128GB Storage",
            "content":"Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615",
            "content1":"Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters.",
            "content2":"Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified",
            "content3":"Display Features: Ambient Display, AI colour enhancement and Dark mode",
            "content4":"Processor: Mediatek Dimensity 1300 and Battery & Charging: 4500 mAh with 80W SuperVOOC",
            "price":"35,999"

        }, {
            "id":"3",
            "image":"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Wireless/Shivani/Vivo/vivo-BAU-Page_Amazon_01.jpg",
            "title":"Samsung Galaxy S22 Ultra 5G",
            "description":"Burgundy, 12GB, 256GB Storage",
            "content":"The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.",
            "content1":"5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.",
            "content2":"The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.",
            "content3":"Our most advanced Pro-grade Camera yet, packing the power of a professional's kit in one handheld device. Also lets you make your nights epic with Nightography: The sensor pulls in more light, the Super Clear Lens tones down lens flare, and fast-acting AI delivers near-instant intelligent processing.",
            "content4":"Connector type: usb type c",
            "price":"1,09,000"

        },
    ])

}

module.exports={phone,carosalPhone}