import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { PollOption } from '.'

const app = () => express(routes)

let pollOption

beforeEach(async () => {
  pollOption = await PollOption.create({})
})

test('POST /pollOptions 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /pollOptions 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /pollOptions/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${pollOption.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pollOption.id)
})

test('GET /pollOptions/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /pollOptions/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${pollOption.id}`)
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(pollOption.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /pollOptions/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /pollOptions/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${pollOption.id}`)
  expect(status).toBe(204)
})

test('DELETE /pollOptions/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
