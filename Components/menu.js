class menu extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="hamburger">
            <div id="ham" stat="open" class="hamburger-in" onclick="menuOnClick()>
                <div id="ham1"></div>
                <div id="ham2"></div>
                <div id="ham3"></div>
            </div>
            <nav class="nav" id="nav">
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                </ul>
            </nav> 
        </div>`
    }
}

window.customElements.define("page-menu",menu);