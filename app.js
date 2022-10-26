var express = require('express');
var path = require('path');
var hbs=require('hbs');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.get('/', function(req, res, next){
    let products=[
        {
          name:"hp",
          category:"laptop",
          description:"HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graph",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N0qZir5JUsIRpewYINTnubJLsEnZBAh2LA&usqp=CAU"
        },
        {
          name:"Toshiba",
          category:"laptop",
          description:"Toshiba NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graph",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjfLX5drTYwCwyWgfZozI8YCs7jtp5UR3Fw&usqp=CAU"
        },
        {
          name:"Asus",
          category:"laptop",
          description:"Asus NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graph",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hKCnUtnxYmXQdiQ_JdibWgPAZtX0mpk68Q&usqp=CAU"
        },
        {
          name:"Acer",
          category:"laptop",
          description:"Acer NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graph",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIweUHT3bLjlttoY3RORnDqWg0zZWDqlUow&usqp=CAU"
        }
      ]

  
     
      res.render('index1', { products});
      
} );

app.get('/index2', function(req, res, next){
    let phones=[
        {
          name:"iPhone 13 Pro Max",
          category:"mobile",
          description:"Dimensions 160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in) Weight 240 g (8.47 oz) Build Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame SIM Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by) IP68 dust/water resistant (up to 6m for 30 mins) Apple Pay (Visa, MasterCard, AMEX certified) Type Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak) Size 6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio) Resolution 1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density) Protection Ceramic Shield glass",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaR5Au9UXd9C3MR9cVOhJDFk0xLUgbLiauA&usqp=CAU"
        },
        {
          name:"Redmi note 10 pro",
          category:"Mobile",
          description:"	Dimensions 164 x 76.5 x 8.1 mm (6.46 x 3.01 x 0.32 in) Weight 193 g (6.81 oz) Build Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), plastic frame SIM Dual SIM (Nano-SIM, dual stand-by) IP53, dust and splash resistant OS Android 11, upgradable to Android 12, MIUI 13 Chipset Qualcomm SM7150 Snapdragon 732G (8 nm) CPU Octa-core (2x2.3 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver) GPU Adreno 618",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYcDiffCQB0KN5dt3bcbmX0OKKveG0X5hRQ&usqp=CAU"
        },
        {
          name:"OPPO F15",
          category:"Mobile",
          description:"	Dimensions 160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in) Weight 172 g (6.07 oz) Build Glass front (Gorilla Glass 5), plastic back, plastic frame SIM Dual SIM (Nano-SIM, dual stand-by) OS Android 9.0 (Pie), upgradable to Android 11, ColorOS 11.1 Chipset Mediatek MT6771V Helio P70 (12nm) CPU Octa-core (4x2.1 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53) GPU Mali-G72 MP3",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJPmBpMcw2J8EG9QI92M6Pv4K9-knPqz46w&usqp=CAU"
        },
        {
          name:"One Plus 9",
          category:"Mobile",
          description:"Dimensions 160 x 74.2 x 8.7 mm (EU/NA) 160 x 73.9 x 8.1 mm (IN/CN) Weight 192 g (EU/NA) 183 g (IN/CN) (6.46 oz) Build Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), plastic frame SIM Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) IP68 (T-Mobile version only) OS Android 11, upgradable to Android 12, OxygenOS 12 Chipset Qualcomm SM8350 Snapdragon 888 5G (5 nm) CPU Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55) GPU Adreno 660",
          image:"data:image/jpeg;base64,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"
        }
      ]
     
      res.render('index2', { phones});
})
app.get('/index3', function(req, res, next){
    let names=[
        {
            name:'MUHAMMED IQBAL K'
        },
        {
            name:'BUSHRA P'
        },
        {
            name:'SUHAIL K'
        },
        {
            name:'MUHAMMED SUHAIB K'
        },
        {
            name:'MUHAMMED SHAFI K'
        },
        {
            name:'MUHAMMED SHIBIL K'
        }
    ]
    res.render('index3', { names});
})

module.exports = app;
app.listen(7000)