import './Button.scss';

function Button({ onClick, buttonText }) {
  return (
    <button className="custom-button custom-button--link" onClick={onClick}>{ buttonText }</button>
  )
}

export default Button