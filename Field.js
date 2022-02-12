import { wishes } from "./wishes.js";

export default class Field {
    constructor() {
        this._field = [];
        this._globalCounter = 0;
        this._openedCounter = 0;
        this._openedOne;
        this._openedTwo;
    }

    _blockOpening() {
        document.querySelector(".blocking").classList.remove("hidden");
    }

    _allowOpening() {
        document.querySelector(".blocking").classList.add("hidden");
    }

    _renderField() {
        if (this._globalCounter === 18) {
            // Generation of wish from wishes list

            document.querySelector(".gameboard").classList.add("hidden");
            
            const wish = wishes[Math.floor(Math.random()*wishes.length)];

            document.querySelector(".wish").textContent = wish;
        } else {
            const fieldElement = document.querySelector(".cells");
            fieldElement.textContent = "";
            this._field.forEach( (card, index) => {
                const newItem = card.generateCard();
                card.getElement().addEventListener("click", () => {
                    this.toggleCard(this._field[index]);
                    this._openedCounter += 1;
                    if (this._openedCounter === 1) {
                        this._openedOne = this._field[index];
                    }
                    if (this._openedCounter === 2) {
                        this._openedTwo = this._field[index];
                        if (JSON.stringify(this._openedOne) !== JSON.stringify(this._openedTwo)) {
                            this._blockOpening();
                            setTimeout(() => {
                                this._openedOne.toggleCard();
                                this._openedTwo.toggleCard();
                                this._renderField();
                                this._allowOpening();
                            }, 1000)
                        } else {
                            this._globalCounter += 1;
                            this._renderField();
                        }
                        this._openedCounter = 0;
                    }
                })
                fieldElement.append(newItem);
            });
        }
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