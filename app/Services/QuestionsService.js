import { ProxyState } from "../AppState.js";
import Question from "../Models/Questions.js";
import { api } from "./AxiosService.js";

class QuestionService {
  constructor(){
    console.log("Hello from Questions Service")
    this.getQuestion()
  }

  getQuestion() {
    api.get().then(res => {
      console.log("data returned!", res.data)
      ProxyState.question = new Question(res.data[0])
      // console.log(question.answer)
    })
  }

  getAnswer(){
    api.get().then(answer => {
      
    })
  }
}

export const questionService = new QuestionService();

