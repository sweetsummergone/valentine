export default class Card {
    constructor(url) {
        this._image = url;
        this._shirt = "./images/type_1/shirt.svg";
        this._closed = false;
    }

    _getTemplate() {
        const template = document
        .querySelector("#cells__cell").content
        .querySelector(".cells__cell")
        .cloneNode(true);
        
        return template;
    }

    closeCard() {
        this._closed = true;
    }

    openCard() {
        this._closed = false;
    }

    generateCard() {
        const element = this._getTemplate()
        this._closed ? element.querySelector(".cell__image").src = this._shirt : element.querySelector(".cell__image").src = this._image;
        return element;
    }
}