import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  resumeCrafterWindow: Window | null | undefined;

  ngOnInit(): void {
    const iframe = document.querySelector('iframe');

    this.resumeCrafterWindow = iframe?.contentWindow;

    setTimeout(() => {
      this.sendDataToResumeCrafter({
        name: 'Manoj Reddy',
      });
    }, 5000);
  }

  sendDataToResumeCrafter(data: any): void {
    this.resumeCrafterWindow?.postMessage(data, 'http://localhost:50232/');
  }
}
