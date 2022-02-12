export default class Field {
    constructor() {
        this._field = [];
    }

    _renderField() {
        const fieldElement = document.querySelector(".cells");
        fieldElement.textContent = "";
        this._field.forEach( (card, index) => {
            const newItem = card.generateCard();
            card.getElement().addEventListener("click", () => {
                this.toggleCard(this._field[index]);
            })
            fieldElement.append(newItem);
        });
    }

    toggleCard(card) {
        const cardIndex = this._field.indexOf(card);
        this._field[cardIndex].toggleCard();
        this._renderField();
    }

    closeCards() {
        this._field.forEach(card => {
            card.toggleCard();
        });
    }

    addItem(item) {
        this._field.push(item);
    }

    generateField() {
        this._renderField();
    }
}