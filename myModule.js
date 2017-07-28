
var someObject = {

  value1: '100',
  value2: 'hello',
  value3: function print() {

    return ("Are we having " + someFunction() + "?");

   }

};


function someFunction() {

  return "fun";

}

function anotherFunction () {

  return "NOT";

}

//console.log(someObject.value3());

module.exports = {
  someObject: someObject
}

