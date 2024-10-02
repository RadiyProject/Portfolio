import {
    Link
} from "react-router-dom";
import ChangeLanguageButton from "../Elements/Buttons/ChangeLanguageButton";

function Header(props) {
    let language = require(`../Localizations/Pages/Header/${props.lang}.json`);
    if (language === undefined)//Default if json is not loaded or doesnt exist
        return <div>...</div>;

    return <div>
        <li>
            <Link to={`/about?lang=${props.lang}`}>{language.aboutme}</Link>
        </li>
        <li>
            <Link to={`/users?lang=${props.lang}`}>{language.users}</Link>
        </li>
        <ChangeLanguageButton lang={props.lang} location={props.location}/>
    </div>;
}

export default Header;