const express = require('express');
const router = express.Router();

//Item model 
const Item = require('../../models/item');

//@route GET api/items
//@desc Get all the items
//@access public 

router.get('/', (req, res)=>{
    Item.find()
    .sort({date : -1})
    .then( items => res.json(items))
});


//@route POST api/items
//@desc Post an item 
//@access public 
router.post('/', (req, res)=>{
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then( item => res.json(item))
});

//@route DELETE api/items/:id
//@des delete an item by id
//@access public

router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then( () => { res.json( { sucess : true} )  }   )   )
    .catch(err => res.status(404).json(  {success : false }  ) )

});

module.exports = router;