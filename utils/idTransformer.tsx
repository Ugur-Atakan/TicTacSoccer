const originalTeams = [
  {
    "id": 1,
    "teamId": 1,
    "teamName": "Galatasaray"
  },
  {
    "id": 2,
    "teamId": 454,
    "teamName": "AdanaDemirspor"
  },
  {
    "id": 3,
    "teamId": 619,
    "teamName": "Alanyaspor"
  },
  {
    "id": 4,
    "teamId": 455,
    "teamName": "Antalyaspor"
  },
  {
    "id": 5,
    "teamId": 451,
    "teamName": "Başakşehir"
  },
  {
    "id": 6,
    "teamId": 3,
    "teamName": "Beşiktaş"
  },
  {
    "id": 7,
    "teamId": 448,
    "teamName": "ÇaykurRizespor"
  },
  {
    "id": 8,
    "teamId": 537,
    "teamName": "FatihKaragümrük"
  },
  {
    "id": 9,
    "teamId": 2,
    "teamName": "Fenerbahçe"
  },
  {
    "id": 10,
    "teamId": 572,
    "teamName": "GaziantepFk"
  },
  {
    "id": 11,
    "teamId": 574,
    "teamName": "Hatayspor"
  },
  {
    "id": 12,
    "teamId": 11,
    "teamName": "Istanbulspor"
  },
  {
    "id": 13,
    "teamId": 656,
    "teamName": "Kasımpaşa"
  },
  {
    "id": 14,
    "teamId": 570,
    "teamName": "Kayserispor"
  },
  {
    "id": 15,
    "teamId": 447,
    "teamName": "Konyaspor"
  },
  {
    "id": 16,
    "teamId": 9,
    "teamName": "MkeAnkaragücü"
  },
  {
    "id": 17,
    "teamId": 659,
    "teamName": "Pendikspor"
  },
  {
    "id": 18,
    "teamId": 8,
    "teamName": "Samsunspor"
  },
  {
    "id": 19,
    "teamId": 446,
    "teamName": "Sivasspor"
  },
  {
    "id": 20,
    "teamId": 4,
    "teamName": "Trabzonspor"
  },
  {
    "id": 21,
    "teamId": 605,
    "teamName": "Giresunspor"
  },
  {
    "id": 22,
    "teamId": 9740,
    "teamName": "Ümraniyespor"
  },
  {
    "id": 23,
    "teamId": 5,
    "teamName": "Altay"
  },
  {
    "id": 24,
    "teamId": 15,
    "teamName": "Göztepe"
  },
  {
    "id": 25,
    "teamId": 7297,
    "teamName": "YeniMalatyaspor"
  },
  {
    "id": 26,
    "teamId": 10,
    "teamName": "Denizlispor"
  },
  {
    "id": 27,
    "teamId": 9632,
    "teamName": "ErzurumsporFk"
  },
  {
    "id": 28,
    "teamId": 7,
    "teamName": "Gençlerbirliği"
  },
  {
    "id": 29,
    "teamId": 631,
    "teamName": "Akhisarspor"
  },
  {
    "id": 30,
    "teamId": 13,
    "teamName": "Bursaspor"
  },
  {
    "id": 31,
    "teamId": 558,
    "teamName": "KardemirKarabükspor"
  },
  {
    "id": 32,
    "teamId": 444,
    "teamName": "Ankaraspor"
  },
  {
    "id": 33,
    "teamId": 452,
    "teamName": "MersinIdmanyurdu"
  },
  {
    "id": 34,
    "teamId": 536,
    "teamName": "Eskişehirspor"
  },
  {
    "id": 35,
    "teamId": 1648,
    "teamName": "Balıkesirspor"
  },
  {
    "id": 36,
    "teamId": 459,
    "teamName": "KayseriErciyesspor"
  },
  {
    "id": 37,
    "teamId": 16,
    "teamName": "Elazığspor"
  },
  {
    "id": 38,
    "teamId": 562,
    "teamName": "Orduspor"
  },
  {
    "id": 39,
    "teamId": 449,
    "teamName": "Manisaspor"
  },
  {
    "id": 40,
    "teamId": 17,
    "teamName": "Diyarbakırspor"
  },
  {
    "id": 41,
    "teamId": 625,
    "teamName": "HacettepeSpor"
  },
  {
    "id": 42,
    "teamId": 18,
    "teamName": "Kocaelispor"
  },
  {
    "id": 43,
    "teamId": 445,
    "teamName": "AkçaabatSebatspor"
  },
  {
    "id": 44,
    "teamId": 14,
    "teamName": "Adanaspor"
  },
  {
    "id": 45,
    "teamId": 450,
    "teamName": "YozgatsporA.ş"
  },
  {
    "id": 46,
    "teamId": 579,
    "teamName": "Siirtspor"
  },
  {
    "id": 47,
    "teamId": 14593,
    "teamName": "Vanspor"
  },
  {
    "id": 48,
    "teamId": 456,
    "teamName": "ÇanakkaleDardanelSk"
  },
  {
    "id": 49,
    "teamId": 458,
    "teamName": "Sakaryaspor"
  },
  {
    "id": 50,
    "teamId": 563,
    "teamName": "Sarıyer"
  },
  {
    "id": 51,
    "teamId": 661,
    "teamName": "Zeytinburnuspor"
  },
  {
    "id": 52,
    "teamId": 541,
    "teamName": "Karşıyaka"
  },
  {
    "id": 53,
    "teamId": 886,
    "teamName": "PetrolOfisi"
  },
  {
    "id": 54,
    "teamId": 548,
    "teamName": "Bakırköyspor"
  },
  {
    "id": 55,
    "teamId": 533,
    "teamName": "Aydınspor"
  },
  {
    "id": 56,
    "teamId": 621,
    "teamName": "Boluspor"
  },
  {
    "id": 57,
    "teamId": 1652,
    "teamName": "Kahramanmaraşspor"
  },
  {
    "id": 58,
    "teamId": 566,
    "teamName": "Zonguldakspor"
  }
];


const idTransformer = (id:any)=>{
  return originalTeams.filter((data:any)=>data['id']===id)[0].teamId
}

export {idTransformer};