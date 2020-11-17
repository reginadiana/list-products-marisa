const products = [
  {
    category: "Blusas",
    price: "R$ 49,99",
    stocked: true,
    name: "Suéter Feminino Tricô Capuz Pompom",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h5b/h8d/11377272061982/Sueter-Feminino-Trico-Capuz-Pompom-Marisa-10040491325-C1.jpg",
  },
  {
    category: "Blusas",
    price: "R$ 9,99",
    stocked: true,
    name: "Suéter Feminino Tricô Pelúcia Manga",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h78/hf6/11314357239838/SWEATER-CANELADO-GOLA-ALTA-04156-VME-P-10037849795-C1.jpg",
  },
  {
    category: "Camisetas",
    price: "R$ 29,99",
    stocked: true,
    name: "Camisa Cropped Feminina Listrada Manga",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h7a/h7e/12272667295774/CAMISA-MC-COM-NO-OFW-38-10040534459-C1.jpg",
  },
  {
    category: "Camisetas",
    price: "R$ 99,99",
    stocked: true,
    name: "Camisa Feminina Camuflada Manga Longa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h76/h4d/11589257429022/CAMISA-CAMUFLADA-Mul-P-10040506449-C1.jpg",
  },
  {
    category: "Sapatos",
    price: "R$ 399,99",
    stocked: true,
    name: "Tênis Feminino Slip On Flatform Moleca",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h69/h49/12273388847134/TENIS-MOL-5658119-FLATFORM-NUDE-ROS-38-10045031014-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Vestido Feminino Jeans Alças Finas Biotipo ",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h6a/h9b/12271791636510/VIRT-VEST-FEM-AZL-BIOT-25918-AZL-38-10043748181-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Feminina Manga Longa Marisa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h70/heb/11443513589790/TOP-ML-COM-APLIQUES-OFW-P-10041422199-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Feminina Ilhós Manga Longa Marisa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h8e/hc6/11612009431070/VIRT-BLUSA-FEM-MARINHO-MARI-8937-AZM-P-10042508809-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Feminina Tachas Manga Longa Marisa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h4f/h6a/11597675692062/Blusa-Feminina-Tachas-Manga-Longa-Marisa-10041436707-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Cropped Feminina Canelada Zíper Marisa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h63/h87/12280515854366/BLUSA-SM-ZIPER-PTO-P-10042139614-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Feminina Estampa Caveira Tachas Marisa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/hde/hf1/11438741913630/BLUSA-MC-CAVEIRA-TACHAS-PTO-P-10040545318-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Feminina Fivelas Alças Finas Marisa",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h85/h3a/12264271478814/BL-SM-PLANO-LISA-COM-ARGOLA-VDE-38-10041735404-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Ciganinha Feminina Lastex Manga Curta",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h7c/h03/12284906078238/Blusa-Feminina-Ciganinha-Lastex-Manga-Curta-10043677818-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Plus Size Ciganinha Feminina Listrada",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h26/h31/12223070175262/CIGANINHA-LISTRA-PRATA-BRILHO-OFW-48-10043772025-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: false,
    name: "Blusa Feminina Estampa Mickey Manga Curta",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h91/h7c/11637039955998/BLUSA-MC-MICKEY-ESTOURADO-PTO-P-10040484181-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: false,
    name: "Blusa Plus Size Feminina Estampa Frontal",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/hfe/h9c/12284913647646/Blusa-Plus-Size-Feminina-Estampa-Frontal-Manga-Curta-10043744619-C1.jpg",
  },
  {
    category: "Vestidos",
    price: "R$ 199,99",
    stocked: true,
    name: "Blusa Feminina Linho Alças Finas ",
    img:
      "https://images2.marisa.com.br/medias/sys_master/images/images/h63/h0f/12266656989214/Blusa-Feminina-Linho-Alcas-Finas-Danyblu-10043521050-C1.jpg",
  },
];

export default products;
