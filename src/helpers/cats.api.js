"use strict";

export const cat_api_url = "https://latelier.co/data/cats.json";

export class Cat {
  /**
   * Cat formatter
   * @param {object} cat
   * @return {object} Cat
   */
  constructor(cat) {
    this.id = cat.id;
    this.picture = cat.url;
    this.likes = 0;
  }
}

export class MaskCats {
  constructor(cats) {
    this.cats = cats;
    this.find = this.find.bind(this);
    this.findRandom = this.find.bind(this);
  }

  findRandom() {
    return this.cats[Math.floor(Math.random() * this.cats.length)];
  }

  find(id) {
    console.log(this.cats.findIndex((cat) => cat.id === id));
    return true;
  }
}

/**
 * Find array cats
 * @returns {object}
 */
export const findAnyCats = () =>
  fetch(cat_api_url)
    .then((res) => res.json())
    .then((res) => res.images.map((cat) => new Cat(cat)))
    .catch((err) => console.error(err));
