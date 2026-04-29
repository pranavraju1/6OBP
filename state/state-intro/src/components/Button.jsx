
const Button = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button

// For parent to child communication we pass props
// for a child to communicate with the parent we can also pass prop but it should be a eventlistner
