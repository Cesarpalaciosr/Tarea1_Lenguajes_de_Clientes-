class main_head extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
        <page-menu></page-menu>
        <img class="header_img" src="https://pngimg.com/uploads/pokemon/pokemon_PNG148.png" alt="imagen de pikachu"/>
        </header>
        `   
    }
}

window.customElements.define("main-head",main_head);