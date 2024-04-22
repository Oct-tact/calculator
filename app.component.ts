import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claculator';

  // result: number = 0;
  // num1!: number;
  // num2!: number;
  
  // add() {
  //   this.result = this.num1 + this.num2;
  // }
  
  // subtract() {
  //   this.result = this.num1 - this.num2;
  // }
  
  // multiply() {
  //   this.result = this.num1 * this.num2;
  // }
  
  // divide() {
  //   if (this.num2 === 0) {
  //     this.result = NaN; // Handle division by zero
  //   } else {
  //     this.result = this.num1 / this.num2;
  //   }

  result: number = 0;
  currentNumber: string = '';
  previousNumber: string = '';
  operator: string = '';
  
  // Function to append digits to the current number
  appendNumber(num: number) {
    this.currentNumber += num.toString();
  }

  // Function to clear the current number
  clear() {
    this.currentNumber = '';
    this.result = 0;
    this.previousNumber = '';
    this.operator = '';
  }

  // Function to perform addition
  add() {
    this.operator = '+';
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  // Function to perform subtraction
  subtract() {
    this.operator = '-';
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  // Function to perform multiplication
  multiply() {
    this.operator = '*';
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  // Function to perform division
  divide() {
    this.operator = '/';
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  // Function to perform calculation based on operator
  equals() {
    let prev = parseFloat(this.previousNumber);
    let curr = parseFloat(this.currentNumber);

    switch (this.operator) {
      case '+':
        this.result = prev + curr;
        break;
      case '-':
        this.result = prev - curr;
        break;
      case '*':
        this.result = prev * curr;
        break;
      case '/':
        this.result = prev / curr;
        break;
    }

    // Reset current number and operator
    this.currentNumber = this.result.toString();
    this.operator = '';
  }
}
