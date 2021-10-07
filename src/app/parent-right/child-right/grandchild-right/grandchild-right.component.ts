import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-grandchild-right',
  templateUrl: './grandchild-right.component.html',
  styleUrls: ['./grandchild-right.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildRightComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    //i za sve child komponente
    //this.cd.markForCheck();
  }
  grandCHild() {
    console.log('GRANDCHILD-RIGHT');
  }
}
