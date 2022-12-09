{
    const welcome = () => {
        console.log("Cześć Wszystkim! Poniżej moja praca domowa z M05");    
    };

    const remuveLogoFirmy = () => {
        const logofirmy = document.querySelector(".js-companyLogo");
        logofirmy.remove();
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body")
        const themeName2 = document.querySelector(".js-themeName2")
    
        body.classList.toggle("js-body--dark");
        themeName2.innerText = body.classList.contains("js-body--dark") ? "jasny" : "ciemny";
    };

    const toggleHeader = () => {
        const Header = document.querySelector(".sectionHome__header");
    
        Header.classList.toggle("js-displayNone");
    };

    const init = () => {
        const remuveLogoFirmyButton = document.querySelector(".js-button1"); 
        remuveLogoFirmyButton.addEventListener("click", remuveLogoFirmy); 

        const changeBackgroundButton = document.querySelector(".js-button2"); 
        changeBackgroundButton.addEventListener("click", toggleBackground);

        const changeHeaderButton = document.querySelector(".js-button3"); 
        changeHeaderButton.addEventListener("click", toggleHeader);
        
        welcome();
    };

    init();
}
