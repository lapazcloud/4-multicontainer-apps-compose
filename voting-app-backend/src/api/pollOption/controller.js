import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { PollOption } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  PollOption.create(body)
    .then((pollOption) => pollOption.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  PollOption.find(query, select, cursor)
    .then((pollOptions) => pollOptions.map((pollOption) => pollOption.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  PollOption.findById(params.id)
    .then(notFound(res))
    .then((pollOption) => pollOption ? pollOption.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  PollOption.findById(params.id)
    .then(notFound(res))
    .then((pollOption) => pollOption ? _.merge(pollOption, body).save() : null)
    .then((pollOption) => pollOption ? pollOption.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  PollOption.findById(params.id)
    .then(notFound(res))
    .then((pollOption) => pollOption ? pollOption.remove() : null)
    .then(success(res, 204))
    .catch(next)
