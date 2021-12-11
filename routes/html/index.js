const path = require('path');
const router = require('express').Router();

//when user goes to website, show index.html
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//send notes page when user goes to notes url
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//send user back to home page
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})



module.exports = router;