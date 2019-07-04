/* in this example, for when i represents an integer, the loop will continue until to 
increment by minus one till i represents an integer greater than minus one, then the loop finishes */

/*for(i=9;i>-1;i--){
    console.log(i);
}*/


//generating random numbers between different integers


//create an array that lists favorite films, create a for loop to cycle through the array



/* for loop
let favFilms= [
    "Dr.Strange",
    "Get out",
    "Baby boy",
    "Justice League"
];
for (favFilmsIndex = 0; favFilmsIndex<favFilms.length;favFilmsIndex++){
    console.log(favFilms[favFilmsIndex]);
}*/

// while loops
/* while using previous for loop */
function filmchecker(filmlist) {
    

    for(i in filmlist){
        if(filmlist[i]!="Dr.Strange"){
            console.log("I'd prefer to watch Dr.Strange")
        } else {
            console.log("finally")
            break
        }
    }


let favFilms= [
    "Dr.Strange",
    "Get out",
    "Baby boy",
    "Justice League"
];
if (favFilms[2]!= filmCheck){
    console.log(`${favFilms[2]}? I'd prefer to watch Dr.Strange`)
    favFilms.shift()
    favFilms.push("Dr.Strange")
}
if (favFilms[2]!= filmCheck){
    console.log(favFilms[2])
}

//for (favFilmsIndex = 0; favFilmsIndex<favFilms.length;favFilmsIndex++){
   // console.log(favFilms[favFilmsIndex]);

//}