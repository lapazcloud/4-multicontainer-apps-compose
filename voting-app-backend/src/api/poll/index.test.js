import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Poll } from '.'

const app = () => express(routes)

let poll

beforeEach(async () => {
  poll = await Poll.create({})
})

test('POST /polls 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /polls 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /polls/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${poll.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(poll.id)
})

test('GET /polls/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /polls/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${poll.id}`)
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(poll.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /polls/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /polls/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${poll.id}`)
  expect(status).toBe(204)
})

test('DELETE /polls/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
