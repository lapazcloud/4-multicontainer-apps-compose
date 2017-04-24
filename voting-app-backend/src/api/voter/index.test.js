import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Voter } from '.'

const app = () => express(routes)

let voter

beforeEach(async () => {
  voter = await Voter.create({})
})

test('POST /voters 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ username: 'test', email: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.username).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /voters 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /voters/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${voter.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(voter.id)
})

test('GET /voters/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /voters/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${voter.id}`)
    .send({ username: 'test', email: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(voter.id)
  expect(body.username).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /voters/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ username: 'test', email: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /voters/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${voter.id}`)
  expect(status).toBe(204)
})

test('DELETE /voters/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
