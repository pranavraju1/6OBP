
const CardWrapper = ({title, children}) => {

    // console.log(children)


  return (
    <div>
      <h2>title: {title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default CardWrapper
