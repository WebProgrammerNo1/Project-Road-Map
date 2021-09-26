// import Planning from "./map";
// import { addToPlanning } from "./map.js";

var polyline;

ymaps.ready(init);

function init() {
  $("#color_pline").simpleColor();

  var myMap = new ymaps.Map("map", {
    center: [41.31983620420839, 69.28014875411984],
    zoom: 11,
  });

  //Добавляем элементы управления
  myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");

  // Обработка нажатия на кнопку Добавить
  $("#addPolyline").click(function () {
    $("#stopEditPolyline").attr("disabled", false);

    var widthpl = $("#width_line").attr("value");
    var colorpl = $("#color_pline").attr("value");
    var transparencypl = $("#transparency_pline").attr("value");

    polyline = new ymaps.Polyline(
      [],
      {},
      {
        strokeColor: colorpl,
        strokeOpacity: transparencypl,
        strokeWidth: 5,
      }
    );

    myMap.geoObjects.add(polyline);
    polyline.editor.startEditing();
    polyline.editor.startDrawing();

    $("#addPolyline").attr("disabled", true);
  });

  // Обработка нажатия на кнопку Завершить редактирование
  $("#stopEditPolyline").click(function () {
    polyline.editor.stopEditing();
    printGeometry(polyline.geometry.getCoordinates());
    $("#stopEditPolyline").attr("disabled", true);
  });

  // Обработка нажатия на кнопку Удалить
  $("#dellPolyline").click(function () {
    myMap.geoObjects.remove(polyline);
    $("#geometry").html("");
    $("#addPolyline").attr("disabled", false);
  });

  (ListBoxLayout = ymaps.templateLayoutFactory.createClass(
    "<button id='my-listbox-header' class='btn btn-success dropdown-toggle' data-toggle='dropdown'>" +
      "{{data.title}} <span class='caret'></span>" +
      "</button>" +
      // Этот элемент будет служить контейнером для элементов списка.
      // В зависимости от того, свернут или развернут список, этот контейнер будет
      // скрываться или показываться вместе с дочерними элементами.
      "<ul id='my-listbox'" +
      " class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu'" +
      " style='display: {% if state.expanded %}block{% else %}none{% endif %};'></ul>",
    {
      build: function () {
        // Вызываем метод build родительского класса перед выполнением
        // дополнительных действий.
        ListBoxLayout.superclass.build.call(this);

        this.childContainerElement = $("#my-listbox").get(0);
        // Генерируем специальное событие, оповещающее элемент управления
        // о смене контейнера дочерних элементов.
        this.events.fire("childcontainerchange", {
          newChildContainerElement: this.childContainerElement,
          oldChildContainerElement: null,
        });
      },

      // Переопределяем интерфейсный метод, возвращающий ссылку на
      // контейнер дочерних элементов.
      getChildContainerElement: function () {
        return this.childContainerElement;
      },

      clear: function () {
        // Заставим элемент управления перед очисткой макета
        // откреплять дочерние элементы от родительского.
        // Это защитит нас от неожиданных ошибок,
        // связанных с уничтожением dom-элементов в ранних версиях ie.
        this.events.fire("childcontainerchange", {
          newChildContainerElement: null,
          oldChildContainerElement: this.childContainerElement,
        });
        this.childContainerElement = null;
        // Вызываем метод clear родительского класса после выполнения
        // дополнительных действий.
        ListBoxLayout.superclass.clear.call(this);
      },
    }
  )),
    // Также создадим макет для отдельного элемента списка.
    (ListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
      "<li><a>{{data.content}}</a></li>"
    )),
    // Создадим 2 пункта выпадающего списка
    (listBoxItems = [
      new ymaps.control.ListBoxItem({
        data: {
          content: "Toshkent Shahri",
          center: [41.31983620420839, 69.28014875411984],
          zoom: 11,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Toshkent Viloyati",
          center: [41.131266883856625, 69.70645716924118],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Namangan Viloyati",
          center: [40.99747, 71.595089],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Andijon Viloyati",
          center: [40.7529488589, 72.3576061949],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Farg'ona Viloyati",
          center: [40.3872, 71.7773],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Sirdaryo Viloyati",
          center: [40.37845294945853, 68.71101742034911],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Jizzax Viloyati",
          center: [40.12164206613029, 67.82817840050402],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Samarqand Viloyati",
          center: [39.65744912680644, 66.96475399261473],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Qashqadaryo Viloyati",
          center: [38.839603, 65.79421],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Surxondaryo Viloyati",
          center: [37.95335982705224, 67.47653260957244],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Buxoro Viloyati",
          center: [39.779497614069186, 64.42432485198975],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Navoiy Viloyati",
          center: [40.112646159556185, 65.37501044846753],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Xorazm Viloyati",
          center: [41.439017677055475, 60.61852176877938],
          zoom: 10,
        },
      }),
      new ymaps.control.ListBoxItem({
        data: {
          content: "Qoraqalpog'iston Respublikasi",
          center: [43.634536278598965, 58.980222023755594],
          zoom: 10,
        },
      }),
    ]),
    // Теперь создадим список, содержащий 2 пункта.
    (listBox = new ymaps.control.ListBox({
      items: listBoxItems,
      data: {
        title: "Shaharni tanlang",
      },
      options: {
        // С помощью опций можно задать как макет непосредственно для списка,
        layout: ListBoxLayout,
        // так и макет для дочерних элементов списка. Для задания опций дочерних
        // элементов через родительский элемент необходимо добавлять префикс
        // 'item' к названиям опций.
        itemLayout: ListBoxItemLayout,
      },
    }));

  listBox.events.add("click", function (e) {
    // Получаем ссылку на объект, по которому кликнули.
    // События элементов списка пропагируются
    // и их можно слушать на родительском элементе.
    var item = e.get("target");
    // Клик на заголовке выпадающего списка обрабатывать не надо.
    if (item != listBox) {
      myMap.setCenter(item.data.get("center"), item.data.get("zoom"));
    }
  });

  myMap.controls.add(listBox, { float: "left" });
}

function printGeometry(coords) {
  console.log(coords);
}
