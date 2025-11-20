import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})

export class DataBindingDemo {
  title='My First App!';
  description= 'This is my new Angular Application';
  textColor='blue';
  isHighlighted= true;
  yourName=' Gonzales, Samantha Wayne D. ';
  message = 'Data Binding Demostration ';
  imageURL = 'https://images.seeklogo.com/logo-png/33/2/angular-logo-png_seeklogo-331629.png';
  w = 50;
  h = 50;
  altText = "Angular Logo";

  count = 0;
  incremenet() {
    this.count++;
  }
  decrement(){
    this.count--;
  }
}
