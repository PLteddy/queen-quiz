import { Injectable } from '@angular/core';

// Interface pour représenter une question de quiz
export interface Question {
  text: string; // Texte de la question
  answers: string[]; // Liste des réponses possibles
  scores: { [key: string]: number }[]; // Scores associés à chaque réponse
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // Liste des questions de quiz
  private questions: Question[] = [
    {
      text: "Comment décrirais-tu ton énergie au quotidien?",
      answers: [
        "Explosive et dynamique",
        "Calme et posée",
        "Changeante comme les vagues",
        "Passionnée et intense"
      ],
      scores: [
        { "We Will Rock You": 3, "Don't Stop Me Now": 4 }, //En gros là sur la reponse 1 si on a répondu la a et bah on gagne 3pts pour la première musique et 4 pts pour l'autre
        { "Love of My Life": 4, "These Are the Days of Our Lives": 3 },
        { "Bohemian Rhapsody": 4, "The Show Must Go On": 2 },
        { "Somebody to Love": 4, "Who Wants to Live Forever": 3 }
      ]
    },
    {
      text: "Quelle est ta plus grande motivation dans la vie?",
      answers: [
        "Le succès et la reconnaissance",
        "L'amour et les relations",
        "La liberté et l'expression de soi",
        "Laisser une trace dans l'histoire"
      ],
      scores: [
        { "We Are the Champions": 4, "Don't Stop Me Now": 3 },
        { "Love of My Life": 4, "Somebody to Love": 3 },
        { "I Want to Break Free": 4, "Bohemian Rhapsody": 3 },
        { "The Show Must Go On": 4, "Who Wants to Live Forever": 3 }
      ]
    }
  ];

  // Scores initiaux pour chaque chanson
  private scores: { [key: string]: number } = {
    "Bohemian Rhapsody": 0,
    "We Will Rock You": 0,
    "Don't Stop Me Now": 0,
    "Somebody to Love": 0,
    "Love of My Life": 0,
    "The Show Must Go On": 0,
    "I Want to Break Free": 0,
    "We Are the Champions": 0,
    "These Are the Days of Our Lives": 0,
    "Who Wants to Live Forever": 0
  };

  // Méthode pour obtenir les questions de quiz
  getQuestions(): Question[] {
    return this.questions;
  }

  // Méthode pour soumettre une réponse et mettre à jour les scores
  submitAnswer(questionIndex: number, answerIndex: number) {
    const scores = this.questions[questionIndex].scores[answerIndex];
    for (const [song, score] of Object.entries(scores)) {
      this.scores[song] += score;
    }
  }

  // Méthode pour obtenir le résultat final (la chanson avec le score le plus élevé)
  getResult(): string {
    return Object.entries(this.scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }

  // Méthode pour réinitialiser les scores
  resetScores() {
    for (const song in this.scores) {
      this.scores[song] = 0;
    }
  }
}