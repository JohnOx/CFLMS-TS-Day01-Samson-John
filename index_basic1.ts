/* let i = 1;
while ( i < 11){
    for (let j = 1; j < 11; j +=1) {

        

        let c : number = i * j;
        document.write(i + ' X '+ j + " = " + c + '<br>');
        
    };
    i++;
    document.write("<hr><hr>")
} */
    for (let j = 1; j < 11; j +=1) {

 
        for(let i = 1; i < 11; i+=1){
            document.write(j + ' X '+ i + " = " + (j*i) + '<br>');
        }
        document.write("<hr>")
    };


    // Code for basic exercise 2

    /* let name = [];

    for (let i = 0; i < 6 ; i++) {

        name.push(function(){
            document.write("John[i]");
        })
    }
        name.forEach(element => {
            element()
        }); */
    



    