const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify,(req, res) => {
    res.json({
        posts:{
            title:"1 post",
            description:"hi !"
        }
    })
});

module.exports = router;

/*
rekia apsaugoti vieno userio duomenis nuo kito userio
padaryti 3 roles
neleisti kad viena role galetu daryti kitos roles veiksmus
padaryti kazkiek public requestu
geriausia padaryti iki kitos savaites
*/