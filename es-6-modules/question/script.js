// you will create the function here 
// that filters the candidate

export function voteFilter(arr){
    let result = arr.filter((item)=>{
        if(item.age>18){
            return true
        }
    })

    return result 
}