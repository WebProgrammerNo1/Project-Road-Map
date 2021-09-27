import React, { Component } from "react";

import { YMaps, Map, Placemark, GeolocationControl } from "react-yandex-maps";

// const Map20 = () => (
{
  /* <YMaps>
  <Map
    defaultState={{
      center: [41.31983620420839, 69.28014875411984],
      zoom: 10,
      controls: ["zoomControl", "fullscreenControl"],
    }}
    modules={["control.ZoomControl", "control.FullscreenControl"]}
  >
    {/* <Placemark defaultGeometry={[55.75, 37.57]} /> */
}
// </Map>
// </YMaps> */}

// Example 2.0

// <YMaps>
//   <Map
//     defaultState={{
//       center: [55.75, 37.57],
//       zoom: 9,
//       controls: ["zoomControl", "fullscreenControl"],
//     }}
//     modules={["control.ZoomControl", "control.FullscreenControl"]}
//   >
//     <Placemark
//       modules={["geoObject.addon.balloon"]}
//       defaultGeometry={[55.75, 37.57]}
//       properties={{
//         balloonContentBody:
//           "This is balloon loaded by the Yandex.Maps API module system",
//       }}
//     />
//   </Map>
// </YMaps>

// Example 2.5

// <YMaps
//   query={{
//     ns: "use-load-option",
//     load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
//   }}
// >
//   <Map
//     defaultState={{
//       center: [55.75, 37.57],
//       zoom: 9,
//       controls: ["zoomControl", "fullscreenControl"],
//     }}
//   >
//     <Placemark
//       defaultGeometry={[55.75, 37.57]}
//       properties={{
//         balloonContentBody:
//           "This is balloon loaded by the Yandex.Maps API module system",
//       }}
//     />
//   </Map>
// </YMaps>

// );

// export default Map20;

const Map20 = () => {
  const [zoom, setZoom] = React.useState(9);
  const mapState = React.useMemo(
    () => ({ center: [55.75, 37.57], zoom }),
    [zoom]
  );

  return (
    // <YMaps>
    //   <>
    //     <table>
    //       <tbody>
    //         <tr>
    //           <th>Controlled Map</th>
    //           <th>Uncontrolled Map</th>
    //         </tr>
    //         <tr>
    //           <td>
    //             <Map state={mapState} />
    //           </td>
    //           <td>
    //             <Map defaultState={mapState} />
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <p>
    //       <button onClick={() => setZoom((zoom) => (zoom === 9 ? 12 : 9))}>
    //         Toggle map zoom
    //       </button>
    //     </p>
    //   </>
    // </YMaps>

    <YMaps
      query={{
        ns: "use-load-option",
        load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
      }}
    >
      <Map
        defaultState={{
          center: [41.31983620420839, 69.28014875411984],
          zoom: 11,
          controls: ["zoomControl", "fullscreenControl"],
          style: ["width: 100%", "height: 80vh"],
        }}
        style={{
          width: "100%",
          height: "80vh",
        }}
      >
        <Placemark
          defaultGeometry={[55.75, 37.57]}
          properties={{
            balloonContentBody: "Akbar Kebab",
          }}
        />

        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  );
};

export default Map20;
