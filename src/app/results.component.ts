import { Component } from '@angular/core';
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
        <p>Ta chanson Queen</p>
      </aside>
      
      <main class="content">
        <div class="result-container">
          <h2>Ta chanson Queen est:</h2>
          <p class="result-song">{{ result }}</p>
          <button class="start-btn" routerLink="/">Recommencer le quiz</button>
        </div>
      </main>
      
      <aside class="side right">
        <p>Ta chanson Queen</p>
      </aside>
    </div>
  `
})
export class ResultComponent {
  result: string;

  constructor(private quizService: QuizService) {
    this.result = this.quizService.getResult();
  }
}