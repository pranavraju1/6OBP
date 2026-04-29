// task: if isLoading is true show Loding...
// if error is true show show Error 
// if length of array is greater than 0 show the data in <h3>
// else show No data

const Test = ({isLoading=false, error=false, user=[1,2,3,4,5]}) => {

    
  return (
    <div>
        {isLoading && <h3>Loading</h3>}
        {error && <h3>Error</h3>}
        {user.length > 0 ? user.map((item, idx)=><h3 key={idx}>{item}</h3>): <h3>No Data</h3>}
        {/* {user.map((item)=><h3>{item}</h3>)} */}
    </div>
  )
}

export default Test
