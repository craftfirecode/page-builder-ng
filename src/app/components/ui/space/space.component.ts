import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-space',
  imports: [],
  templateUrl: './space.component.html',
  styleUrl: './space.component.scss'
})

export class SpaceComponent implements OnInit {
  @Input() data: any;
  classes: string = '';

  ngOnInit(): void {
    let marginClass = '';

    switch (this.data.margin) {
      case 'mt-5':
      case 'mt-10':
      case 'mt-15':
      case 'mt-20':
      case 'mt-30':
        marginClass = this.data.margin;
        break;
      default:
        marginClass = '';
    }

    this.classes = marginClass;
  }
}
