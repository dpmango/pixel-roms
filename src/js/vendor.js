// import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import picturefill from 'picturefill';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import selectric from 'jquery-selectric';
import Barba from 'barba.js';
import Lazy from 'jquery-lazy';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import rateit from 'jquery.rateit';
import sharer from 'sharer.js';
import tablesort from 'tablesort';
import easyAutocomplete from 'easy-autocomplete';

// expose imports to window to use in app.js
// (jquery is exposed in expose-loader)
// window.jQuery = $;
// window.$ = $;
window.svg4everybody = svg4everybody;
window.picturefill = picturefill;
window.viewportUnitsBuggyfill = viewportUnitsBuggyfill;
window.selectric = selectric;
window.Barba = Barba;
window.Lazy = Lazy;
window.ScrollToPlugin = ScrollToPlugin;
window.TweenMax = TweenMax;
window.debounce = debounce;
window.throttle = throttle;
window.rateit = rateit;
window.sharer = sharer;
window.Tablesort = tablesort;
window.easyAutocomplete = easyAutocomplete;
