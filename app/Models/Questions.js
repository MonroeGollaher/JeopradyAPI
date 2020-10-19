export default class Question {
    constructor(data) {
        this.answer = data.answer
        this.question = data.question
    }

    get Template() {

        return /*html*/`
        <div class="col-8 card p-2 mt-5 mb-2 value shadow-lg rounded">
            <h3>Answer:</h3>
            <h5>"${this.answer}"</h5>
            <div class="row text-center justify-content-center">
                <div class="col-6 mb-4">
                <a href="javascript:;" onClick="document.getElementById('answer').style.display='block';"><button type="button" class="btn btn-primary">Reveal Question</button></a>
                </div>
            </div>
            <h3>Question:</h3>
            <h5 id="answer" style="display:none;">"${this.question}"</h5>
        </div>
        `
    }
}
