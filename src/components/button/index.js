function Button(props) {
    const {variant,title} = props
    return (
        <button className={variant}>{title}</button>
    )
}

export default Button
