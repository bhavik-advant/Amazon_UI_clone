// run this code in amazon.in website console first and get the links

// const urls = [...document.querySelectorAll('img')]
//   .map(img => img.src)
//   .filter(Boolean);

// console.log(urls);

import https from "https";
import fs from "fs";
import path from "path";

const links = [
    "https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB546381437_.png",
    "https://m.media-amazon.com/images/I/31yheAotKHL.png",
    "https://m.media-amazon.com/images/I/81MtJerJTqL.png",
    "https://m.media-amazon.com/images/G/31/Events/img25/Nimesh/JAN26_PC_SWM_Live-Now_2X1._CB773526758_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fresh/JanART26/GW/Event/19thJan/19th_GW_PC1x_Hero_FC_RC._CB773775596_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jan26ART/JAN26_H1_Static_PC_Live-Now_2x._CB773332007_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img26/Beauty/GW/JanART/873._CB773470355_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/JanART26/GW/Desktop/3000X1200._CB773547410_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG26/Smartwearables/Noise_firebolt__D1._CB773352450_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2026/Pets/JAN/ART/new/Pets_Category-Hero_Lifestyle-PC_3000x1200._CB773430441_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/JanART26BX/6_3x._CB773353192_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/WLA/18/GW/D374469778_IN_WLA_Janart26-GW_PC_3000x1200_1._CB773454086_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_1._SY116_CB773082139_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_2._SY116_CB773082139_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_3._SY116_CB773082139_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/debaishx/MSOJanArt/D375129058_IN_WLD_MSO_Janart_2026_PC_QC_186x116_4._SY116_CB773082139_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/headphones/Janart/mso/PC_CC_379x3080.5x._SY304_CB773159703_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/1._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/2._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/3._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/4._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/WD/JanART26/14th/New/PC_CC_758x608-1X._SY304_CB773132748_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/AC/PC_QC_372x232_02_1x._SY116_CB773141705_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/AC/PC_QC_372x232_01_1x._SY116_CB773141705_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/CH/PC_QC_372x232_03_1x._SY116_CB773142816_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/AC/PC_QC_372x232_04_1x._SY116_CB773141705_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0G44MLJDB_TCL_55_PC_QC_186x116._SY116_CB773513560_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0F43DQN7H_Samsung_55_PC_QC_186x116._SY116_CB773513560_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0D3DW1CJF_Sony_55_PC_QC_186x116._SY116_CB773513560_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVsmovie2/B0D3XD9M5D_Toshiba_43_PC_QC_186x116_2._SY116_CB773496446_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/Cons/HPC/Janart2026/Ay/PC_QC_186x116_04._SY116_CB773336816_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/Cons/HPC/Janart2026/Ay/PC_QC_186x116_03._SY116_CB773336816_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/Cons/HPC/Janart2026/Ay/PC_QC_186x116_02._SY116_CB773336816_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/Cons/HPC/Janart2026/Ay/PC_QC_186x116_01._SY116_CB773336816_.jpg",
    "https://m.media-amazon.com/images/I/71QZkNYUzyL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/717WiuxL2XL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61znVoIonUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71vXhM3XFkL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71ixTSHchSL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/710tvt+6i2L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51XmdFr6eyL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61QAB-dFv6L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71oYHVHSEPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51zwOre8-zL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61Kwhu85OML._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/813o99W+iKL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71uTocyPlVL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81ZwmefsZmL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51UYPTXkUhL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71gw2oWnStS._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81lmklN04AL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51XW9zifXhL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71EwM691FXL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81Rql2DCvfS._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61bfXEIxwtL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81rkilmMAML._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/617NApD-SoL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71zgyrMjJ7L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41y8H3QmVqL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71aaXV4+07L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81lErh+IhdL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81yZKcTfKOL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41fvvEY10LL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81p1nkYo4NL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71S9UgCDGJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71+oHMoJ8cL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/817HaeblezL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71XEsXS5RlL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71Q2fXtMhaL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81n3dJZ5TUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81+aYQwVanL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61c72pkbTNL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71UJZncWSpL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61xivWmExiL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61+kZfOd40L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/710cYy40DUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51fTNsNDdOL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81vRhp8eWhL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71CZtlZ19QL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/719l7OCtzTL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81FShHXy+xL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/712bIHFJvmL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71DortY2MXL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/715qi-cIbML._AC_SY200_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/Images/379X304CC_ASIN._SY304_CB773342341_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG2026/SMB/JANART/NAM_Desktop_QC_Kitchen_V2_1x._SY116_CB773613059_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG2026/SMB/JANART/NAM_Desktop_QC_Ethnic_Wear_V2_1x._SY116_CB773613059_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG2026/SMB/JANART/NAM_Desktop_QC_Home_Decor_V2_1x._SY116_CB773613059_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG2026/SMB/JANART/NAM_Desktop_QC_Cushion_V2_1x._SY116_CB773613059_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/PCQCToys/toys/5/4_PC_QC_186x116._SY116_CB773544482_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/PCQCToys/toys/5/15._SY116_CB773544482_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/PCQCToys/toys/5/1_PC_QC_186x116._SY116_CB773544482_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/PCQCToys/toys/5/16._SY116_CB773544482_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/5._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/6._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/7._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Jup25/Central/qcpclow/8._SY116_CB773342995_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_01._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_02._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_03._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_04._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_05._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_06._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_07._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_08._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_09._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_10._CB773115354_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Mounika/Jan14/Shoveler_200x200_11._CB773115354_.jpg"
]

const outputDir = "./images";

// Create folder if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

links.forEach((url, index) => {
  const ext = path.extname(url.split("?")[0]) || ".jpg";
  const fileName = path.join(outputDir, `image_${index}${ext}`);

  https.get(url, res => {
    const file = fs.createWriteStream(fileName);
    res.pipe(file);
    console.log("Downloaded:", fileName);
  });
});
