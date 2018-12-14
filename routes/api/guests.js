const express = require('express');
const router = express.Router();

//Item Model
const Guest = require('../../models/guests'); 

//@route GET api/guest
//@desc get all guest
//@access public
router.get('/', (req, res) => {
    Guest.find()
        .sort({ date: -1 })
        .then(guests => res.json(guests));
});

//@route POST api/guest
//@desc post new guest
//@access public
router.post('/', (req, res) => {
    const newGuest = new Guest ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    newGuest.save().then(guest => res.json(guest));
});

//@route POST api/guest
//@desc post new guest
//@access public
router.delete('/:id', (req, res) => {
    Guest.findById(req.params.id)
    .then(guest => guest.remove().then(() => res.json({ success: true}))
    )
    .catch(err => res.status(404).json({ success: false }));
    
})


module.exports = router;