const laptop=(req,res)=>{
    res.send([
        {
        "id":"1",
        "title":"Apple 2022 MacBook Air Laptop  ",
        "description":"M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Silver  ",
        "image":"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eXNIDUGjL._SX679_.jpg ",
        "discountPrice":"1,49,000 ",
        "discount":"21",
        "actualPrice":"1,70,000",
        "rating":"4",
        "ratingCount":"256",
    },
    {
        "id":"2",
        "title":" 13‑inch MacBook Pro - Silver",
        "description":"Apple M2 chip with 8-core CPU, 10-core GPU and 16-core Neural Engine ",
        "image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481 ",
        "discountPrice":"1,09,000 ",
        "discount":"11",
        "actualPrice":"1,25,000",
        "rating":"5",
        "ratingCount":"2,389",
    },
    {
        "id":"3",
        "title":"Microsoft Surface Pro 8 ",
        "description":" Core i5 11th Gen / 8GB RAM / 128GB SSD / 13 inch (33.2 cm) Display / Windows 11 Home ",
        "image":"https://d2xamzlzrdbdbn.cloudfront.net/products/67868018-eb6e-483b-87c6-b991ba6424f722200504.jpg ",
        "discountPrice":"89,999 ",
        "discount":"23",
        "actualPrice":"1,15,000",
        "rating":"5",
        "ratingCount":"89",
    },
    {
        "id":"4",
        "title":" Apple MacBook Air A1486",
        "description":" 13-inch, Latest Model, 8GB RAM, 128GB Storage, Intel Core i5 ",
        "image":"https://www.hilaptop.com/userdata/public/gfx/5353.jpg ",
        "discountPrice":"43,999 ",
        "discount":"31",
        "actualPrice":"55,999",
        "rating":"3",
        "ratingCount":"2,890",
    },
    {
        "id":"5",
        "title":"Asus VivoBook Flip 14 ",
        "description":" X415KA-BV121WS Intel Pentium Silver N6000 14 Inches Notebook Laptop (8GB/256GB SSD/Windows 11/Transparent Silver/1.5 Kg ",
        "image":"https://img4.gadgetsnow.com/gd/images/products/additional/large/G338944_View_1/computer-laptop/laptops/asus-vivobook-flip-14-x415ka-bv121ws-intel-pentium-silver-n6000-14-inches-notebook-laptop-8gb-256gb-ssd-windows-11-transparent-silver-1-5-kg-.jpg ",
        "discountPrice":"33,999 ",
        "discount":"15",
        "actualPrice":"38,900",
        "rating":"4",
        "ratingCount":"6,782",
    },
    {
        "id":"6",
        "title":"HP Laptop 348G3  ",
        "description":" Intel Core i5 - 6200u Processor 14.1 Inches 8 GB Ram & 128 GB SSD, Windows 10, Premium Business Notebook Computer (Silver, 1.95Kg)  ",
        "image":" https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/314J9pAsXyL._SX300_SY300_QL70_FMwebp_.jpg",
        "discountPrice":"29,999 ",
        "discount":"23",
        "actualPrice":"35,990",
        "rating":"3",
        "ratingCount":"2,532",
    },
   
    {
        "id":"8",
        "title":"HP Pavilion X360  ",
        "description":" Intel Core I3-1125G4 14 Inches Notebook Laptop (8GB/512GB SSD/Windows 11/Spruce Blue/1.52 Kg) ",
        "image":"https://img2.gadgetsnow.com/gd/images/products/additional/large/G362168_View_1/computer-laptop/laptops/hp-pavilion-x360-14-dy0208tu-intel-core-i3-1125g4-14-inches-notebook-laptop-8gb-512gb-ssd-windows-11-spruce-blue-1-52-kg-.jpg ",
        "discountPrice":"58,499 ",
        "discount":"12",
        "actualPrice":"66,418",
        "rating":"5",
        "ratingCount":"2,564",
    },
    {
        "id":"9",
        "title":"Microsoft Surface Pro7+ ",
        "description":" Intel Quad-Core 12.3 Inches Notebook Laptop (8GB/128GB SSD/Windows 11/Platinum/1.66 Kg) ",
        "image":"https://img4.gadgetsnow.com/gd/images/products/additional/large/G349800_View_4/computer-laptop/laptops/microsoft-surface-pro7-tfn-00013-intel-quad-core-12-3-inches-notebook-laptop-8gb-128gb-ssd-windows-11-platinum-1-66-kg-.jpg ",
        "discountPrice":"91,999 ",
        "discount":"5",
        "actualPrice":"93,999",
        "rating":"4",
        "ratingCount":"248",
    },
    {
        "id":"10",
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
        "id":"11",
        "title":"Samsung Galaxy Book2 ",
        "description":" Intel Core I5-1235U (12th Gen) 15.6 Inches Notebook Laptop (8GB/512GB SSD/Windows 11/Graphite/1.81 Kg) ",
        "image":"https://img5.gadgetsnow.com/gd/images/products/additional/large/G364503_View_1/computer-laptop/laptops/samsung-galaxy-book2-np750xed-kc1in-intel-core-i5-1235u-12th-gen-15-6-inches-notebook-laptop-8gb-512gb-ssd-windows-11-graphite-1-81-kg-.jpg ",
        "discountPrice":"61,990 ",
        "discount":"26",
        "actualPrice":"83,990",
        "rating":"5",
        "ratingCount":"28",
    },
    {
        "id":"12",
        "title":" Acer Aspire 7 Gaming Laptop ",
        "description":" NH.QAYSI.001 | 15.6-inch FHD Display | Ryzen 5 5500U Processor | 8GB DDR4 RAM ",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVolFjQ32C8VSmS-DBL6WHtlabe2HqTsa8ug&usqp=CAU",
        "discountPrice":"60,000 ",
        "discount":"32",
        "actualPrice":"80,999",
        "rating":"4",
        "ratingCount":"678",
    },
])
}

const lapcaro=(req,res)=>{
    res.send([
        {
        "id":"1",
        "image":"https://www.reliancedigital.in/akamai/images/products/HP-15-Laptop-493177299-20.jpg"
   }
    ])

}

module.exports={laptop,lapcaro}