'use strict';

const faker = require('faker');

module.exports = {
  music: music
};

const images = [faker.image.abstract, faker.image.animals, faker.image.cats, faker.image.food, faker.image.nature, faker.image.nightlife, faker.image.fashion];


function music(req, res) {
  const musicRes = [];

  for (let i = 0; i < 7; i += 1) {
    musicRes.push({
      image: '' + images[i](),
      genre: '' + faker.music.genre(), 
      author: '' + faker.name.firstName() + faker.commerce.productName(),
      music: '' + faker.commerce.product(),
      avatar: '' + faker.image.avatar()
     });
  }

  res.json([...musicRes]);
}
