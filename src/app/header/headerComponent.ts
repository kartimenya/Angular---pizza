import {Component, Input} from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: 'headerComponent.html',
  styleUrls:  ['headerComponent.css']
})
export class HeaderComponent  {
  @Input() sum: string;
}
