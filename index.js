module.exports = function fizzbuzz(value) {
	    if (value % 15 === 0) {
		            return "FB";
		        }
	    if (value % 3 === 0) {
		            return "F";
		        }
	    if (value % 5 === 0) {
		            return "B";
		        }
	    return String(value);
};
