import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'simple-stats',
  templateUrl: './simple-stats.component.html',
  styleUrls: ['./simple-stats.component.scss'],
})
export class SimpleStatsComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() nodes?: number; // communication between components
  @Input() newNodes?: number; // Just the details that this component need
  @Input() lastNode?: string;
  error: boolean = false;
  ngOnInit(): void {
    this.checkError(); // Check for errors on init
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.nodes ? this.checkError() : null; // If something change, then check for errors
  }

  checkError() {
    let count = 0;
    const verifyNodes = setInterval(() => {
      // check every 3 seconds
      this.nodes ? clearInterval(verifyNodes) : count++; // if nodes doesn't exist, then add 1 to count
      count === 5 ? ((this.error = true), clearInterval(verifyNodes)) : null; // if count have 5, then change error to true and show the message
    }, 3000);
  }
  closeError() {
    this.error = false; // close error window
  }
}
