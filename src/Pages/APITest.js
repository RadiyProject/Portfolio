function APITest(props) {
    let language = require(`../Localizations/Pages/APITest/${props.lang}.json`);

    if (language === undefined)//Default if json is not loaded or doesnt exist
        return <h2>...</h2>
        
    return <div>
        <h1>{language.title}</h1>
        <h1>Привет!</h1>
    </div>;
}

export default APITest;