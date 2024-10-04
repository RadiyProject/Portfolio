import myPhoto from "../Images/me.jpg";

function AboutMe(props) {
    let language = require(`../Localizations/Pages/AboutMe/${props.lang}.json`);

    if (language === undefined)//Default if json is not loaded or doesnt exist
        return <h2>...</h2>;

    return <div>
        <h1>{language.title}</h1>
        <img src={myPhoto} alt={language.title} height="350"></img>
        <p>Программист, музыкант. Разрабатываю Backend-части веб-приложений, имею опыт работы с PHP, 
            Symfony, C#, ASP .NET Core, Doctrine, Entity Framework Core. Умею работать с Docker'ом, 
            Dockerfile'ами, docker-compose'ами, пользуюсь системой контроля версий Git, работал как с обычными
            HTTP, так и с длинными (в рамках SignalR), WebSocket'ами, работал с протоколом WebDAV с целью 
            загрузки бэкапов на Яндекс Диск. Применял и применяю брокер сообщений RabbitMQ.
            Пишу собственные треки, свожу их.
        </p>
        <h1>{language.contacts}</h1>
        <h2><a href="https://vk.com/radiyx" target="_blank" rel="noreferrer">VK</a></h2>
        <h2><a href="https://t.me/radiyx" target="_blank" rel="noreferrer">Telegram</a></h2>
        <h2><a href="https://github.com/RadiyProject" target="_blank" rel="noreferrer">GitHub</a></h2>
    </div>;
}

export default AboutMe;