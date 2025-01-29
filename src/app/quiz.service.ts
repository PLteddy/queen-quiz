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
      text: "Si tu étais un style vestimentaire, lequel choisirais-tu ?",
      answers: [
        "Élégant et chic, avec des touches de luxe.",
        "Classique, un look rétro mais intemporel.",
        "Décontracté, avec des vêtements confortables et un brin excentriques.",
        "Théâtral, audacieux et plein d’extravagance."
      ],
      scores: [
        { "Killer Queen": 4}, //En gros là sur la reponse 1 si on a répondu la a et bah on gagne 3pts pour la première musique et 4 pts pour l'autre
        { "Good Old-Fashioned Boy": 4 },
        { "Lazing on a Sunday Afternoon": 4 },
        { "Bohemian Rhapsody": 4}
      ]
    },
    {
      text: "Quel est ton état d’esprit en général?",
      answers: [
        "Confiant et plein d’assurance.",
        "Tourmenté et introspectif, mais créatif.",
        "Nostalgique et rêveur.",
        "Détendu, prêt à profiter d’un moment tranquille."
      ],
      scores: [
        { "Killer Queen": 4 },
        { "Bohemian Rhapsody": 4 },
        { "Good Old-Fashioned Boy": 4},
        { "Lazing on a Sunday Afternoon": 4}
      ]
    },
    {
      text: "Quel paysage te fait rêver ?",
      answers: [
        "Une plage tranquille avec des vagues douces.",
        "Une montagne mystérieuse sous un ciel étoilé.",
        "Un jardin anglais paisible et verdoyant.",
        "Une grande ville animée et pleine de lumière."
      ],
      scores: [
        { "Killer Queen": 4 },
        { "Bohemian Rhapsody": 4 },
        { "Good Old-Fashioned Lover Boy": 4 },
        { "Lazing on a Sunday Afternoon": 4 }
      ]
    },
    {
      text: "Quelle est ta devise dans la vie ?",
      answers: [
        "Tout ce que je fais doit briller.",
        "Être unique et rester fidèle à moi-même.",
        "Profiter des plaisirs simples de la vie.",
        "Vivre chaque jour comme un dimanche."
      ],
      scores: [
        { "Killer Queen": 4 },
        { "Bohemian Rhapsody": 4 },
        { "Good Old-Fashioned Lover Boy": 4 },
        { "Lazing on a Sunday Afternoon": 4 }
      ]
    },
    {
      text: "Que fais-tu lorsque tu te sens stressé ?",
      answers: [
        "Je me plonge dans un projet créatif pour me changer les idées.",
        "Je chante ou écoute de la musique à fond.",
        "Je prends le temps de me recentrer, une tasse de thé à la main.",
        "Je fais une sieste ou me détends sans pression."
      ],
      scores: [
        { "Bohemian Rhapsody": 4 },
        { "Killer Queen": 4 },
        { "Good Old-Fashioned Lover Boy": 4 },
        { "Lazing on a Sunday Afternoon": 4 }
      ]
    },
    {
      text: "Quelle qualité te représente le mieux ?",
      answers: [
        "Charismatique et sûr(e) de moi.",
        "Imaginatif(ve) et imprévisible.",
        "Romantique et charmant(e).",
        "Décontracté(e) et joyeux(se)."
      ],
      scores: [
        { "Killer Queen": 4 },
        { "Bohemian Rhapsody": 4 },
        { "Good Old-Fashioned Lover Boy": 4 },
        { "Lazing on a Sunday Afternoon": 4 }
      ]
    },
    {
      text: "Comment gères-tu les imprévus ?",
      answers: [
        "Avec assurance et créativité, je trouve toujours une solution.",
        "Je panique un peu mais je m’en sors grâce à ma débrouillardise.",
        "Je prends du recul pour réfléchir avant d’agir.",
        "Je les accepte comme ils viennent, en restant détendu."
      ],
      scores: [
        { "Killer Queen": 4 },
        { "Bohemian Rhapsody": 4 },
        { "Good Old-Fashioned Lover Boy": 4 },
        { "Lazing on a Sunday Afternoon": 4 }
      ]
    }
  ];

  // Scores initiaux pour chaque chanson
  private scores: { [key: string]: number } = {
    "Bohemian Rhapsody": 0,
    "Killer Queen": 0,
    "Good Old-Fashioned Lover Boy": 0,
    "Lazing on a Sunday Afternoon": 0,
  };

  // Méthode utilitaire pour mélanger un tableau
  private shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Méthode pour obtenir les questions de quiz avec ordre aléatoire
  getQuestions(): Question[] {
    return this.shuffle(
      this.questions.map(question => ({
        ...question,
        answers: this.shuffle([...question.answers]), // Mélange les réponses
        scores: [...question.scores]
      }))
    );
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

  // Méthode pour obtenir le chemin de l'image en fonction du résultat
  getImageForResult(result: string): string {
    const imageMap: { [key: string]: string } = {
      "Bohemian Rhapsody": "assets/bohemianrhapsody.png",
      "Killer Queen": "assets/killerqueen.png",
      "Good Old-Fashioned Lover Boy": "assets/gofab.png",
      "Lazing on a Sunday Afternoon": "assets/lazingosa.png"
    };
    return imageMap[result] || 'assets/gofab.png'; // Chemin par défaut si le résultat n'est pas trouvé
  }
}