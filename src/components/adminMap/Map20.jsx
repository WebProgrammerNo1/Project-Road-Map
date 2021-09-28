import React from "react";
import { YMaps, Map, Polyline } from "react-yandex-maps";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../css/styles.css";

const geometry = () => {
  geometry = [];
};
const mapState = {
  center: [41.31983620420839, 69.28014875411984],
  zoom: 10,
};

let planningRoads = [
  [
    [41.404273789142486, 69.20510696495674],
    [41.51274804881309, 69.44543289269113],
    [41.235518375550186, 69.52920364464427],
  ],
  [
    [41.29938929611029, 69.14663763257302],
    [41.42561384898758, 69.41168279858863],
    [41.215448234217305, 69.410309507573],
    [41.166691865183004, 69.19882269116674],
    [41.3832216440097, 69.13290472241674],
    [41.30353171718548, 69.46936102124488],
  ],
];

class Map20 extends Component {
  state = {
    geometry: Polyline.geometry,
  };

  draw = (ref) => {
    ref.editor.startDrawing();

    ref.editor.events.add("statechange", (event) => {
      planningRoads.push(
        event.originalEvent.target.geometry._coordPath._coordinates
      );
      console.log(event.originalEvent.target.geometry._coordPath._coordinates);
      console.log(planningRoads);
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                Draw lines to the map
                <span className="pull-right clickable panel-toggle panel-button-tab">
                  <em className="fa fa-toggle-up"></em>
                </span>
                <button
                  onClick={geometry}
                  className="pull-right btn btn-danger"
                >
                  Delete Line
                </button>
                <button
                  onClick={() => draw()}
                  className="pull-right btn btn-primary"
                >
                  Draw Line
                </button>
              </div>
              <div className="panel-body">
                <div className="App">
                  {/* Yandex React Maps */}
                  <YMaps>
                    <Map
                      style={{
                        width: "100%",
                        height: "80vh",
                      }}
                      defaultState={mapState}
                      modules={["geoObject.addon.editor"]}
                    >
                      <Polyline
                        instanceRef={(ref) => ref && draw(ref)}
                        geometry={this.setState}
                        modules={["geoObject.addon.editor"]}
                        options={{
                          editorDrawingCursor: "crosshair",
                          // editorMaxPoints: "25",

                          fillColor: "#00FF00",
                          strokeColor: "#0000FF",
                          strokeWidth: 5,
                        }}
                      />
                    </Map>
                  </YMaps>
                  <map />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-map client page map */}

        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">Client Page Map</div>
              <div className="panel-body">
                <div className="App">
                  <YMaps>
                    <Map
                      style={{
                        width: "100%",
                        height: "80vh",
                      }}
                      defaultState={mapState}
                    >
                      {planningRoads.map((arr, idx) => {
                        return (
                          <Polyline
                            key={idx}
                            geometry={arr}
                            options={{
                              fillColor: "#00FF00",
                              strokeColor: "#0000FF",
                              strokeWidth: 5,
                            }}
                          />
                        );
                      })}
                    </Map>
                  </YMaps>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map20;
