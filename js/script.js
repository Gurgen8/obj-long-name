//ex----

var cars = {
3: {
name: "volvo",
price: 2500000,
},
4: {
name: "toyota",
price: 40000,
},
0: {
name: 'bmw',
price: 5000,
},

1: {
name: 'mersedes',
price: 4000,
},
2: {
name: 'audi',
price: 1000000,

},

}


///// long---string    /////



function name_length(){
    var res = 0;
    var index = null;
    for(var i in this){
       if(this[i].name.length > res){
          res = this[i].name.length;
          index = i;
       }
    }
    return this[index].name;
 }
 console.log(name_length.call(cars));