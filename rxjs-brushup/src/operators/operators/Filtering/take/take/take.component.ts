import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { take, takeLast, tap } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  template: `
  <b> Note: Its a type of pipeable operator </b>- means it is pure. It doesn't manipulate the source observable. <br>
          It just takes source observable as input and perform required operation on those data and returns us a new observable.

      we have 4 types
      <ol>
        <li> take </li>
        <li> takeLast </li>
        <li> takeUntil </li>
        <li> takeWhile </li>
      </ol>

     <b> 1. take </b>

       <p> - this helps us to obtain 'required n items' from data stream. </p>
       <p> - It stops itself from getting data from source observable and it emits new observable. </p>
       <p> - It never waits for source obs to complete. </p>
       <p> - params: n - how many items to take from source observable </p>

    <b> 2. takeLast </b>

      <p> - this helps us to obtain 'required last n items' from data stream. </p>
      <p> - It waits for source obs to complete. If it never completes then this operator never emits the data. </p>
      <p> - params: n - how many items to take from source observable </p>

  `,
  styles: [
  ]
})
export class TakeComponent  implements OnInit{

  ngOnInit(): void {
    
   // take - will terminate once cond reached
    interval(500).pipe( take( 5 ))
    .subscribe( data => console.log( `data from take: ${data}`) );

  // takeLast - will wait until source obs completed as it needs to emit last vals
    // source obs - never completes -- so takeLast never emits  
        // interval(500).pipe( takeLast( 5 )).subscribe( data => console.log( `data from takeLast: ${data}`) )
        
    // source obs - chaining - take - completes -- so takeLast will emits   
      interval(500).pipe( take(10), tap(console.log), takeLast( 2 ))
      .subscribe( data => console.log( `data from takeLast: ${data}`) )
  }

}
