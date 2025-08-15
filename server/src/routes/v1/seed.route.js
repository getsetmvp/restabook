const express = require('express');
const { seedController } = require('../../controllers');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/', auth('manageDB'), seedController.resetDB);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Seed
 *   description: Reset Database
 */

/**
 * @swagger
 * /seed:
 *   get:
 *     summary: Reset Database
 *     tags: [Seed]
 *     responses:
 *       "205":
 *         description: Reset DB
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
