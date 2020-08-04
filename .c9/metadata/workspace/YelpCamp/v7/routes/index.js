{"filter":false,"title":"index.js","tooltip":"/YelpCamp/v7/routes/index.js","undoManager":{"mark":48,"position":48,"stack":[[{"start":{"row":0,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":["app.get(\"/\", function(req,res){","   res.render(\"landing\"); ","});","","// ===============================","// Auth Routes","// ===============================","","// Show Register Form","app.get(\"/register\", function(req,res){","    res.render(\"register\");","});","// Handle Signup Logic","app.post(\"/register\", function(req,res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err,user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req,res,function(){","            res.redirect(\"/campgrounds\");","        });","    });","});","","// Show Login Form","app.get(\"/login\", function(req,res){","    res.render(\"login\");","});","// Handle Login Logic","app.post(\"/login\", passport.authenticate(\"local\", {","    successRedirect: \"/campgrounds\",","    failureRedirect: \"/login\"","}), function(req,res){","    ","});","","// Logout Logic","app.get(\"/logout\", function(req,res){","    req.logout();","    res.redirect(\"/campgrounds\");","});","","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":30},"action":"insert","lines":["var express = require(\"express\");","var router = express.Router();"],"id":3}],[{"start":{"row":1,"column":30},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"remove","lines":["p"],"id":5},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"remove","lines":["p"]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["r"],"id":6},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["u"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["t"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"remove","lines":["p"],"id":7},{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"remove","lines":["p"]},{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":["r"],"id":8},{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"insert","lines":["o"]},{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"insert","lines":["u"]},{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"insert","lines":["t"]},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["e"]},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"remove","lines":["p"],"id":9},{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"remove","lines":["p"]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["r"],"id":10},{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":["o"]},{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":["u"]},{"start":{"row":16,"column":3},"end":{"row":16,"column":4},"action":"insert","lines":["t"]},{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["e"]},{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":30,"column":2},"end":{"row":30,"column":3},"action":"remove","lines":["p"],"id":11},{"start":{"row":30,"column":1},"end":{"row":30,"column":2},"action":"remove","lines":["p"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["r"],"id":12},{"start":{"row":30,"column":1},"end":{"row":30,"column":2},"action":"insert","lines":["o"]},{"start":{"row":30,"column":2},"end":{"row":30,"column":3},"action":"insert","lines":["u"]},{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["t"]},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["e"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":34,"column":2},"end":{"row":34,"column":3},"action":"remove","lines":["p"],"id":13},{"start":{"row":34,"column":1},"end":{"row":34,"column":2},"action":"remove","lines":["p"]},{"start":{"row":34,"column":0},"end":{"row":34,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":34,"column":0},"end":{"row":34,"column":1},"action":"insert","lines":["r"],"id":14},{"start":{"row":34,"column":1},"end":{"row":34,"column":2},"action":"insert","lines":["o"]},{"start":{"row":34,"column":2},"end":{"row":34,"column":3},"action":"insert","lines":["u"]},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"insert","lines":["t"]},{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"insert","lines":["e"]},{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"remove","lines":["p"],"id":15},{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"remove","lines":["p"]},{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":["r"],"id":16},{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"insert","lines":["o"]},{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":["u"]},{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["t"]},{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["e"]},{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":52,"column":1},"end":{"row":53,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":53,"column":0},"end":{"row":54,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":54,"column":0},"end":{"row":54,"column":24},"action":"insert","lines":["module.exports = router;"],"id":18}],[{"start":{"row":1,"column":30},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":20},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["p"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["s"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["s"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["p"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["o"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["r"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":[" "],"id":21},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":[" "],"id":22},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["r"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["e"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["q"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["u"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["i"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["r"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":24},"action":"insert","lines":["()"],"id":23}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":25},"action":"insert","lines":["\"\""],"id":24}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["p"],"id":25},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["a"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["s"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["s"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["p"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["o"]},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["r"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":[";"],"id":26}],[{"start":{"row":2,"column":35},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":28},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["U"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":[" "],"id":29},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "],"id":30},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["r"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["q"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["u"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["i"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["r"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":20},"action":"insert","lines":["()"],"id":31}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["\""],"id":32},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["\""]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["\""],"id":33},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"remove","lines":["\""]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":21},"action":"insert","lines":["\"\""],"id":34}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["."],"id":35},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["."]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["/"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["m"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["o"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["d"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["e"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["l"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["s"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["/"]}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["u"],"id":36},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["s"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["e"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":[";"],"id":37}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":38}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":[" "],"id":39},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":[" "]}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":[" "],"id":40},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":[" "]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":[" "]}],[{"start":{"row":9,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["// ===============================","// Auth Routes","// ===============================",""],"id":41},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":42},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["/"]},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":[" "],"id":43},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["R"]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["o"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["o"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":[" "],"id":44},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["R"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["o"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["u"]},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["t"]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":46,"column":0},"end":{"row":46,"column":1},"action":"insert","lines":["/"]},{"start":{"row":46,"column":1},"end":{"row":46,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":46,"column":2},"end":{"row":46,"column":3},"action":"insert","lines":[" "],"id":46},{"start":{"row":46,"column":3},"end":{"row":46,"column":4},"action":"insert","lines":["M"]},{"start":{"row":46,"column":4},"end":{"row":46,"column":5},"action":"insert","lines":["i"]},{"start":{"row":46,"column":5},"end":{"row":46,"column":6},"action":"insert","lines":["d"]},{"start":{"row":46,"column":6},"end":{"row":46,"column":7},"action":"insert","lines":["d"]},{"start":{"row":46,"column":7},"end":{"row":46,"column":8},"action":"insert","lines":["l"]},{"start":{"row":46,"column":8},"end":{"row":46,"column":9},"action":"insert","lines":["e"]}],[{"start":{"row":46,"column":9},"end":{"row":46,"column":10},"action":"insert","lines":[" "],"id":47}],[{"start":{"row":46,"column":9},"end":{"row":46,"column":10},"action":"remove","lines":[" "],"id":48}],[{"start":{"row":46,"column":9},"end":{"row":46,"column":10},"action":"insert","lines":["w"],"id":49},{"start":{"row":46,"column":10},"end":{"row":46,"column":11},"action":"insert","lines":["a"]},{"start":{"row":46,"column":11},"end":{"row":46,"column":12},"action":"insert","lines":["r"]},{"start":{"row":46,"column":12},"end":{"row":46,"column":13},"action":"insert","lines":["e"]}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":46,"column":13},"end":{"row":46,"column":13},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":23,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1539710131157,"hash":"17cd35d24d387ff859c5bda69263a3c6e44a3124"}