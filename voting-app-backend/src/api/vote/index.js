import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Vote, { schema } from './model'

const router = new Router()
const { voter, pollOption, poll } = schema.tree

/**
 * @api {post} /votes Create vote
 * @apiName CreateVote
 * @apiGroup Vote
 * @apiParam voter Vote's voter.
 * @apiParam pollOption Vote's pollOption.
 * @apiParam poll Vote's poll.
 * @apiSuccess {Object} vote Vote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vote not found.
 */
router.post('/',
  body({ voter, pollOption, poll }),
  create)

/**
 * @api {get} /votes Retrieve votes
 * @apiName RetrieveVotes
 * @apiGroup Vote
 * @apiUse listParams
 * @apiSuccess {Object[]} votes List of votes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /votes/:id Retrieve vote
 * @apiName RetrieveVote
 * @apiGroup Vote
 * @apiSuccess {Object} vote Vote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vote not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /votes/:id Update vote
 * @apiName UpdateVote
 * @apiGroup Vote
 * @apiParam voter Vote's voter.
 * @apiParam pollOption Vote's pollOption.
 * @apiParam poll Vote's poll.
 * @apiSuccess {Object} vote Vote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vote not found.
 */
router.put('/:id',
  body({ voter, pollOption, poll }),
  update)

/**
 * @api {delete} /votes/:id Delete vote
 * @apiName DeleteVote
 * @apiGroup Vote
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Vote not found.
 */
router.delete('/:id',
  destroy)

export default router
