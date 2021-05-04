//alok's
const express = require("express");

const instaController = require("../controllers/insta");
const router = express.Router();

module.exports = router;

// TODO: Implement API Routes


/**
 * @swagger
 * /api/get_insta_feed:
 *  get:
 *    description: Retrive a list of 10 insta image of a location
 *    responses:
 *      '200':
 *        description: List of 10 url
 */
router.get("/get_insta_feed", instaController.get);



/**
 * @swagger
 * /api/tweets/{location}/{resource}:
 *   get:
 *     summary: Retrieve a list tweets.
 *     description: Retrieve a list of tweets based on location and resource type.
 *     parameters:
 *             - in: path
 *               name: location
 *               type: string
 *               description: The name of the city to query.
 *             - in: path
 *               name: resource
 *               type: string
 *               description: The name of the resource to query.
 *     responses:
 *       200:
 *         description: A list of 20 tweets.
 *         
 */
router.get("/something", instaController.get);
module.exports = router;
