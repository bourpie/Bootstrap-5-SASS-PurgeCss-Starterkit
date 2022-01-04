/* global module */
/* eslint no-undef: "error" */
module.exports = {
    content: ['./dist/index.html'],
    css: ['./dist/css/main.css'],
    // Add css classes used from javascript to ignore purgecss :
    safelist: ['carousel-item-start', 'carousel-item-end', 'carousel-item-next', 'carousel-item-prev'],
    output: './dist/css/',
    keyframes: true,
    rejected: true,
    variables: true
  }
  