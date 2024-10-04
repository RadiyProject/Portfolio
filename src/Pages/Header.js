import {
    Link
} from "react-router-dom";
import ChangeLanguageButton from "../Elements/Buttons/ChangeLanguageButton";
import ListItemText from '@mui/material/ListItemText';

function Header(props) {
    let language = require(`../Localizations/Pages/Header/${props.lang}.json`);
    if (language === undefined)//Default if json is not loaded or doesnt exist
        return <div>...</div>;

    return <div>
        <ListItemText>
            <Link to={`/about?lang=${props.lang}`}>{language.aboutme}</Link>
        </ListItemText>
        <ListItemText>
            <Link to={`/api/test?lang=${props.lang}`}>{language.users}</Link>
        </ListItemText>
        <ChangeLanguageButton lang={props.lang} location={props.location}/>
    </div>;
}

export default Header;