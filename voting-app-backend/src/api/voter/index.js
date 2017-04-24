import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Voter, { schema } from './model'

const router = new Router()
const { username, email, description } = schema.tree

/**
 * @api {post} /voters Create voter
 * @apiName CreateVoter
 * @apiGroup Voter
 * @apiParam username Voter's username.
 * @apiParam email Voter's email.
 * @apiParam description Voter's description.
 * @apiSuccess {Object} voter Voter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Voter not found.
 */
router.post('/',
  body({ username, email, description }),
  create)

/**
 * @api {get} /voters Retrieve voters
 * @apiName RetrieveVoters
 * @apiGroup Voter
 * @apiUse listParams
 * @apiSuccess {Object[]} voters List of voters.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /voters/:id Retrieve voter
 * @apiName RetrieveVoter
 * @apiGroup Voter
 * @apiSuccess {Object} voter Voter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Voter not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /voters/:id Update voter
 * @apiName UpdateVoter
 * @apiGroup Voter
 * @apiParam username Voter's username.
 * @apiParam email Voter's email.
 * @apiParam description Voter's description.
 * @apiSuccess {Object} voter Voter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Voter not found.
 */
router.put('/:id',
  body({ username, email, description }),
  update)

/**
 * @api {delete} /voters/:id Delete voter
 * @apiName DeleteVoter
 * @apiGroup Voter
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Voter not found.
 */
router.delete('/:id',
  destroy)

export default router
