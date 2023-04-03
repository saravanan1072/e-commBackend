const home=(req,res)=>{
   // https://fakestoreapi.com/products
    res.send(
        [
            {
                "id":"21",
                "title":"Asus VivoBook Flip 14 ",
                "description":" X415KA-BV121WS Intel Pentium Silver N6000 14 Inches Notebook Laptop (8GB/256GB SSD/Windows 11/Transparent Silver/1.5 Kg ",
                "image":"https://img4.gadgetsnow.com/gd/images/products/additional/large/G338944_View_1/computer-laptop/laptops/asus-vivobook-flip-14-x415ka-bv121ws-intel-pentium-silver-n6000-14-inches-notebook-laptop-8gb-256gb-ssd-windows-11-transparent-silver-1-5-kg-.jpg ",
                "discountPrice":"33,999 ",
                "discount":"15",
                "actualPrice":"38,900",
                "rating":"4",
                "ratingCount":"6,782",
            }, {
                "id":"22",
                "title":"Apple Adapter ",
                "description":" 20W USB-C Power Adapter (for iPhone, iPad & AirPods) ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61vtLhO6fDL._SY741_.jpg",
                "discountPrice":"1,550 ",
                "discount":"34",
                "actualPrice":"1,990",
                "rating":"5",
                "ratingCount":"20,684",
            }, {
                "id":"23 ",
                "title":"Redmi Note 11 Pro",
                "description":"Stealth Black, 8GB RAM, 128GB Storage)| 67W Turbo Charge | 120Hz Super AMOLED Display | Charger Included | Get 2 Months of YouTube Premium Free! ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/717DeSsnXpL._AC_UY327_FMwebp_QL65_.jpg ",
                "discountPrice":"20999 ",
                "discount":" 16",
                "actualPrice":"24999",
                "rating":"4",
                "ratingCount":"789",
        
            }, 
            {
                "id":"24",
                "title":"realme Pad X WiFi+5G Tablet ",
                "description":"6GB RAM 128GB ROM (Expandable), 27.9cm (11 inch) WUXGA+ Display | 6nm SD Processor | Dolby Atmos Quad Speakers | 8340 mAh Battery ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61OduK+OwBL._AC_UY327_FMwebp_QL65_.jpg",
                "discountPrice":"26,999 ",
                "discount":"44",
                "actualPrice":"44,999",
                "rating":"3",
                "ratingCount":"5,667",
            }, 
            {
                "id":"25 ",
                "title":"Oppo A78 5G ",
                "description":"Oppo A78 5G Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/8104evx11QL._AC_UY327_FMwebp_QL65_.jpg ",
                "discountPrice":" 18,999",
                "discount":"18,999 ",
                "actualPrice":"21,999",
                "rating":"4",
                "ratingCount":"256",
        
            },  {
                "id":"26",
                "title":"IdeaPad Flex 3i Chromebook ",
                "description":" Powerful AMD Ryzen™ mobile processors & advanced AMD graphics ",
                "image":"https://www.lenovo.com/medias/lenovo-laptop-ideapad-flex-3i-chromebook-gen-6-11-intel-subseries-gallery-3.png?context=bWFzdGVyfHJvb3R8MTM3MTU0fGltYWdlL3BuZ3xoZmMvaDkwLzEyNTc2Mjk1MTkwNTU4LnBuZ3xkNTIxYmFhNmJiZmI1ZDIxMTA4MmJlNTIyNzM3NDExMGZjNDIyOWUzMjhlMTEzNjY3MzU5OGFmNzgwZTA4NzMz ",
                "discountPrice":"43,999 ",
                "discount":"9",
                "actualPrice":"45,999",
                "rating":"4",
                "ratingCount":"567",
            },  {
                "id":"27",
                "title":"Irusu Monster VR Headset ",
                "description":"  Remote Controller and Conductive Touch Button for VR Supported Smartphones(New Model) (Black) ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61-tgcn-R3L._SX522_.jpg",
                "discountPrice":"1,800 ",
                "discount":"40",
                "actualPrice":"3,200",
                "rating":"3",
                "ratingCount":"20,643",
            },  {
                "id":"28",
                "title":"Lenovo M10 Fhd Plus 2Nd Gen ",
                "description":"  10.3 Inches (4Gb, 128 Gb, Wi-Fi + Lte, Volte Calling) Tab With Active Pen, Kids Mode With Parental Control, Dolby Atmos Speakers,Tuv Certified",
                "image":"https://m.media-amazon.com/images/I/71UD5dhwyYS._AC_UY327_QL65_.jpg",
                "discountPrice":"19,999 ",
                "discount":"51",
                "actualPrice":"39,000",
                "rating":"4",
                "ratingCount":"8,765",
            },   {
                "id":"29",
                "title":"Asus ROG Strix G15 Gaming Laptop ",
                "description":" AMD Ryzen 7/ 16 GB RAM/ 1 TB SSD/ 15.6 inch (39.62) cm Display/ 4GB NVIDIA Graphics/ Win 11/ Office ",
                "image":" https://d2xamzlzrdbdbn.cloudfront.net/products/c5f0c2c0-584e-404d-815a-8600776519de22260821.jpg",
                "discountPrice":"85,990",
                "discount":"26",
                "actualPrice":"1,15,900",
                "rating":"3",
                "ratingCount":"2,742",
            },
            {
                "id":"30 ",
                "title":"MI 10T 5G Cosmic Black",
                "description":"MI 10T 5G Cosmic Black, 8GB RAM, 128GB Storage - | Additional Exchange/No Cost EMI Offers ",
                "image":" https://m.media-amazon.com/images/I/71phm03oYhL._AC_UY327_QL65_.jpg",
                "discountPrice":" 24,999",
                "discount":"42 ",
                "actualPrice":"42,999",
                "rating":"4",
                "ratingCount":"23",
        
            }, 
            {
                "id":"31",
                "title":"MI Power Bank 3i ",
                "description":" 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71lVwl3q-kL._SX679_.jpg",
                "discountPrice":"1,600 ",
                "discount":"28",
                "actualPrice":"2,500",
                "rating":"4",
                "ratingCount":"50,654",
            }, {
                "id":"32",
                "title":"Apple ipad ",
                "description":" 10.9-inch iPad (Wi-Fi + Cellular, 64GB) - Pink (10th Generation) ",
                "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61-y844vGPL._AC_UY327_FMwebp_QL65_.jpg",
                "discountPrice":" 56,989",
                "discount":"5",
                "actualPrice":"59,999",
                "rating":"4",
                "ratingCount":"433",
            }, 


            
            ])

}
const homecaro=(req,res)=>{
    res.send([
        {
            "id":42,
            "image":"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif "
        },
        {
            "id":43,
            "image":"https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/pc/acc/hed/Pc_acc_header_pc_1500x300.jpg"
        },
    ])
}


module.exports={home,homecaro}