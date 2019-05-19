import ItunesController from "./components/Itunes/itunes-controller.js";


class App {
  constructor() {
    this.controllers = {
      itunesCtrl: new ItunesController()
    }
  }
}

window["app"] = new App()


// var maxHeight = 0;

// $("#search-bk>.container>.row>.col-4").each(function () {
//   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
// });

// $("#search-bk>.container>.row>.col-4").height(maxHeight);