import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit{
  counterInput !: number;
  actionType: string = "add";
   constructor(private store : Store<{counter : CounterModel}>) {
     
   }
 
   ngOnInit() {
     
   }

increment() {
  this.store.dispatch(customIncrement({ value: +this.counterInput, action: this.actionType }));
}
}
