const faker = require('faker')
const { factory } = require('factory-girl')
const Tool = require('../src/app/models/Tool')

function generateRandomArrayOfTags() {
  const tagsList = [];

  for (let i = 0; i < 5; i++)
    tagsList.push(faker.lorem.word());

  return tagsList
}

factory.define('Tool', Tool, {
  title: faker.name.title(),
  link: faker.internet.url(),
  description: faker.lorem.text(),
  tags: generateRandomArrayOfTags()
});

module.exports = factory
