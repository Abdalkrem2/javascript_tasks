function vowelCount(str){
    str=str.toLowerCase()
    str=str.split('')
    let result={}
    str.forEach(element => {
    
       if(element>='a'&&element<='z') 
       {
        if(result[element]){
            result[element]++;
        }else{
            result[element]=1
        }
       }
    
    });
    console.log(result)
}

vowelCount('Elie')