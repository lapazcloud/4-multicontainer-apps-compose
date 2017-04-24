import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export PollOption, { schema } from './model'

const router = new Router()
const { name, description } = schema.tree

/**
 * @api {post} /pollOptions Create poll option
 * @apiName CreatePollOption
 * @apiGroup PollOption
 * @apiParam name Poll option's name.
 * @apiParam description Poll option's description.
 * @apiSuccess {Object} pollOption Poll option's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poll option not found.
 */
router.post('/',
  body({ name, description }),
  create)

/**
 * @api {get} /pollOptions Retrieve poll options
 * @apiName RetrievePollOptions
 * @apiGroup PollOption
 * @apiUse listParams
 * @apiSuccess {Object[]} pollOptions List of poll options.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /pollOptions/:id Retrieve poll option
 * @apiName RetrievePollOption
 * @apiGroup PollOption
 * @apiSuccess {Object} pollOption Poll option's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poll option not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /pollOptions/:id Update poll option
 * @apiName UpdatePollOption
 * @apiGroup PollOption
 * @apiParam name Poll option's name.
 * @apiParam description Poll option's description.
 * @apiSuccess {Object} pollOption Poll option's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Poll option not found.
 */
router.put('/:id',
  body({ name, description }),
  update)

/**
 * @api {delete} /pollOptions/:id Delete poll option
 * @apiName DeletePollOption
 * @apiGroup PollOption
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Poll option not found.
 */
router.delete('/:id',
  destroy)

export default router
