import React, { Component } from "react";
import Map from "ol/Map";
import View from "ol/View";
import { Image as ImageLayer, Tile as TileLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import { Raster as RasterSource, TileJSON } from "ol/source";
import XYZ from "ol/source/XYZ";
import "./index.css";
class SeaLevelMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterValue: 0,
    };
  }

  flood = (pixels, data) => {
    const pixel = pixels[0];
    if (pixel[3]) {
      const height =
        -10000 + (pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1;
      if (height <= data.level) {
        pixel[0] = 145;
        pixel[1] = 175;
        pixel[2] = 186;
        pixel[3] = 255;
      } else {
        pixel[3] = 0;
      }
    }
    return pixel;
  };

  setMeterValue = (e) => {
    this.setState({
      meterValue: e.target.value,
    });
  };

  componentDidMount() {
    const elevation = new TileLayer({
      source: new XYZ({
        url:
          "https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=pk.eyJ1IjoiZWxyaW9uMDE4IiwiYSI6ImNrYjZlOWY3YzFlOGUycnA3d2cyMDNoNzcifQ.5gkrNr9t5wKUMWWANbqj1g",
        crossOrigin: "anonymous",
      }),
    });
    elevation.on("prerender", function (evt) {
      evt.context.imageSmoothingEnabled = false;
      evt.context.msImageSmoothingEnabled = false;
    });
    const raster = new RasterSource({
      sources: [elevation],
      operation: this.flood,
    });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new TileJSON({
            url:
              "https://api.tiles.mapbox.com/v4/mapbox.world-light.json?secure&access_token=pk.eyJ1IjoiZWxyaW9uMDE4IiwiYSI6ImNrYjZlOWY3YzFlOGUycnA3d2cyMDNoNzcifQ.5gkrNr9t5wKUMWWANbqj1g",
            crossOrigin: "anonymous",
          }),
        }),
        new ImageLayer({
          opacity: 0.6,
          source: raster,
        }),
      ],
      view: new View({
        center: fromLonLat([127.3267, 37.8377]),
        zoom: 6,
      }),
    });

    const control = document.getElementById("level");
    control.addEventListener("input", function () {
      raster.changed();
    });
    raster.on("beforeoperations", function (event) {
      event.data.level = control.value;
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 style={{ fontSize: 30 }}>해수면 상승 시뮬레이터</h3>
        </div>
        <div
          id="map"
          class="map"
          style={{
            width: 700,
            height: 700,
            marginTop: 80,
          }}
        ></div>
        <div
          class="SeaLevelBar"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <br />
          <label
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Sea level
            <input
              id="level"
              type="range"
              min="0"
              max="100"
              value={this.state.meterValue}
              onChange={this.setMeterValue}
            />
            +<span id="output">{this.state.meterValue}</span> m
          </label>
          <br />
        </div>
      </div>
    );
  }
}

export default SeaLevelMap;
