const { Router } = require("express");
const express = require("express");
const { response } = require("../app");
const router = express.Router();
const model = require('../model/excercises_model');
const middleweare = require ('../middleweare/excercise');

const all = (req, res) => {
    model
        .all()
        .then((response) => res.json(response))
        .catch((e) => res.status(500).json({message: "Error", e}));
}

const filter = async (req, res) => {

    try {
        const {num} = req.query;
        console.log(num)
        const result = await model.findById(num);
        res.json({ result });
        console.log(result)
    }catch (e){
        res.status(500).json({message : "Ocurrió un error", e});
        console.log(e);
    }
    
}

const create =  (req, res) => {
    model
    .create(req.body)
    .then((response) => res.json (response))
    .catch((e) => res.status(500).json(e));
}

router.get("/all", all);
router.get('/filter', filter);
router.post('/create', middleweare.create, create);



module.exports = router