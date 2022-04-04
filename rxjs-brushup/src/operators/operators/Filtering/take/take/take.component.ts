import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  template: `
      we have 4 types
      <ol>
        <li> take </li>
        <li> takeLast </li>
        <li> takeUntil </li>
        <li> takeWhile </li>
      </ol>

     <b> 1. take

       <p> - this helps us to obtain 'required n items' from data stream. </p>
       <p> - it terminates the stream - it will complete the stream. </p>
       <p> - params: n - how many items to take from observable stream </p>

  `,
  styles: [
  ]
})
export class TakeComponent  implements OnInit{

  ngOnInit(): void {
    
    interval(500).pipe( take(10) ).subscribe( data => console.log(data) )

  }

}
