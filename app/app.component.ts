import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemo } from "./data-binding-demo/data-binding-demo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DataBindingDemo]
})
export class AppComponent {
  title = 'prelim_lab_data_binding';
}
