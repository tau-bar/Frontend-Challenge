import './custom-button.styles.scss'

const CustomButton = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className = "custom-button">{ children }</div>
    )
}

export default CustomButton;