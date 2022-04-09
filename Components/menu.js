class menu extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="hamburger">
            <div id="ham" stat="open" class="hamburger-in" onclick="menuOnClick()">
                <div id="ham1" class = "bar"></div>
                <div id="ham2" class = "bar"></div>
                <div id="ham3" class = "bar"></div>
            </div>
            <nav class="nav" id="nav">
            <ul>
                <li><a href="#" onclick = "op1OnClick()">Planilla</a>
                    <option-panel></option-panel>
                </li>
                <li><a class = "resources" id = "resources" onclick = "op2OnClick()">Recursos</a></li>
                <li><a href="#" onclick = "op3OnClick()">Acerca de</a></li>
                <li><a href="#" onclick = "op4OnClick()">Contacto</a></li>
            </ul>
        </nav> 
        </div>
        `
    }
}

window.customElements.define("page-menu",menu);