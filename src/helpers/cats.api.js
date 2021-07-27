"use strict";

export const cat_api_url = "https://latelier.co/data/cats.json";

export class Cat {
  #id;
  #likes;
  #picture;
  index;
  /**
   * Cat formatter
   * @param {object} cat
   * @return {object} Cat
   */
  constructor(cat) {
    this.store = () => localStorage.setItem(this.#id, this.#likes);
    this.load = () => Number(localStorage.getItem(this.#id)) || 0;
    this.dispatch = () => {
      let totLikes = Number(localStorage.getItem("totLikes")) || 0;
      localStorage.setItem("totLikes", totLikes + 1);
      this.#likes++;
      this.store();
    };
    this.reset = () => {
      this.#likes = 0;
      this.store();
    };

    this.index = cat.index;

    this.#id = cat.id;

    this.#picture = cat.url;

    this.#likes = this.load();

    this.store();
    this.getId = () => this.#id;
    this.getPicture = () => this.#picture;
    this.getLikes = () => this.#likes;
  }
}

/**
 * Find array cats
 * @returns {Promise} class Cat[]
 */
export const findAnyCats = () =>
  fetch(cat_api_url)
    .then((res) => res.json())
    .then((res) =>
      res.images.map((cat, i) => {
        cat.index = i;
        return new Cat(cat);
      })
    )
    .catch((err) => console.error(err));

/**
 * Find array cats
 * @returns {Promise} class Cat[]
 */
export const resetAnyLikes = (cats) => cats.map((cat) => cat.reset());
export const resetTotLikes = () => localStorage.setItem("totLikes", 0);

export function handlerCat(cats, readed) {
  return cats[Math.floor(Math.random() * (cats.length - readed + 1) + readed)];
}
