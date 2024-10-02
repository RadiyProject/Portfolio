function Users(props) {
    let language = require(`../Localizations/Pages/Users/${props.lang}.json`);

    if (language === undefined)//Default if json is not loaded or doesnt exist
        return <h2>...</h2>
        
    return <h2>{language.title}</h2>;
}

export default Users;