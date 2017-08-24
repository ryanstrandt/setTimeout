import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  processing = 'processing...';
  disabled = false;
  input = [1,2,3,4,5,6,7,8,9,10];

  runProcess(){
    let n = 0;
    let timer = [];
    while(n != this.input.length){
      setTimeout((i)=>{
        // console.log(input[n]);
        this.processing = this.processing.concat(i.toString(),', ');
        console.log(this.processing)
        console.log(i.toString());
      },500, this.input[n])
      n++;
    }
    this.disabled = !this.disabled;
  }

}
