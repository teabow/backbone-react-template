'use strict';

/**
 * LocalStorage service
 * @type {{load: Function, save: Function}}
 */
var localStorageService = {

    KEYS: {
        MOVIES: 'movies'
    },

    load: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },

    save: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

};

module.exports = localStorageService;
