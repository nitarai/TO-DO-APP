const router = require('express').Router();

const todoController= require("./todo.controller")

//Read
router.get('/', async(req, res)=>{
    const results = await todoController.list();
    res.json({data: results});
});

//create
router.post("/",async(req,res ) =>{
    const todoResult = await todoController.create(req.body);
    res.json({data: todoResult});
});
 
// read by id
router.get('/:id', async(req, res)=>{
    const results= await todoController.getById(req.params.id);
    res.json({data: results});
});

//read by id
router.post("/:id",async(req,res ) =>{
    const results = await todoController.getById(req.params.id);
    res.json({data: results});
});

//update by id
router.post("/:id",async(req,res ) =>{
    const results = await todoController.updateByID(req.params.id, req.body);
    res.json({data: results});
});

//delete by id
router.post("/:id",async(req,res ) =>{
    const results = await todoController.remove(req.params.id);
    res.json({data: results});
});

module.exports = router;


