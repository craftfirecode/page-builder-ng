import {Component, ElementRef, OnInit, viewChild} from '@angular/core';

@Component({
  selector: 'app-raw-mega-menu',
  imports: [],
  templateUrl: './raw-mega-menu.component.html',
  styleUrl: './raw-mega-menu.component.scss'
})
export class RawMegaMenuComponent implements OnInit {

  saveButton = viewChild<ElementRef<HTMLButtonElement>>('save');

  ngOnInit() {
    console.log(this.saveButton()?.nativeElement.innerHTML)
  }
}
