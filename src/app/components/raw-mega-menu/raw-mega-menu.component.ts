import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-raw-mega-menu',
  imports: [],
  templateUrl: './raw-mega-menu.component.html',
  styleUrl: './raw-mega-menu.component.scss'
})
export class RawMegaMenuComponent implements AfterViewInit {

  @ViewChild('refButton') refButton!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    console.log(this.refButton.nativeElement.innerHTML);
  }
}
