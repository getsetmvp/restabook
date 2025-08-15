const express = require('express');
const validate = require('../../middlewares/validate');
const { contactValidation } = require('../../validations');
const { contactController } = require('../../controllers');

const router = express.Router();

router.post('/', validate(contactValidation.contact), contactController.contact);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Get in touch
 */

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Get in touch. Send a message.
 *     description: Anyone can send a message.
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - subject
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               phone: 919155478525
 *               subject: fake subject
 *               message: fake message
 *     responses:
 *       "204":
 *         description: No content
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
