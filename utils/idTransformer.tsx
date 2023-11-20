const originalTeams = [
  {
    "id": 1,
    "teamId": 1,
    "teamName": "Galatasaray",
    "shortName": "GS"
  },
  {
    "id": 2,
    "teamId": 454,
    "teamName": "AdanaDemirspor",
    "shortName": "ADS"
  },
  {
    "id": 3,
    "teamId": 619,
    "teamName": "Alanyaspor",
    "shortName": "ALN"
  },
  {
    "id": 4,
    "teamId": 455,
    "teamName": "Antalyaspor",
    "shortName": "ANT"
  },
  {
    "id": 5,
    "teamId": 451,
    "teamName": "Başakşehir",
    "shortName": "BAŞ"
  },
  {
    "id": 6,
    "teamId": 3,
    "teamName": "Beşiktaş",
    "shortName": "BEŞ"
  },
  {
    "id": 7,
    "teamId": 448,
    "teamName": "ÇaykurRizespor",
    "shortName": "ÇRS"
  },
  {
    "id": 8,
    "teamId": 537,
    "teamName": "FatihKaragümrük",
    "shortName": "FK"
  },
  {
    "id": 9,
    "teamId": 2,
    "teamName": "Fenerbahçe",
    "shortName": "FB"
  },
  {
    "id": 10,
    "teamId": 572,
    "teamName": "GaziantepFk",
    "shortName": "GAZ"
  },
  {
    "id": 11,
    "teamId": 574,
    "teamName": "Hatayspor",
    "shortName": "HAT"
  },
  {
    "id": 12,
    "teamId": 11,
    "teamName": "Istanbulspor",
    "shortName": "İST"
  },
  {
    "id": 13,
    "teamId": 656,
    "teamName": "Kasımpaşa",
    "shortName": "KAS"
  },
  {
    "id": 14,
    "teamId": 570,
    "teamName": "Kayserispor",
    "shortName": "KYS"
  },
  {
    "id": 15,
    "teamId": 447,
    "teamName": "Konyaspor",
    "shortName": "KON"
  },
  {
    "id": 16,
    "teamId": 9,
    "teamName": "MkeAnkaragücü",
    "shortName": "ANK"
  },
  {
    "id": 17,
    "teamId": 659,
    "teamName": "Pendikspor",
    "shortName": "PEN"
  },
  {
    "id": 18,
    "teamId": 8,
    "teamName": "Samsunspor",
    "shortName": "SAM"
  },
  {
    "id": 19,
    "teamId": 446,
    "teamName": "Sivasspor",
    "shortName": "SIV"
  },
  {
    "id": 20,
    "teamId": 4,
    "teamName": "Trabzonspor",
    "shortName": "TRA"
  },
  {
    "id": 21,
    "teamId": 605,
    "teamName": "Giresunspor",
    "shortName": "GIR"
  },
  {
    "id": 22,
    "teamId": 9740,
    "teamName": "Ümraniyespor",
    "shortName": "ÜMR"
  },
  {
    "id": 23,
    "teamId": 5,
    "teamName": "Altay",
    "shortName": "ALT"
  },
  {
    "id": 24,
    "teamId": 15,
    "teamName": "Göztepe",
    "shortName": "GÖZ"
  },
  {
    "id": 25,
    "teamId": 7297,
    "teamName": "YeniMalatyaspor",
    "shortName": "YMS"
  },
  {
    "id": 26,
    "teamId": 10,
    "teamName": "Denizlispor",
    "shortName": "DEN"
  },
  {
    "id": 27,
    "teamId": 9632,
    "teamName": "ErzurumsporFk",
    "shortName": "ERZ"
  },
  {
    "id": 28,
    "teamId": 7,
    "teamName": "Gençlerbirliği",
    "shortName": "GB"
  },
  {
    "id": 29,
    "teamId": 631,
    "teamName": "Akhisarspor",
    "shortName": "AKH"
  },
  {
    "id": 30,
    "teamId": 13,
    "teamName": "Bursaspor",
    "shortName": "BUR"
  },
  {
    "id": 31,
    "teamId": 558,
    "teamName": "KardemirKarabükspor",
    "shortName": "KAR"
  },
  {
    "id": 32,
    "teamId": 444,
    "teamName": "Ankaraspor",
    "shortName": "ANKS"
  },
  {
    "id": 33,
    "teamId": 452,
    "teamName": "MersinIdmanyurdu",
    "shortName": "MID"
  },
  {
    "id": 34,
    "teamId": 536,
    "teamName": "Eskişehirspor",
    "shortName": "ESK"
  },
  {
    "id": 35,
    "teamId": 1648,
    "teamName": "Balıkesirspor",
    "shortName": "BAL"
  },
  {
    "id": 36,
    "teamId": 459,
    "teamName": "KayseriErciyesspor",
    "shortName": "KERC"
  },
  {
    "id": 37,
    "teamId": 16,
    "teamName": "Elazığspor",
    "shortName": "ELZ"
  },
  {
    "id": 38,
    "teamId": 562,
    "teamName": "Orduspor",
    "shortName": "ORD"
  },
  {
    "id": 39,
    "teamId": 449,
    "teamName": "Manisaspor",
    "shortName": "MAN"
  },
  {
    "id": 40,
    "teamId": 17,
    "teamName": "Diyarbakırspor",
    "shortName": "DIY"
  },
  {
    "id": 41,
    "teamId": 625,
    "teamName": "HacettepeSpor",
    "shortName": "HAC"
  },
  {
    "id": 42,
    "teamId": 18,
    "teamName": "Kocaelispor",
    "shortName": "KOC"
  },
  {
    "id": 43,
    "teamId": 445,
    "teamName": "AkçaabatSebatspor",
    "shortName": "AKÇ"
  },
  {
    "id": 44,
    "teamId": 14,
    "teamName": "Adanaspor",
    "shortName": "ADS"
  },
  {
    "id": 45,
    "teamId": 450,
    "teamName": "YozgatsporA.ş",
    "shortName": "YOZ"
  },
  {
    "id": 46,
    "teamId": 579,
    "teamName": "Siirtspor",
    "shortName": "SII"
  },
  {
    "id": 47,
    "teamId": 14593,
    "teamName": "Vanspor",
    "shortName": "VAN"
  },
  {
    "id": 48,
    "teamId": 456,
    "teamName": "ÇanakkaleDardanelSk",
    "shortName": "ÇAN"
  },
  {
    "id": 49,
    "teamId": 458,
    "teamName": "Sakaryaspor",
    "shortName": "SAK"
  },
  {
    "id": 50,
    "teamId": 563,
    "teamName": "Sarıyer",
    "shortName": "SAR"
  },
  {
    "id": 51,
    "teamId": 661,
    "teamName": "Zeytinburnuspor",
    "shortName": "ZEY"
  },
  {
    "id": 52,
    "teamId": 541,
    "teamName": "Karşıyaka",
    "shortName": "KAR"
  },
  {
    "id": 53,
    "teamId": 886,
    "teamName": "PetrolOfisi",
    "shortName": "PET"
  },
  {
    "id": 54,
    "teamId": 548,
    "teamName": "Bakırköyspor",
    "shortName": "BAK"
  },
  {
    "id": 55,
    "teamId": 533,
    "teamName": "Aydınspor",
    "shortName": "AYD"
  },
  {
    "id": 56,
    "teamId": 621,
    "teamName": "Boluspor",
    "shortName": "BOL"
  },
  {
    "id": 57,
    "teamId": 1652,
    "teamName": "Kahramanmaraşspor",
    "shortName": "KAH"
  },
  {
    "id": 58,
    "teamId": 566,
    "teamName": "Zonguldakspor",
    "shortName": "ZON"
  }
]

const idTransformer = (id: any) => {
  return originalTeams.filter((data: any) => data.id === id)[0]?.teamId;
}
const shortNameGenerator = (id: any) => {
  return originalTeams.filter((data: any) => data.id === id)[0]?.shortName;
}

export { idTransformer, shortNameGenerator };