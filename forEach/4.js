function addKeyAndValue(arr,title,str){
    arr.forEach((element,index,array) => {
        element.title=str
    });
    console.log(arr)

}
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')