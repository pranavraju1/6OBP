import React from "react"

export const Test = () =>{
    return(
        <>
            <h1>Test</h1>
            <h2>Test2</h2>
            <input type="text" />
        </>
        
    )
}
// fragments <></>
// always close your tags in JSX


// use className instead of class
// and htmlFor instead of for
export const TestTwo = () => {
    return(
        <form className="some-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" className="form-input" />
        </form>
    )
}




// export const TestWithooutJSX = () =>{
//     // return React.createElement("div", {id: "container"}, "<h1>Test Without JSX</h1>")
//     return React.createElement("div", {id: "container"}, 
//         React.createElement("h1", null, "Test Without JSX")
//     )

// }

