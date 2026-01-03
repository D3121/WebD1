var rect = {
    perimeter: (x,y) => 2*(x+y),
    area: (x,y) => (x*y)
}

function solveRect(l,b){
    console.log("solving for rectangle width x="+l+" and b ="+b);

    if(l <=0 || b <=0){
        console.log("l or b should be greater than 0");
    }else{
        console.log("Perimeter: "+rect.perimeter(l,b));
        console.log("Area: "+rect.area(l,b));
    }
}


solveRect(2,32)

solveRect(13212,2322)