import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, changeAppName } from '../../shared/store/counter.actions';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {
  constructor(private store : Store<{counter : CounterModel}>) {
    
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  rename(){
    this.store.dispatch(changeAppName({appName : 'My Counter App'}))
  }
}
