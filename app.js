function convert(){
    let rupees = parseInt(document.querySelector('input').value);
    if (document.querySelector('#unit').value =="D"){
       
        let  dollars = Math.round(rupees /156.53) ;
        console.log (dollars)
        document.querySelector('span').innerHTML ="The amount in Dollar is " +dollars+' dollar';
    }
    else if (document.querySelector('#unit').value =="R"){     
        let  riyals = Math.round(rupees /41.83) ;
        document.querySelector('span').innerHTML = "The amount in Saudi-Riyal is " +riyals+' riyal';
    }
    else if (document.querySelector('#unit').value =="P"){    
        let  pounds = Math.round(rupees / 216.63);
        document.querySelector('span').innerHTML ="The amount in Pounds is " +pounds+' pound';
    } 
} 

   