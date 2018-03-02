//A simple example of an object in javascript

var pencil = {

    //Atributes
    length:15,
    color:'yellow',

    //Functions
    write() {
        console.log('Writing');
    },
    erase() {
        console.log('Erasing');
    }
    /*We can use others forms too
    
    erase: function() {
        console.log('Erasing');
    }

    erase: () => {
        console.log('Erasing');
    }
    */

}
//We can use like that
pencil.color;
pencil.erase();

//Or, like that
pencil['color'];
pencil['erase']();

//In the second way, we often use to find a property dynamically
var property = 'color';
pencil[property];

property = 'erase';
pencil[property]();