import {ChangeDetectionStrategy, Component, Input, OnInit, signal} from '@angular/core';
import {NgForOf} from '@angular/common';
import {CdkAccordion, CdkAccordionItem} from '@angular/cdk/accordion';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-accordion',
  imports: [CdkAccordion, CdkAccordionItem, LucideAngularModule],
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
    // console.log('Component loaded', this.data);

  }

}
