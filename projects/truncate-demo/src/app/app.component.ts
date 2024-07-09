import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TruncatePipe } from 'ng-truncate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TruncatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  toggleText() {
    this.showFullText = !this.showFullText;
  }
  title = 'truncate-demo';
  someLongText = 'This is some long text that will be truncated.';
  showFullText: boolean = false;
}
