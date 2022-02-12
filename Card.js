export default class Card {
    constructor(url, isClosed) {
        this._image = url;
        this._shirt = "./images/type_1/shirt.svg";
        this._closed = isClosed;
    }

    _getTemplate() {
        const template = document
        .querySelector("#cells__cell").content
        .querySelector(".cells__cell")
        .cloneNode(true);
        
        return template;
    }

    getElement() {
        return this._element;
    }

    toggleCard() {
        this._closed = !this._closed;
    }

    generateCard() {
        this._element = this._getTemplate();
        if (this._closed) {
            this._element.classList.add("cell__closed");
        } else {
            this._element.classList.remove("cell__closed");
            this._element.style.backgroundImage = `url("${this._image}"`;
        }
        return this._element;
    }
}