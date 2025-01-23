import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isQuizToBeStarted: boolean = false;
  onStart() {
    this.isQuizToBeStarted = !this.isQuizToBeStarted;
  }
}
