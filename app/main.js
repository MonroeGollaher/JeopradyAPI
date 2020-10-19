import QuestionsController from "./Controllers/QuestionsController.js";


class App {
  questionController = new QuestionsController();
}

window["app"] = new App();
