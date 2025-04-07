const Product = require("../models/ProductModel");



const smartphones =[];



exports.insertSampleData = async (req, res) => {
  try {


    const result = await Product.insertMany(smartphones);
    res.status(201).json({
      message: `${result.length} products inserted successfully`,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error inserting sample data"
    });
  }
};










const smartphonesDataInserted =[
  {
    "name": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "model": "S24 Ultra",
    "description": "Samsung Galaxy S24 Ultra 512GB: 200MP Camera, S Pen, 6.8\" Dynamic AMOLED 2X Display, 5000mAh Battery",
    "price": 129999,
    "stock": 35,
    "image": "https://m.media-amazon.com/images/I/71RVuBs3q9L._AC_UF1000,1000_QL80_.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 3",
      "ram": "12 GB",
      "storage": "512 GB",
      "battery": "5000 mAh",
      "display": "6.8\" Dynamic AMOLED 2X",
      "camera": "200MP Wide + 12MP Ultra Wide + 10MP Telephoto"
    }
  },
  {
    "name": "Google Pixel 8 Pro",
    "brand": "Google",
    "model": "Pixel 8 Pro",
    "description": "Google Pixel 8 Pro 256GB: Tensor G3, 6.7\" LTPO OLED, 5050mAh, 50MP Triple Camera System",
    "price": 89999,
    "stock": 42,
    "image": "https://www.designinfo.in/wp-content/uploads/2024/03/Google-Pixel-8-Pro-128GB-Porcelain-1.webp",
    "specifications": {
      "processor": "Google Tensor G3",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "5050 mAh",
      "display": "6.7\" LTPO OLED",
      "camera": "50MP Wide + 48MP Ultra Wide + 48MP Telephoto"
    }
  },
  {
    "name": "OnePlus 12",
    "brand": "OnePlus",
    "model": "12",
    "description": "OnePlus 12 256GB: Snapdragon 8 Gen 3, 6.82\" 2K AMOLED, 5400mAh, 50MP Triple Camera",
    "price": 69999,
    "stock": 60,
    "image": "https://m.media-amazon.com/images/I/41OpAzcvdLL._SX300_SY300_QL70_FMwebp_.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 3",
      "ram": "16 GB",
      "storage": "256 GB",
      "battery": "5400 mAh",
      "display": "6.82\" 2K AMOLED",
      "camera": "50MP Sony LYT-808 + 48MP Ultra Wide + 64MP Periscope Telephoto"
    }
  },
  {
    "name": "Xiaomi 14 Pro",
    "brand": "Xiaomi",
    "model": "14 Pro",
    "description": "Xiaomi 14 Pro 512GB: Snapdragon 8 Gen 3, 6.73\" LTPO AMOLED, 4880mAh, Leica Triple Camera",
    "price": 79999,
    "stock": 28,
    "image": "https://i03.appmifile.com/890_item_in/17/03/2025/a5604b65e2865004f68b05ef4fae70dd.png?thumb=1&f=webp&q=85",
    "specifications": {
      "processor": "Snapdragon 8 Gen 3",
      "ram": "12 GB",
      "storage": "512 GB",
      "battery": "4880 mAh",
      "display": "6.73\" LTPO AMOLED",
      "camera": "50MP Leica Light Fusion 900 + 50MP Ultra Wide + 50MP Telephoto"
    }
  },
  {
    "name": "Vivo X100 Pro",
    "brand": "Vivo",
    "model": "X100 Pro",
    "description": "Vivo X100 Pro 512GB: Dimensity 9300, 6.78\" AMOLED, 5400mAh, ZEISS Triple Camera System",
    "price": 84999,
    "stock": 22,
    "image": "https://m.media-amazon.com/images/I/4113f-qkKcL._SX300_SY300_QL70_FMwebp_.jpg",
    "specifications": {
      "processor": "MediaTek Dimensity 9300",
      "ram": "16 GB",
      "storage": "512 GB",
      "battery": "5400 mAh",
      "display": "6.78\" AMOLED",
      "camera": "50MP ZEISS Vario-Tessar + 50MP Ultra Wide + 50MP Telephoto"
    }
  },
  {
    "name": "iPhone 15 Pro",
    "brand": "Apple",
    "model": "15 Pro",
    "description": "iPhone 15 Pro 128GB: A17 Pro chip, 6.1\" Super Retina XDR, Titanium design, 48MP Pro camera",
    "price": 99900,
    "stock": 45,
    "image": "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg",
    "specifications": {
      "processor": "A17 Pro",
      "ram": "8 GB",
      "storage": "128 GB",
      "battery": "3274 mAh",
      "display": "6.1\" Super Retina XDR OLED",
      "camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto"
    }
  },
  {
    "name": "Samsung Galaxy S23 FE",
    "brand": "Samsung",
    "model": "S23 FE",
    "description": "Samsung Galaxy S23 FE 256GB: Exynos 2200, 6.4\" AMOLED, 4500mAh, 50MP Triple Camera",
    "price": 54999,
    "stock": 38,
    "image": "https://m.media-amazon.com/images/I/61CZ+GdpWtL._SL1500_.jpg",
    "specifications": {
      "processor": "Exynos 2200",
      "ram": "8 GB",
      "storage": "256 GB",
      "battery": "4500 mAh",
      "display": "6.4\" AMOLED",
      "camera": "50MP Wide + 12MP Ultra Wide + 8MP Telephoto"
    }
  },
  {
    "name": "OnePlus 11R",
    "brand": "OnePlus",
    "model": "11R",
    "description": "OnePlus 11R 128GB: Snapdragon 8+ Gen 1, 6.7\" Fluid AMOLED, 5000mAh, 50MP Triple Camera",
    "price": 39999,
    "stock": 55,
    "image": "https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg",
    "specifications": {
      "processor": "Snapdragon 8+ Gen 1",
      "ram": "8 GB",
      "storage": "128 GB",
      "battery": "5000 mAh",
      "display": "6.7\" Fluid AMOLED",
      "camera": "50MP Sony IMX890 + 8MP Ultra Wide + 2MP Macro"
    }
  },
  {
    "name": "Google Pixel 7a",
    "brand": "Google",
    "model": "7a",
    "description": "Google Pixel 7a 128GB: Tensor G2, 6.1\" OLED, 4385mAh, 64MP Dual Camera",
    "price": 43999,
    "stock": 30,
    "image": "https://m.media-amazon.com/images/I/71m09hEhnwL._AC_UF894,1000_QL80_.jpg",
    "specifications": {
      "processor": "Tensor G2",
      "ram": "8 GB",
      "storage": "128 GB",
      "battery": "4385 mAh",
      "display": "6.1\" OLED",
      "camera": "64MP Wide + 13MP Ultra Wide"
    }
  },
  {
    "name": "Xiaomi 13 Pro",
    "brand": "Xiaomi",
    "model": "13 Pro",
    "description": "Xiaomi 13 Pro 256GB: Snapdragon 8 Gen 2, 6.73\" AMOLED, 4820mAh, Leica Triple Camera",
    "price": 79999,
    "stock": 25,
    "image": "https://m.media-amazon.com/images/I/61RvCwjI7dL._AC_UF1000,1000_QL80_.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 2",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "4820 mAh",
      "display": "6.73\" AMOLED",
      "camera": "50.3MP Leica + 50MP Ultra Wide + 50MP Telephoto"
    }
  },
  {
    "name": "Vivo V29 Pro 5G",
    "brand": "Vivo",
    "model": "V29 Pro",
    "description": "Vivo V29 Pro 256GB: Dimensity 8200, 6.78\" AMOLED, 4600mAh, 50MP Aura Light Camera",
    "price": 41999,
    "stock": 40,
    "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/5/e/x/v29-5g-v2250-vivo-original-imagtyqfjag4qbdw.jpeg?q=90&crop=false",
    "specifications": {
      "processor": "Dimensity 8200",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "4600 mAh",
      "display": "6.78\" AMOLED",
      "camera": "50MP OIS + 8MP Ultra Wide + 2MP Macro"
    }
  },
  {
    "name": "Realme GT 2 Pro",
    "brand": "Realme",
    "model": "GT 2 Pro",
    "description": "Realme GT 2 Pro 256GB: Snapdragon 8 Gen 1, 6.7\" LTPO AMOLED, 5000mAh, 50MP Dual Camera",
    "price": 49999,
    "stock": 33,
    "image": "https://m.media-amazon.com/images/I/61HBxaaCGvL._AC_UF1000,1000_QL80_.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 1",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "5000 mAh",
      "display": "6.7\" LTPO AMOLED",
      "camera": "50MP Sony IMX766 + 50MP Ultra Wide"
    }
  },
  {
    "name": "Oppo Reno 10 Pro+",
    "brand": "Oppo",
    "model": "Reno 10 Pro+",
    "description": "Oppo Reno 10 Pro+ 256GB: Snapdragon 8+ Gen 1, 6.7\" AMOLED, 4700mAh, 50MP Periscope Camera",
    "price": 52999,
    "stock": 28,
    "image": "https://m.media-amazon.com/images/I/41j9SSfS8zL._AC_UF1000,1000_QL80_.jpg",
    "specifications": {
      "processor": "Snapdragon 8+ Gen 1",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "4700 mAh",
      "display": "6.7\" AMOLED",
      "camera": "50MP IMX890 + 8MP Ultra Wide + 64MP Periscope"
    }
  },
  {
    "name": "Nothing Phone (2a)",
    "brand": "Nothing",
    "model": "Phone (2)",
    "description": "Nothing Phone (2a) 5G (Black, 8GB RAM, 128GB Storage) | 6.7 AMOLED Display | 50MP (OIS) + 50 MP | 32 MP Front | Mediatek Dimensity 7200 Pro Processor | Glyph Interface | 45 W Charging 100% in 59 mins",
    "price": 18794,
    "stock": 50,
    "image": "https://m.media-amazon.com/images/I/81wW3hnaFbL._SL1500_.jpg",
    "specifications": {
      "processor": "Snapdragon 8+ Gen 1",
      "ram": "8 GB",
      "storage": "128 GB",
      "battery": "4700 mAh",
      "display": "6.7 AMOLED",
      "camera": "50MP Dual Camera"
    }
  },
  {
    "name": "Motorola Edge 40 Pro",
    "brand": "Motorola",
    "model": "Edge 40 Pro",
    "description": "Motorola Edge 40 Pro 256GB: Snapdragon 8 Gen 2, 6.67\" pOLED, 4600mAh, 50MP Triple Camera",
    "price": 59999,
    "stock": 20,
    "image": "https://m.media-amazon.com/images/I/71lIActLJgL._SL1500_.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 2",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "4600 mAh",
      "display": "6.67\" pOLED",
      "camera": "50MP OIS + 50MP Ultra Wide + 12MP Telephoto"
    }
  },
  {
    "name": "Asus ROG Phone 7 Ultimate",
    "brand": "Asus",
    "model": "ROG Phone 7 Ultimate",
    "description": "Asus ROG Phone 7 Ultimate 512GB: Snapdragon 8 Gen 2, 6.78\" AMOLED, 6000mAh, Gaming Phone",
    "price": 89999,
    "stock": 15,
    "image": "https://28mobile.com/cdn/shop/products/rog-phone-7-ultimate_grande@2x.jpg?v=1682165739",
    "specifications": {
      "processor": "Snapdragon 8 Gen 2",
      "ram": "16 GB",
      "storage": "512 GB",
      "battery": "6000 mAh",
      "display": "6.78\" AMOLED",
      "camera": "50MP Sony IMX766 + 13MP Ultra Wide + 5MP Macro"
    }
  },
  {
    "name": "iQOO 11 5G",
    "brand": "iQOO",
    "model": "11 5G",
    "description": "iQOO 11 5G 256GB: Snapdragon 8 Gen 2, 6.78\" AMOLED, 5000mAh, 50MP GN5 Camera",
    "price": 59999,
    "stock": 18,
    "image": "https://m.media-amazon.com/images/I/71ZeuCAbcSL.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 2",
      "ram": "16 GB",
      "storage": "256 GB",
      "battery": "5000 mAh",
      "display": "6.78\" AMOLED",
      "camera": "50MP GN5 + 13MP Ultra Wide + 8MP Macro"
    }
  },
  {
    "name": "Honor Magic 5 Pro",
    "brand": "Honor",
    "model": "Magic 5 Pro",
    "description": "Honor Magic 5 Pro 512GB: Snapdragon 8 Gen 2, 6.81\" OLED, 5100mAh, Triple 50MP Camera",
    "price": 79999,
    "stock": 22,
    "image": "https://m.media-amazon.com/images/I/71xR3cNY0OL.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 2",
      "ram": "12 GB",
      "storage": "512 GB",
      "battery": "5100 mAh",
      "display": "6.81\" OLED",
      "camera": "50MP Wide + 50MP Ultra Wide + 50MP Periscope"
    }
  },
  {
    "name": "Redmi K60 Pro",
    "brand": "Redmi",
    "model": "K60 Pro",
    "description": "Redmi K60 Pro 256GB: Snapdragon 8 Gen 2, 6.67\" 2K AMOLED, 5000mAh, 50MP Triple Camera",
    "price": 45999,
    "stock": 35,
    "image": "https://s.alicdn.com/@sc04/kf/H462fb909698b4ac084bd9bae9a238e89X.jpg_720x720q50.jpg",
    "specifications": {
      "processor": "Snapdragon 8 Gen 2",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "5000 mAh",
      "display": "6.67\" 2K AMOLED",
      "camera": "50MP Sony IMX800 + 8MP Ultra Wide + 2MP Macro"
    }
  },
  {
    "name": "Poco F5 Pro",
    "brand": "Poco",
    "model": "F5 Pro",
    "description": "Poco F5 Pro 256GB: Snapdragon 8+ Gen 1, 6.67\" AMOLED, 5160mAh, 64MP OIS Camera",
    "price": 36999,
    "stock": 40,
    "image": "https://m.media-amazon.com/images/I/61noK2U3H5L.jpg",
    "specifications": {
      "processor": "Snapdragon 8+ Gen 1",
      "ram": "12 GB",
      "storage": "256 GB",
      "battery": "5160 mAh",
      "display": "6.67\" AMOLED",
      "camera": "64MP OIS + 8MP Ultra Wide + 2MP Macro"
    }
  }
]
