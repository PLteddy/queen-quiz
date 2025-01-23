import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { QuizComponent } from './app/quiz.component';
import { ResultComponent } from './app/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});