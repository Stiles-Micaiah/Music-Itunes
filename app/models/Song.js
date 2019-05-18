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
    return `
        <div class= "col-4">
        <div class="card">
<img src="${this.albumArt}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <ul>
    <li>Album:${this.collection}</li>
    <li>Artist:${this.artist}</li>
    <li>\$${this.price}</li>   
    </ul>
    <video controls src="${this.preview}"></video>
    </div>
  </div>
</div>
        `

  }

}