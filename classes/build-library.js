class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      const average = this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length;
      return Math.round(average);
    }
  
    addRating(...ratings) {
      this._ratings.push(...ratings);
    }
}
  
class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
}
  
class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
}
  
class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
}
  
// History of Everything Instance (Book)
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.getAverageRating());

// Speed Instance (Movie)
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1, 1, 5);
console.log(speed.getAverageRating());

// The Tortured Poets Department (CD)
const torturedPoetsDept = new CD("Taylor Swift", "The Tortured Poets Department", ["So Long, London", "loml", "The Smallest Man Who Ever Lived"]);
torturedPoetsDept.toggleCheckOutStatus();
console.log(torturedPoetsDept.isCheckedOut);
console.log(torturedPoetsDept.songs);