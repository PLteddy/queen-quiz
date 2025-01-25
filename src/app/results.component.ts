import { Component,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="Titre">
      <h1>Ton résultat</h1>
    </div>
    <div class="layout">
      <aside class="side left">
        <p>Ta chanson de Queen</p>
      </aside>
      <main class="content">
        <div class="result-container">
          <h2>Ta chanson de Queen est:</h2>
          <img [src]="imagePath" alt="{{ result }}">
          <p class="result-song">{{ result }}</p>
          <button class="start-btn" routerLink="/">Recommencer le quiz</button>
        </div>
      </main>
      
      <aside class="side right">
        <p>Ta chanson de Queen</p>
      </aside>
    </div>
    <footer>
      <p>Ce quiz a été créé dans le cadre d’un projet personnel pour me familiariser avec Angular. Les musiques de Queen mentionnées dans ce quiz, telles que Killer Queen ou Bohemian Rhapsody, sont des œuvres iconiques qui ne m'appartiennent pas et restent la propriété exclusive de leurs ayants droit.
      Si vous souhaitez en savoir plus sur mes projets ou entrer en contact avec moi, n’hésitez pas à visiter mon profil LinkedIn :
      Mon LinkedIn</p>
    </footer>
  `
})
export class ResultComponent implements OnInit {
  result: string = '';
  imagePath: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    // Obtenir le résultat final
    this.result = this.quizService.getResult();

    // Obtenir le chemin de l'image associé
    this.imagePath = this.quizService.getImageForResult(this.result);
  }
}