import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService, Question } from './quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="Titre">
      <h1>Quiz Queen</h1>
    </div>
    <div class="layout">
      <aside class="side left">
        <p>Question {{ currentQuestion + 1 }}/{{ questions.length }}</p>
      </aside>
      
      <main class="content">
        <div class="question-container">
          <h2>{{ questions[currentQuestion].text }}</h2>
          <div class="answers">
            <!-- Loop through the answers for the current question -->
            @for (answer of questions[currentQuestion].answers; track $index) {
              <button 
                class="answer-btn"
                (click)="submitAnswer($index)">
                {{ answer }}
              </button>
            }
          </div>
        </div>
      </main>
      
      <aside class="side right">
        <p>Question {{ currentQuestion + 1 }}/{{ questions.length }}</p>
      </aside>
    </div>
  `
})
export class QuizComponent {
  questions: Question[]; // Array to hold the quiz questions
  currentQuestion = 0; // Index of the current question

  constructor(
    private quizService: QuizService, // Inject the QuizService
    private router: Router // Inject the Router for navigation
  ) {
    // Fetch the questions from the QuizService
    this.questions = this.quizService.getQuestions();
    // Reset the scores in the QuizService
    this.quizService.resetScores();
  }

  // Method to handle answer submission
  submitAnswer(answerIndex: number) {
    // Submit the answer to the QuizService
    this.quizService.submitAnswer(this.currentQuestion, answerIndex);
    
    // Check if there are more questions
    if (this.currentQuestion < this.questions.length - 1) {
      // Move to the next question
      this.currentQuestion++;
    } else {
      // Navigate to the result page if all questions are answered
      this.router.navigate(['/result']);
    }
  }
}