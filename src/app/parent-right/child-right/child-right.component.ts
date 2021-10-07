import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child-right',
  templateUrl: './child-right.component.html',
  styleUrls: ['./child-right.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildRightComponent implements OnInit, DoCheck {
  @Input() input;

  constructor(private cd: ChangeDetectorRef) {
    //i za sve child komponente
  }
  ngDoCheck(): void {
    this.input;
    this.cd.markForCheck();
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('TIMEOUT');
    //   console.log('INP', this.input);
    //   this.cd.markForCheck();
    // }, 3000);
    this.input;
    this.cd.markForCheck();
  }
  child() {
    console.log('CHILD-RIGHT');
  }
}
