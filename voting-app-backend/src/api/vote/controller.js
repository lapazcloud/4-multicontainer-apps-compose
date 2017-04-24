import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Vote } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Vote.create(body)
    .then((vote) => vote.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Vote.find(query, select, cursor)
    .then((votes) => votes.map((vote) => vote.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Vote.findById(params.id)
    .then(notFound(res))
    .then((vote) => vote ? vote.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Vote.findById(params.id)
    .then(notFound(res))
    .then((vote) => vote ? _.merge(vote, body).save() : null)
    .then((vote) => vote ? vote.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Vote.findById(params.id)
    .then(notFound(res))
    .then((vote) => vote ? vote.remove() : null)
    .then(success(res, 204))
    .catch(next)
