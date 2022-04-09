class option_panel extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
                    <nav class="option-panel" id="option-panel">
            <ul>
                <li><a href="#" onclick = "message()">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav> 
        `
    }
}

window.customElements.define("option-panel",option_panel);