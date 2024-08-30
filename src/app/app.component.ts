import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = 'Altuntas';
  items= [
    { description: "Kahvalti", action: "No"},
    { description: "Sinema", action: "No"},
    { description: "Spor", action: "No"},
    { description: "Ders Calisma", action: "No"}
  ]
}
