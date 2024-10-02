//PascalCasing for function components of a React App
function Message(){

    //JSX: Javascript XML
    const name = 'Eric';
    if (name)
        return <h1>Hello {name}!</h1>
    return <h1>Hello World!</h1>
}

export default Message