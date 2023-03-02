//jshint esversion:6
module.exports.getDate = getDate;

function getDate() {

let today = new Date();

let options={
     weekday: "long",
     day:"numeric",
     month:"long"
};

let day =today.toLocaleDateString("en-IN", options);

return day;   
}

module.exports.getDay = getDay;

function getDay() {

    let today = new Date();
    let options={
         weekday: "long"
    };
    
    let day =today.toLocaleDateString("en-IN", options);
    
    return day;   
    }
