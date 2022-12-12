function printSquareOfStars (n){

    for(i=0; i<n; i++){
        let right = "|";
        let left = "";


        let row = left+right
        for(j=0; j<i; j++)
        left += "*"
        right += "*"
        
        row += left+right
        console.log(`${row} `);
    }

}
printSquareOfStars(20)