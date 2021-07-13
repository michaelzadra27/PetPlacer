const Matches = {

    compareArray: async (arr1, arr2, allMatches = []) =>{

        const parsedArr1 = JSON.parse(JSON.parse(arr1))
        const parsedArr2 = JSON.parse(JSON.parse(arr2))
        const arr3 = [...parsedArr1]
        const arr4 = [...parsedArr2]
        // console.log("unfilterd")
        // console.log(arr3)
        // console.log(arr4)
        //const arr5 = [...arr3, ...arr4]
        const unique3 = Matches.getUniqueListBy(arr3, 'like')
        const unique4 = Matches.getUniqueListBy(arr4, 'like')
        // console.log("filtered")
        // console.log(unique3)
        // console.log(unique4)

       // merges the all the matches found by findMatches into one array
        unique3.forEach(i =>{
            allMatches =[...allMatches, ...Matches.findMatches(i, unique4)]
        })
        
        const filteredMatches = Matches.getUniqueListBy(allMatches, 'like')
        // console.log("matched and filtered")
        // console.log(filteredMatches)
        return filteredMatches
    },

    getUniqueListBy: (arr, key)=> {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    },
    
    //compares a specific index, finds all matches to that index and merges them into an array
    findMatches:(index, arr2, indexMatches = [])=>{
        arr2.forEach(i => {
            //console.log(i.like)
            if(i.like == index.like){
                //console.log("match found")
                //console.log(i)
                indexMatches = [...indexMatches, index]
                // console.log(indexMatches)
                // console.log("============================")
            }
        });
        //console.log(indexMatches)
        return (indexMatches)
    },
}


// a test for how the function should work. this should return [ 2, 3, 4 ]
// let arr1 = [1,2,2,2,3,4,4,4,]
// let arr2 = [2,3,4,4,4,5,6]
// console.log(Matches.compareArray(arr1, arr2))

module.exports= Matches;

