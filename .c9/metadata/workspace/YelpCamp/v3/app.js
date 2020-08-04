{"filter":false,"title":"app.js","tooltip":"/YelpCamp/v3/app.js","undoManager":{"mark":85,"position":85,"stack":[[{"start":{"row":8,"column":0},"end":{"row":14,"column":64},"action":"remove","lines":["/*Scheme Setup*/","var campgroundSchema = new mongoose.Schema({","   name: String,","   image: String,","   description: String","});","var Campground = mongoose.model(\"Campground\", campgroundSchema);"],"id":2}],[{"start":{"row":3,"column":37},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "],"id":4},{"start":{"row":3,"column":37},"end":{"row":4,"column":0},"action":"remove","lines":["",""]},{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"remove","lines":[";"]}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":[","],"id":5}],[{"start":{"row":3,"column":37},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["C"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["a"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["m"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["p"]}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["g"],"id":7},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["r"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["o"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["u"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["n"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["d"]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":[" "],"id":8},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":[" "],"id":9},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["r"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["e"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["q"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["u"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["i"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["r"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":26},"action":"insert","lines":["()"],"id":10}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":27},"action":"insert","lines":["\"\""],"id":11}],[{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["."],"id":12},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["/"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["m"]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["o"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["d"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["e"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["l"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["s"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["/"]}],[{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["c"],"id":13},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["a"]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["m"]},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["p"]},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["g"]},{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["r"]},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":["o"]},{"start":{"row":4,"column":42},"end":{"row":4,"column":43},"action":"insert","lines":["u"]},{"start":{"row":4,"column":43},"end":{"row":4,"column":44},"action":"insert","lines":["n"]},{"start":{"row":4,"column":44},"end":{"row":4,"column":45},"action":"insert","lines":["d"]},{"start":{"row":4,"column":45},"end":{"row":4,"column":46},"action":"insert","lines":["."]},{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["s"]},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["j"]}],[{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"remove","lines":["j"],"id":14},{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"remove","lines":["s"]}],[{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["j"],"id":15},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"insert","lines":[";"],"id":16}],[{"start":{"row":4,"column":51},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["C"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["o"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["m"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["m"],"id":18},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["e"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["n"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":[" "],"id":19},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"remove","lines":["="],"id":20},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"remove","lines":[" "]}],[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":[" "],"id":21},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":[" "]},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":[" "]},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":[" "]},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":[" "],"id":22},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["r"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["e"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["u"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["q"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["q"],"id":23},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["u"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["q"],"id":24},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["u"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["i"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["r"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":26},"action":"insert","lines":["()"],"id":25}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":27},"action":"insert","lines":["\"\""],"id":26}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["."],"id":27},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["/"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["m"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["o"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["d"]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["e"]},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["l"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["s"]},{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["/"]}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["u"],"id":28},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["s"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["e"],"id":29}],[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":[";"],"id":30}],[{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"remove","lines":["r"],"id":31},{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"remove","lines":["e"]},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"remove","lines":["s"]},{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"remove","lines":["u"]}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["m"],"id":32}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"remove","lines":["m"],"id":33}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["c"],"id":34},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["o"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["m"]},{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"insert","lines":["m"]},{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["e"]},{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["n"]},{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":35},{"start":{"row":8,"column":82},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":45},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":5,"column":4},"end":{"row":5,"column":45},"action":"remove","lines":["Comment    = require(\"./models/comment\");"],"id":37},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["s"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["e"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["e"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["d"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["B"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["D"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["D"],"id":38},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["B"]}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["D"],"id":39},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["B"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":[" "],"id":40},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":[" "]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":[" "]},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":[" "]},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":[" "]},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":[" "],"id":41},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["r"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["e"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["u"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["q"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["q"],"id":42},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["u"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["q"],"id":43},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["u"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["i"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["r"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":26},"action":"insert","lines":["()"],"id":44}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":27},"action":"insert","lines":["\"\""],"id":45}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["."],"id":46},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["/"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["m"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["o"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["d"]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["e"]},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["l"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["/"],"id":47}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"remove","lines":["/"],"id":48},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"remove","lines":["s"]},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"remove","lines":["l"]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"remove","lines":["e"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"remove","lines":["d"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"remove","lines":["o"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["m"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["/"]}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["/"],"id":49},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["s"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["e"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["e"]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["d"]},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["."],"id":50},{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["j"]},{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"remove","lines":["s"],"id":51},{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"remove","lines":["j"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"remove","lines":["."]}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":[";"],"id":52}],[{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"remove","lines":[";"],"id":53}],[{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"insert","lines":[","],"id":54}],[{"start":{"row":5,"column":36},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":55},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "],"id":56}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":57},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["s"]},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["e"]},{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["e"]},{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["d"]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["B"]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"remove","lines":["B"],"id":58}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["D"],"id":59},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["B"]}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":8},"action":"insert","lines":["()"],"id":60}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":[";"],"id":61}],[{"start":{"row":14,"column":0},"end":{"row":26,"column":6},"action":"remove","lines":["// Campground.create({","//     name: \"Ocean\", ","//     image:\"https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg\",","//     description: \"This is the ocean with a lot of sea creatures\"","// }, function(err,campground){","//     if(err){","//         console.log(err);","//     }","//     else{","//         console.log(\"Newly Created Campground\");","//         console.log(campground);","//     }","// });"],"id":62}],[{"start":{"row":76,"column":37},"end":{"row":76,"column":38},"action":"insert","lines":[")"],"id":63},{"start":{"row":76,"column":38},"end":{"row":76,"column":39},"action":"insert","lines":["."]},{"start":{"row":76,"column":39},"end":{"row":76,"column":40},"action":"insert","lines":["p"]},{"start":{"row":76,"column":40},"end":{"row":76,"column":41},"action":"insert","lines":["o"]},{"start":{"row":76,"column":41},"end":{"row":76,"column":42},"action":"insert","lines":["p"]},{"start":{"row":76,"column":42},"end":{"row":76,"column":43},"action":"insert","lines":["u"]},{"start":{"row":76,"column":43},"end":{"row":76,"column":44},"action":"insert","lines":["l"]},{"start":{"row":76,"column":44},"end":{"row":76,"column":45},"action":"insert","lines":["a"]}],[{"start":{"row":76,"column":45},"end":{"row":76,"column":46},"action":"insert","lines":["t"],"id":64},{"start":{"row":76,"column":46},"end":{"row":76,"column":47},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":47},"end":{"row":76,"column":49},"action":"insert","lines":["()"],"id":65}],[{"start":{"row":76,"column":48},"end":{"row":76,"column":50},"action":"insert","lines":["\"\""],"id":66}],[{"start":{"row":76,"column":49},"end":{"row":76,"column":50},"action":"insert","lines":["c"],"id":67},{"start":{"row":76,"column":50},"end":{"row":76,"column":51},"action":"insert","lines":["o"]},{"start":{"row":76,"column":51},"end":{"row":76,"column":52},"action":"insert","lines":["m"]},{"start":{"row":76,"column":52},"end":{"row":76,"column":53},"action":"insert","lines":["m"]},{"start":{"row":76,"column":53},"end":{"row":76,"column":54},"action":"insert","lines":["e"]},{"start":{"row":76,"column":54},"end":{"row":76,"column":55},"action":"insert","lines":["n"]},{"start":{"row":76,"column":55},"end":{"row":76,"column":56},"action":"insert","lines":["t"]},{"start":{"row":76,"column":56},"end":{"row":76,"column":57},"action":"insert","lines":["s"]}],[{"start":{"row":76,"column":59},"end":{"row":76,"column":60},"action":"insert","lines":["."],"id":68},{"start":{"row":76,"column":60},"end":{"row":76,"column":61},"action":"insert","lines":["e"]},{"start":{"row":76,"column":61},"end":{"row":76,"column":62},"action":"insert","lines":["x"]},{"start":{"row":76,"column":62},"end":{"row":76,"column":63},"action":"insert","lines":["c"]},{"start":{"row":76,"column":63},"end":{"row":76,"column":64},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":63},"end":{"row":76,"column":64},"action":"remove","lines":["e"],"id":69},{"start":{"row":76,"column":62},"end":{"row":76,"column":63},"action":"remove","lines":["c"]}],[{"start":{"row":76,"column":62},"end":{"row":76,"column":63},"action":"insert","lines":["e"],"id":70},{"start":{"row":76,"column":63},"end":{"row":76,"column":64},"action":"insert","lines":["c"]}],[{"start":{"row":76,"column":64},"end":{"row":76,"column":66},"action":"insert","lines":["()"],"id":71}],[{"start":{"row":76,"column":66},"end":{"row":76,"column":67},"action":"remove","lines":[","],"id":72},{"start":{"row":76,"column":65},"end":{"row":76,"column":66},"action":"remove","lines":[")"]}],[{"start":{"row":80,"column":13},"end":{"row":81,"column":0},"action":"insert","lines":["",""],"id":73},{"start":{"row":81,"column":0},"end":{"row":81,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":81,"column":12},"end":{"row":81,"column":13},"action":"insert","lines":["c"],"id":74},{"start":{"row":81,"column":13},"end":{"row":81,"column":14},"action":"insert","lines":["o"]},{"start":{"row":81,"column":14},"end":{"row":81,"column":15},"action":"insert","lines":["n"]},{"start":{"row":81,"column":15},"end":{"row":81,"column":16},"action":"insert","lines":["s"]},{"start":{"row":81,"column":16},"end":{"row":81,"column":17},"action":"insert","lines":["o"]},{"start":{"row":81,"column":17},"end":{"row":81,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":81,"column":17},"end":{"row":81,"column":18},"action":"remove","lines":["e"],"id":75}],[{"start":{"row":81,"column":17},"end":{"row":81,"column":18},"action":"insert","lines":["l"],"id":76},{"start":{"row":81,"column":18},"end":{"row":81,"column":19},"action":"insert","lines":["e"]},{"start":{"row":81,"column":19},"end":{"row":81,"column":20},"action":"insert","lines":["."]},{"start":{"row":81,"column":20},"end":{"row":81,"column":21},"action":"insert","lines":["l"]},{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"insert","lines":["o"]},{"start":{"row":81,"column":22},"end":{"row":81,"column":23},"action":"insert","lines":["g"]}],[{"start":{"row":81,"column":23},"end":{"row":81,"column":25},"action":"insert","lines":["()"],"id":77}],[{"start":{"row":81,"column":24},"end":{"row":81,"column":25},"action":"insert","lines":["f"],"id":78},{"start":{"row":81,"column":25},"end":{"row":81,"column":26},"action":"insert","lines":["o"]},{"start":{"row":81,"column":26},"end":{"row":81,"column":27},"action":"insert","lines":["u"]},{"start":{"row":81,"column":27},"end":{"row":81,"column":28},"action":"insert","lines":["n"]},{"start":{"row":81,"column":28},"end":{"row":81,"column":29},"action":"insert","lines":["d"]},{"start":{"row":81,"column":29},"end":{"row":81,"column":30},"action":"insert","lines":["C"]},{"start":{"row":81,"column":30},"end":{"row":81,"column":31},"action":"insert","lines":["a"]},{"start":{"row":81,"column":31},"end":{"row":81,"column":32},"action":"insert","lines":["m"]},{"start":{"row":81,"column":32},"end":{"row":81,"column":33},"action":"insert","lines":["p"]},{"start":{"row":81,"column":33},"end":{"row":81,"column":34},"action":"insert","lines":["g"]},{"start":{"row":81,"column":34},"end":{"row":81,"column":35},"action":"insert","lines":["r"]},{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"insert","lines":["o"]}],[{"start":{"row":81,"column":36},"end":{"row":81,"column":37},"action":"insert","lines":["u"],"id":79},{"start":{"row":81,"column":37},"end":{"row":81,"column":38},"action":"insert","lines":["n"]},{"start":{"row":81,"column":38},"end":{"row":81,"column":39},"action":"insert","lines":["d"]}],[{"start":{"row":81,"column":40},"end":{"row":81,"column":41},"action":"insert","lines":[";"],"id":80}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":9},"action":"remove","lines":["seedDB();"],"id":81}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":82},{"start":{"row":9,"column":4},"end":{"row":10,"column":0},"action":"remove","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""]},{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":83},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "],"id":84}],[{"start":{"row":23,"column":30},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":85}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":9},"action":"insert","lines":["seedDB();"],"id":86}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":["/"],"id":87},{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":1796,"scrollleft":0,"selection":{"start":{"row":24,"column":2},"end":{"row":24,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":{"row":81,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1538955315132,"hash":"6528bf2f776cf893a50a46d52fd9258d386a9e73"}