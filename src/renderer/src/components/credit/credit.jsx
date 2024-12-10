import RakhaImage from '../../assets/img/rakha_fadhilah.jpeg';
import "./credit.css"

function Credit({isonupperframe}) {

    const openCreditLink = () => {
        const url = "https://github.com/rakhabro/fozzle";
        window.api.openExternal(url);
    };

    return(
        <div className="credit" onClick={openCreditLink}
            style= {
                isonupperframe
                ? {position: "unset"}
                : null
            }
        >
            {!isonupperframe && <img src={RakhaImage} alt="" />}
            <div>
                <p>Developed by Rakha Fadhilah</p>
            </div>
        </div>
    );
}

export default Credit;