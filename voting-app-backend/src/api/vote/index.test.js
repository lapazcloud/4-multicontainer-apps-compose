import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Vote } from '.'

const app = () => express(routes)

let vote

beforeEach(async () => {
  vote = await Vote.create({})
})

test('POST /votes 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ voter: 'test', pollOption: 'test', poll: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.voter).toEqual('test')
  expect(body.pollOption).toEqual('test')
  expect(body.poll).toEqual('test')
})

test('GET /votes 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /votes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${vote.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(vote.id)
})

test('GET /votes/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /votes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${vote.id}`)
    .send({ voter: 'test', pollOption: 'test', poll: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(vote.id)
  expect(body.voter).toEqual('test')
  expect(body.pollOption).toEqual('test')
  expect(body.poll).toEqual('test')
})

test('PUT /votes/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ voter: 'test', pollOption: 'test', poll: 'test' })
  expect(status).toBe(404)
})

test('DELETE /votes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${vote.id}`)
  expect(status).toBe(204)
})

test('DELETE /votes/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
