import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Poll, { schema } from './model'

const router = new Router()
const { name, description } = schema.tree

/**
 * @api {post} /polls Create poll
 * @apiName CreatePoll
 * @apiGroup Poll
 * @apiParam name Poll's name.
 * @apiParam description Poll's description.
 * @apiSuccess {Object} poll Poll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poll not found.
 */
router.post('/',
  body({ name, description }),
  create)

/**
 * @api {get} /polls Retrieve polls
 * @apiName RetrievePolls
 * @apiGroup Poll
 * @apiUse listParams
 * @apiSuccess {Object[]} polls List of polls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /polls/:id Retrieve poll
 * @apiName RetrievePoll
 * @apiGroup Poll
 * @apiSuccess {Object} poll Poll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poll not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /polls/:id Update poll
 * @apiName UpdatePoll
 * @apiGroup Poll
 * @apiParam name Poll's name.
 * @apiParam description Poll's description.
 * @apiSuccess {Object} poll Poll's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poll not found.
 */
router.put('/:id',
  body({ name, description }),
  update)

/**
 * @api {delete} /polls/:id Delete poll
 * @apiName DeletePoll
 * @apiGroup Poll
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Poll not found.
 */
router.delete('/:id',
  destroy)

export default router
