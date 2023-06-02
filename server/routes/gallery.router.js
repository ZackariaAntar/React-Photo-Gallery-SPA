const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const idToEdit = req.params.id
    const editQuery = `UPDATE gallery SET likes = likes + 1 WHERE id=$1;`

    pool.query(editQuery, [idToEdit])
}).then((response)=>{
    res.sendStatus(200)
}).catch((error)=>{
    console.log('Error with the put route', error);


}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const getQuery = `SELECT * FROM gallery ORDER BY "id" ASC;`
    pool.query(getQuery)
}).then((response)=>{
    console.log('Successfully got data');
    res.send(response.rows)
}).catch((err)=>{
    console.log('Error with the get route',error);
    response.sendStatus(500)
}); // END GET Route

module.exports = router;