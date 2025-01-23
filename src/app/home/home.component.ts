import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="Titre">
      <h1>Découvre ta chanson de Queen!</h1>
    </div>
    <div class="layout">
      <aside class="side left">
        <p>Créé par Yussera Sebdaoui</p>
      </aside>
    
      <main class="content">
        <button class="start-btn" routerLink="/quiz">Commencer le quiz</button>
        <div class="description">
          <p>
            Réponds à quelques questions simples et découvre quelle chanson iconique de Queen reflète le mieux ta personnalité!
          </p>
        </div>
      </main>
    
      <aside class="side right">
        <p>Créé par Yussera Sebdaoui</p>
      </aside>
    </div>
  `
})
export class HomeComponent {}