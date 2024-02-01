import './Button.css'

// eslint-disable-next-line react/prop-types
function Button({onClick, text, className}) {
  return (
    <button onClick={onClick} className={`btn text-white ${className} `} >{text}</button>
  )
}

export default Button
