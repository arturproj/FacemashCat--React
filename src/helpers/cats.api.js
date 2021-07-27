"use strict";

export const cat_api_url = "https://latelier.co/data/cats.json";

export class Cat {
  #id;
  #likes;
  #picture;
  index;
  log;
  /**
   * Cat formatter
   * @param {object} cat
   * @return {object} Cat
   */
  constructor(cat) {
    /**
     * Cat like status recorder in localstockage     *
     */
    this.store = () => {
      this.log = { id: this.#id, likes: this.#likes };
      localStorage.setItem(this.#id, this.#likes) ? true : false;
    };

    /**
     * Cat liked status reader in localstockage,
     * returns 0 if it does not exist    *
     */
    this.load = () => Number(localStorage.getItem(this.#id)) || 0;

    /**
     * increasing counter of single and total likes
     *
     */
    this.dispatch = () => {
      // check value of global likes
      let totLikes = Number(localStorage.getItem("totLikes")) || 0;
      // update total counter
      localStorage.setItem("totLikes", totLikes + 1);

      // increasing cat counter
      this.#likes++;

      // saves the updated value
      this.store();
    };

    /**
     * reset this.cat counter
     */
    this.reset = () => {
      this.#likes = 0;
      this.store();
    };

    this.index = cat.index;

    this.#id = cat.id;

    this.#picture = cat.url;

    this.#likes = this.load();

    this.store();

    // public methods for reading private variables
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
    .then((res) => res.json()) // render json

    .then(
      (
        res //  map and formatting cat object
      ) =>
        res.images.map((cat, i) => {
          cat.index = i;
          return new Cat(cat); //  render gataway Cat
        })
    )
    .catch((err) => console.error(err));

/**
 * reset count likes ofcats
 * @param {array} cats
 * @returns {array} class Cat[]
 */
export const resetAnyLikes = (cats) => cats.map((cat) => cat.reset());

/**
 * reset count global likes
 * @returns {array} class Cat[]
 */
export const resetTotLikes = () => localStorage.setItem("totLikes", 0);

/**
 * Cat object rotator
 * @param {array} cats Cat[]
 * @param {number} min index o Cat
 * @returns {object} next Cat
 */
export function handlerCat(cats, min) {
  /**
   * The goal of this method is to retrieve a random image and
   * at the same time force the find of rows after the current row.
   *
   * logic : min["cat current index"] + 1 < x > max["cats length"]
   */

  let max = cats.length;
  return cats[Math.floor(Math.random() * (max - min + 1) + min)];
}
