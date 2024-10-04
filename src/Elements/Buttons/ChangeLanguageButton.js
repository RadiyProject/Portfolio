import {
    useNavigate
} from "react-router-dom";
import Button from '@mui/material/Button';


function changeQueryParams(location, param, value) {
    let url = new URL(location);
    let params = new URLSearchParams(url.search);
    params.set(param, value);
    return "?" + params.toString();
}

function onClick(navigate, location, curLang) {
    let newLang;
    switch (curLang) {
        case "eng":
            newLang = "ru";
            break;
        case "ru":
            newLang = "eng"
            break;
        default:
            newLang = "ru";
            break;
    }
    navigate(changeQueryParams(location, "lang", newLang));
}

function ChangeLanguageButton(props) {
    let navigate = useNavigate();

    let language = require(`../../Localizations/Elements/Buttons/ChangeLanguageButton/${props.lang}.json`);
    return <Button variant="contained" onClick={() => onClick(navigate, props.location, props.lang)}>
        {language.name}
    </Button>;
}
export default ChangeLanguageButton;