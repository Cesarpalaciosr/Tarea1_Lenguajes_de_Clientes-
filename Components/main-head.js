
class main_head extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
        <page-menu></page-menu>
        </header>
        `   
    }
}

window.customElements.define("main-head",main_head);