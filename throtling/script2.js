const debounce = (fn, delay) =>{
    let timerId;

    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args)
        }, delay)
    }
}


const search = (query) => {
    console.log(`Searching for query`, query)
}

const searchWithDebounce = debounce(search, 1000)
searchWithDebounce("H")
searchWithDebounce("He")
searchWithDebounce("Hel")
searchWithDebounce("Hell")
searchWithDebounce("Hello")
searchWithDebounce("Hello ")
searchWithDebounce("Hello World")