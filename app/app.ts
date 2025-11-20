import { Component, signal } from '@angular/core';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';
imports:[RouterOutlet, DataBindingDemo]
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
