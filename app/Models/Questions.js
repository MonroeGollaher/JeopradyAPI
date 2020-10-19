export default class Question {
    constructor(data) {
        this.answer = data.answer
        this.question = data.question
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value shadow-lg">
            <h3>Answer:</h3>
            <h5>"${this.answer}"</h5>
            <h3>Question:</h3>
            <h5>"${this.question}"</h5>
        </div>
        `
    }
}
