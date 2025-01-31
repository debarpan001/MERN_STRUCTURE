const express = require('express');
const router = express.Router();

router.post('/create',(req,res)=>{
    res.status(201).send('Create is running')
});
router.get('/read',(req,res)=>{
    res.status(200).send('Read is running')
});
router.put('/update',(req,res)=>{
    res.status(200).send('Update is running')
});
router.delete('/delete',(req,res)=>{
    res.status(200).send('Delete is running')
});
module.exports = router;