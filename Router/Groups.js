const express = require('express');
const router = express.Router();



router.post('/register', function (req,res) {
    // Permet de créer un groupe
    res.send('ok groups')
})

router.get('/', function (req, res) {
    //Permet de recuperer les groupes de tout les users

})

router.get('/:id',function (req, res) {
    //Permet de recuperer le groupe d'un user
})

router.get('/myId', function (req, res) {
    //Permet de recuperer mon groupe persos
})

router.put('/myId', function (req, res) {
    //Permet de modifier mon groupe
})

router.put('/:id', function (req, res) {
    //Permet de modifier un groupe
})

router.delete('/:id', function (req, res) {
    //Permet de supprimer un groupe
})

module.exports = router;