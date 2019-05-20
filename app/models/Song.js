

export default class Song {
  constructor(song) {
    this.title = song.trackName
    //Change 250x250 if you want a larger image
    this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
    this.artist = song.artistName
    this.collection = song.collectionName
    this.price = song.collectionPrice
    this.preview = song.previewUrl
  }


  get Template() {

    if (this.preview.split('.').pop() == 'm4a') {
      return `
<div class= "col-4">
 <div class="card">
  <img onclick= "app.controllers.itunesCtrl.playAudio('${this.preview}')" ondblclick= "app.controllers.itunesCtrl.playAudio('stop')" src="${this.albumArt}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <ul>
    <li>Album:${this.collection}</li>
    <li>Artist:${this.artist}</li>
    <li>\$${this.price}</li>   
    </ul>
  </div>
 </div>
</div>
    `
    } else {
      return ''
    }





  }


}







// get Template() {
//   return `
//         <div class= "col-4">
//         <div class="card">
// <img src="${this.albumArt}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${this.title}</h5>
//     <ul>
//     <li>Album:${this.collection}</li>
//     <li>Artist:${this.artist}</li>
//     <li>\$${this.price}</li>   
//     </ul>
//     ` + this.mediaTag()



// }
// mediaTag() {
//   if (this.preview.split('.').pop() == 'm4a') {
//     return `
//       <audio style = "width: 100%;" controls src="${this.preview}"></audio>
//       </div>
//       </div>
//       </div>
//       `
//   } else {
//     return `
// <video style = "width: 100%;" controls src="${this.preview}"></video>
// </div>
// </div>
// </div>
// `
//   }
// }

// }