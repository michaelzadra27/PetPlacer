const Matches = {

    compareArray: (arr1, arr2, allMatches = []) =>{
        //merges the all the matches found by findMatches into one array
        arr1.forEach(i =>{
            allMatches =[...allMatches, ...Matches.findMatches(i, arr2)]
        })
        let filteredMatches = [...new Set(allMatches)]
        return filteredMatches
    },
    
    //compares a specific index, finds all matches to that index and merges them into an array
    findMatches:(index, arr2, matches = [])=>{
        arr2.forEach(i => {
            if(i == index){
                matches = [index, ...matches]
            }
        });
        return (matches)
    },
}

// a test for how the function should work. this should return [ 2, 3, 4 ]
// let arr1 = [1,2,2,2,3,4,4,4,]
// let arr2 = [2,3,4,4,4,5,6]
// console.log(Matches.compareArray(arr1, arr2))

module.exports= Matches;

