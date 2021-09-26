import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../css/styles.css";

class Roads extends Component {
  render() {
    return (
      <>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <em className="fa fa-home"></em>
                </a>
              </li>
              <li className="active">Constructor Maps</li>
            </ol>
          </div>
          {/* <!--/.row--> */}

          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Roads</h1>
            </div>
          </div>
          {/* <!--/.row--> */}

          <div className="panel panel-container">
            <div className="row">
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-teal panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-shopping-cart color-blue"></em>
                    <div className="large">6</div>
                    <div className="text-muted">Planning Roads</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-blue panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-road color-orange"></em>
                    <div className="large">4</div>
                    <div className="text-muted">Building new roads</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-orange panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-check color-teal"></em>
                    <div className="large">13</div>
                    <div className="text-muted">Completed roads</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-red panel-widget">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-briefcase color-black"></em>
                    <div className="large">15</div>
                    <div className="text-muted">Hamkorlar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Draw lines to the map
                  <span className="pull-right clickable panel-toggle panel-button-tab">
                    <em className="fa fa-toggle-up"></em>
                  </span>
                </div>
                <div className="panel-body">
                  <div className="up">
                    <input
                      className="inline"
                      type="text"
                      id="color_pline"
                      value="#cc3333"
                    />
                    <span>
                      <input
                        className="inline"
                        type="button"
                        value="Добавить"
                        id="addPolyline"
                      />
                      <input
                        className="inline"
                        type="button"
                        value="Удалить"
                        id="dellPolyline"
                      />
                    </span>
                    <span className="inline">
                      <input
                        className="inline"
                        type="button"
                        value="Завершить редактирование"
                        id="stopEditPolyline"
                      />
                    </span>
                  </div>

                  <div id="map"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map 2.0 Container */}
      </>
    );
  }
}

export default Roads;
