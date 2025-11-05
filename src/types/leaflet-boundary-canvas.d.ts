import * as L from "leaflet";

declare module "leaflet" {
  namespace TileLayer {
    function boundaryCanvas(
      urlTemplate: string,
      options?: L.TileLayerOptions & { boundary?: any }
    ): L.TileLayer;
  }
}
