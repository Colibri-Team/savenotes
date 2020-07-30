const express = require('express');
const router = express.Router();
const passport = require('passport')
const {ensureAuth, ensureGuest} = require('../middleware/auth_check')
const User = require('../models/User')
const Note = require('../models/note')

//Login page
// GET /
router.get('/', ensureGuest,(req, res)=>{
    res.render('login',{
        layout:false,
        name:'Shakhriyor'
    })
})

router.get('/homepage',ensureAuth, async(req,res)=>{ 
    try{
    const notes = await Note.find({user:req.user.id}).lean()
    const user = await User.findById(req.user.id).lean()
    res.render('homepage', {
        layout:false,
        notes:notes,
        user:user
    })
    }catch(er){
        console.log(er)
        res.send('<h1> Server Error</>')
    }
       
})





module.exports = router
router.get('/db/notes', (req,res)=>{ 
    Note.find({user:req.user.id}).lean().then(notes=>{   
        res.send(notes)     
    }).catch(er=>{
        console.log(er)
        res.send('<h1> Server Error</>')
    })
})
router.post('/db/notes', (req,res)=>{
    const note = new Note({
        title:req.body.title,
        body:req.body.body,
        user:req.user.id,
        createdDate:req.body.createdDate,
        noteID:req.body.noteID,
    })
    note.save().then(success=>{
        console.log("Added!")
    })
    
    res.redirect('/homepage')
})

router.put('/db/notes/:id',  async (req, res)=>{
    try{
    const note = await Note.findOneAndUpdate({noteID:req.params.id}, req.body)
    console.log('Edited!!!')
    res.send(note)

    }catch(er){
        console.log(er)
        res.send('<h1> Server Error</>')
        
    }
   
})

router.delete('/db/notes/:id', (req,res)=>{
    Note.findOneAndDelete({noteID:req.params.id}).then(success=>{
        console.log('Success Deleted!!!!!!')
        res.send(success)
    }).catch(er=>{
        console.log(er)
        res.send('<h1> Server Error</>')
    })
})

router.get('/user', (req, res)=>{
    res.send(req.user)
})