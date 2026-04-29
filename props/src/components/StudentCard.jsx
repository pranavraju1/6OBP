import StudentDetail from './StudentDetail'

const StudentCard = ({id,...props}) => {
    console.log(props)
  return (
    <div>
        {/* <StudentDetail name={name} age={age} gender={gender} city={city}/>       */}
        <h3>Id: {id}</h3>
        <StudentDetail {...props}/>      
    </div>
  )
}

export default StudentCard
