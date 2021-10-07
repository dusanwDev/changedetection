import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-right',
  templateUrl: './parent-right.component.html',
  styleUrls: ['./parent-right.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentRightComponent implements OnInit {
  constructor() {}
  input = { name: 'Djilas' };
  inputText;
  ngOnInit(): void {}
  parent() {
    console.log('PARENT-RIGHT');
    //this.input = { name: 'Dusan' };
    this.input.name = 'Darko';
  }
}
