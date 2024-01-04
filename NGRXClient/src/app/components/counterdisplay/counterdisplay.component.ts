import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from '../../shared/store/counter.model';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit, OnDestroy{
 counterDisplay : number = 0;
 appName : string = '';
 counterSubscribe !: Subscription;
 counter$ !: Observable< CounterModel>;
  constructor(private store : Store<{counter : CounterModel}>) {
  
  }


  ngOnInit() {
   /* this.counterSubscribe =  this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter;
      this.appName = data.appName;
    }) */

    this.counter$ = this.store.select('counter');
  }
  ngOnDestroy(): void {
    /*  if(this.counterSubscribe)
     {
       this.counterSubscribe.unsubscribe();
     } */
    } 
}
