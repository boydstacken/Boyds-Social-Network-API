const router = require('express').Router();
const {getThoughts} = require("../../controllers/thoughts");

router.route('/').get(getThoughts)

module.exports = router;