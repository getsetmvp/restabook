const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { productValidation } = require('../../validations');
const { productController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageProducts'), validate(productValidation.createProduct), productController.createProduct)
  .get(validate(productValidation.getProducts), productController.getProducts);

router
  .route('/:productId')
  .get(validate(productValidation.getProduct), productController.getProduct)
  .patch(auth('manageProducts'), validate(productValidation.updateProduct), productController.updateProduct)
  .delete(auth('manageProducts'), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management and retrieval
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a product
 *     description: Only admins can create products.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category
 *               - name
 *               - description
 *               - price
 *               - stock
 *               - type
 *               - image_url
 *               - image_thumb_url
 *             properties:
 *               category:
 *                 type: string
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: integer
 *               stock:
 *                 type: integer
 *               type:
 *                 type: string
 *                 enum: [veg, nonveg]
 *               image_url:
 *                 type: string
 *               image_thumb_url:
 *                 type: string
 *               ratings:
 *                 type: object
 *                 properties:
 *                   1:
 *                     type: number
 *                   2:
 *                     type: number
 *                   3:
 *                     type: number
 *                   4:
 *                     type: number
 *                   5:
 *                     type: number
 *               avgRating:
 *                 type: number
 *               reviews:
 *                 type: number
 *             example:
 *               category: fake category
 *               name: fake name
 *               description: fake description
 *               price: 129
 *               stock: 10
 *               type: veg
 *               image_url: https://image_url.com/image
 *               image_thumb_url: https://image_thumb_url.com/image
 *               ratings:
 *                 1: 1
 *                 2: 2
 *                 3: 14
 *                 4: 5
 *                 5: 5
 *               avgRating: 3
 *               reviws: 27
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all products
 *     description: All users can retrieve products.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Product name
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Product category
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [veg, nonveg]
 *         description: Product type
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of products
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product
 *     description: All users can fetch a product.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a product
 *     description: Only admins can update a product.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: integer
 *               stock:
 *                 type: integer
 *               type:
 *                 type: string
 *                 enum: [veg, nonveg]
 *               image_url:
 *                 type: string
 *               image_thumb_url:
 *                 type: string
 *               ratings:
 *                 type: object
 *                 properties:
 *                   1:
 *                     type: number
 *                   2:
 *                     type: number
 *                   3:
 *                     type: number
 *                   4:
 *                     type: number
 *                   5:
 *                     type: number
 *               avgRating:
 *                 type: number
 *               reviews:
 *                 type: number
 *             example:
 *               name: fake name
 *               description: fake description
 *               price: 129
 *               stock: 10
 *               type: veg
 *               image_url: https://image_url.com/image
 *               image_thumb_url: https://image_thumb_url.com/image
 *               ratings:
 *                 1: 1
 *                 2: 2
 *                 3: 14
 *                 4: 5
 *                 5: 5
 *               avgRating: 3
 *               reviws: 27
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a product
 *     description: Only admins can delete products.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
