import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  document.getElementById("app").innerHTML = ProxyState.question.Template
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("question", _draw);
    _draw()
  }

  getQuestion(){
    questionService.getQuestion()
  }

  getAnswer(){
    questionService.getAnswer()
  }

}
