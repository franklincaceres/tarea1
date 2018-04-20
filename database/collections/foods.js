const mongoose = require("../connect");
var foodSchema = {
	name : String,
	descripcion : String,
	ingredientes : String,
};
var food = mongoose.model("food", foodSchema);
module.exports = food;