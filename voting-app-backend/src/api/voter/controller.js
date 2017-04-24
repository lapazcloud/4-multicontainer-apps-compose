import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Voter } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Voter.create(body)
    .then((voter) => voter.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Voter.find(query, select, cursor)
    .then((voters) => voters.map((voter) => voter.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Voter.findById(params.id)
    .then(notFound(res))
    .then((voter) => voter ? voter.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Voter.findById(params.id)
    .then(notFound(res))
    .then((voter) => voter ? _.merge(voter, body).save() : null)
    .then((voter) => voter ? voter.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Voter.findById(params.id)
    .then(notFound(res))
    .then((voter) => voter ? voter.remove() : null)
    .then(success(res, 204))
    .catch(next)
