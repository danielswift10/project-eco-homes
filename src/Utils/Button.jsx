const Button = ({title, type, classname}) => {
    return ( 
        <button type={type} className={classname}>
            <p>{title}</p>
        </button>
     );
}
 
export default Button;