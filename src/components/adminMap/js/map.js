var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

let planning = [
  [
    [41.32040238757177, 69.27909288577725],
    [41.32030937207829, 69.2798546331375],
    [41.31967443665858, 69.27975807361297],
    [41.31971083439882, 69.2797848957031],
    [41.31963399470097, 69.2803803461044],
    [41.319787674005376, 69.2804125326126],
    [41.319803850753026, 69.28051445655515],
    [41.319775541441985, 69.28082022838286],
  ],
];

let roading = [
  [
    [41.32030937207829, 69.27984834671015],
    [41.31970274601387, 69.27976251602168],
    [41.31899500841482, 69.27965522766105],
    [41.319027362302535, 69.27968204975123],
    [41.3190111853607, 69.27983761787411],
    [41.31900309688826, 69.28005219459526],
    [41.319007141124594, 69.2802935934066],
    [41.319023318067444, 69.28063155174252],
    [41.31903140653735, 69.28069592475883],
    [41.31909207002942, 69.28073347568507],
    [41.319577375917845, 69.28084076404565],
    [41.31953288969631, 69.28122700214381],
  ],
];

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [41.26, 69.31], // Москва
      zoom: 10,
      constrols: ["mapTools", "zoomControl", "typeSelector"],
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  planning.map((coor, idx) => {
    myMap.setType("yandex#publicMap");
    var properties = { hintContent: `Planning ${idx + 1} road` };
    var options = { draggable: false, strokeColor: "#ff0000", strokeWidth: 3 };
    polyline1 = new ymaps.Polyline(coor, properties, options);
    myMap.geoObjects.add(polyline1);
  });

  roading.map((coor, idx) => {
    myMap.setType("yandex#publicMap");
    var properties = { hintContent: `Roading ${idx + 1} road` };
    var options = { draggable: false, strokeColor: "#00cc00", strokeWidth: 3 };
    polyline2 = new ymaps.Polyline(coor, properties, options);
    myMap.geoObjects.add(polyline2);
  });
}
