var obj ={
    name: 'Haluk YILDIZ',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}
obj.greet();
obj.greet.call({name: 'Tuba YILDIZ'});
obj.greet.apply({name: 'Tuba YILDIZ'});