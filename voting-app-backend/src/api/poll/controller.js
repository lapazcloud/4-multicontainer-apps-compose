import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Poll } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Poll.create(body)
    .then((poll) => poll.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Poll.find(query, select, cursor)
    .then((polls) => polls.map((poll) => poll.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Poll.findById(params.id)
    .then(notFound(res))
    .then((poll) => poll ? poll.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Poll.findById(params.id)
    .then(notFound(res))
    .then((poll) => poll ? _.merge(poll, body).save() : null)
    .then((poll) => poll ? poll.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Poll.findById(params.id)
    .then(notFound(res))
    .then((poll) => poll ? poll.remove() : null)
    .then(success(res, 204))
    .catch(next)
