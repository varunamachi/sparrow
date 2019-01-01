import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input('icon') icon = 'fa fa-exclamation-circle';

  @Input('tooltip') tooltip = '';

  @Input('color') color = '';

  @Output('onClick') onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
