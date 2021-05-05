//alok's
const express = require("express");

const instaController = require("../controllers/insta");
const oneCallController = require("../controllers/oneCallController")
const covidController = require("../controllers/covid");

const router = express.Router();

module.exports = router;

// TODO: Implement API Routes



/**
 * @swagger
 * /api/get_data/{location}:
 *  get:
 *    description: Retrive a list of 10 insta image of a location
 *    parameters:
 *      - in: path
 *        name: location
 *        type: string
 *        description: The name of the city to query.
 *    responses:
 *      '200':
 *        description: List of 10 url
 */
 router.get("/get_data/:location", oneCallController.get);

/**
 * @swagger
 * /api/covid_all_states:
 *  get:
 *    description: Retrive covid info
 *    responses:
 *      '200':
 *        description: List 
 */
router.get("/covid_all_states", covidController.getAll);

/**
 * @swagger
 * /api/covid/{state}:
 *  get:
 *    description: Get covid guidelines of a pirticular state
 *    parameters:
 *      - in: path
 *        name: state
 *        type: string
 *        description: The name of the state to query.
 *    responses:
 *      '200':
 *        description: Details string
 */
 router.get("/covid/:state", covidController.getForState);

module.exports = router;
