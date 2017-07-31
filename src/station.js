var Station = function(name, location, bikes =[],) {
	this.name = name;
	this.location = location;
	this.bikes = bikes;
}

Station.prototype.take = function(bike) {

  this.bikes.push(bike);
};

Station.prototype.empty = function() {
	if (this.bikes.length === 0) {
    return true;
  }
  else {
    return false;
  } 
};


Station.prototype.newestBike = function() {
	// if (this.bikes.length === 0) {
 //    return true;
 //  }
 //  else {
 //    return false;
 //  } 
};