const { Router } = require("express");
const router = Router();

// const { getChar } = require("../controllers/getCharById");

const {getC} = require('../controllers/getCharById')

const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
//const router = require('express').Router();// se llamo asi y se quito el error



router.get("/character/:id", getC);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
