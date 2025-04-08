import {ChangeDetectionStrategy, Component, Input, OnInit, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [MatExpansionModule, NgForOf],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AccordionComponent implements OnInit {
  @Input() data: any;
  readonly panelOpenState = signal(false);

  constructor() {
  }

  ngOnInit() {
    console.log('Component loaded', this.data);

  }

}
