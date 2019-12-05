const request = require("supertest");
const mongoose = require("mongoose");

const app = require('../../src/app');
const Tool = require('../../src/app/models/Tool')
const factory = require('../factories')

describe('Tool', () => {

  beforeAll(async () => {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
  });

  afterAll(async done => {
    const collections = await mongoose.connection.db.collections();
    collections.forEach(async collection => {
      await collection.deleteMany();
    })
    mongoose.disconnect(done);
  });

  afterEach(async () => {
    await Tool.deleteMany()
  });

  it('should be able to create a tool with valid fields', async () => {
    const tool = await factory.attrs('Tool')
    const response = await request(app)
      .post('/tools')
      .send(tool)

    expect(response.status).toBe(201)
  })

  it('should be able to list all tools', async () => {
    const response = await request(app).get('/tools')

    expect(response.status).toBe(200)
  })

  it('should be able to list all tools with filters', async () => {
    const firstTool = await factory.attrs('Tool', {
      tags: ['nodejs']
    })
    const secondTool = await factory.attrs('Tool', {
      tags: ['reactjs']
    })

    await request(app)
      .post('/tools')
      .send(firstTool)

    await request(app)
      .post('/tools')
      .send(secondTool)

    const response = await request(app).get('/tools').query({ tag: 'nodejs' })
    const { tags } = response.body[0]

    expect(tags).toEqual(['nodejs'])
    expect(response.status).toBe(200)
  })

  it('should be able to delete a tool', async () => {
    const tool = await factory.attrs('Tool')
    const { body } = await request(app)
      .post('/tools')
      .send(tool)

    const response = await request(app).delete(`/tools/${body._id}`)

    expect(response.status).toBe(204)
  })

})

