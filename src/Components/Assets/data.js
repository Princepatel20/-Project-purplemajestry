import p1_img from './1192.jpg'
import p2_img from './1113.jpg'
import p3_img from './1164.jpg'
import p4_img from './1162.jpg'
import p5_img from './1116.jpg'
import p6_img from './1147.jpg'
import p7_img from './1165.jpg'
import p8_img from './1146.jpg'
import p9_img from './1114.jpg'
import p10_img from './1161.jpg'
import p11_img from './1193.jpg'
import p12_img from './1170.jpg'
import p13_img from './1107.jpg'
import p14_img from './1089.jpg'
import p15_img from './1047.jpg'
import p16_img from './1121.jpg'
import p17_img from './1185.jpg'
import p18_img from './1200.jpg'
import p19_img from './1178.jpg'
import p20_img from './1129.jpg'
import p21_img from './1065.jpg'
import p22_img from './1197.jpg'
import p23_img from './1066.jpg'
import p24_img from './1064.jpg'
import p25_img from './1204.jpg'



let data_product = [
    {
        id:1,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p1_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:2,
        name:"WOMEN MAROON ORIGINAL BATIK...",
        image:p2_img,
        new_price:1349,
        old_price:2999,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    }, // Added comma here
    {
        id:3,
        name:"WOMEN MAGENTA HANDWORK...",
        image:p3_img,
        new_price:1399,
        old_price:5099,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    }, // Added comma here
    {
        id:4,
        name:"WOMEN PINK HANDWORK...",
        image:p4_img,
        new_price:1399,
        old_price:3099,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    }, // No comma needed after the last item
    {
        id:5,
        name:"WOMEN TEAL ORIGINAL BATIK...",
        image:p5_img,
        new_price:1349,
        old_price:2999,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:6,
        name:"WOMEN TEAL ETHNIC MOTIFS...",
        image:p6_img,
        new_price:1249,
        old_price:2799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:7,
        name:"WOMEN MULTI COLOR HAND...",
        image:p7_img,
        new_price:1399,
        old_price:3099,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:8,
        name:"WOMEN PINK ETHNIC MOTIFS EM...",
        image:p8_img,
        new_price:1249,
        old_price:2799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:9,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p9_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:10,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p10_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:11,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p11_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:12,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p12_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:13,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p13_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:14,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p14_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:15,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p15_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:16,
        name:"WOMEN MULTI COLOUR PRINTED...",
        image:p16_img,
        new_price:1249,
        old_price:2799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:17,
        name:"WOMEN BURGUNDY PRINTED MAL...",
        image:p17_img,
        new_price:1049,
        old_price:2349,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:18,
        name:"MULTI COLOUR PRINTED CO-ORDS...",
        image:p18_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:19,
        name:"WOMEN BURGUNDY PRINTED GEORGE...",
        image:p19_img,
        new_price:999,
        old_price:2199,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:20,
        name:"WOMEN PURPLE WEAVE BUTTI...",
        image:p20_img,
        new_price:1999,
        old_price:2649,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:21,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p21_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:22,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p22_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:23,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p23_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:24,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p24_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
    {
        id:25,
        name:"WOMEN MULTI COLOR KURTA...",
        image:p25_img,
        new_price:799,
        old_price:1799,
        discount: ('old_price'-'new_price')/'old_price'*100+"%",
    },
];

export default data_product;
