import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  OnDestroy
} from '@angular/core';
import {autoPlacement, computePosition, flip, offset} from '@floating-ui/dom';
import {isPlatformBrowser} from "@angular/common";
import {Subject, takeUntil, debounceTime} from 'rxjs';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss'
})
export class MegaMenuComponent implements OnInit, OnDestroy {
  isOpen = false;
  private isBrowser: boolean;
  private closeTimeoutId: any;
  private readonly destroy$ = new Subject<void>();
  private positionUpdate$ = new Subject<void>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.positionUpdate$.pipe(
      debounceTime(100),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.positionMenu();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openMenu(): void {
    clearTimeout(this.closeTimeoutId);
    const megaMenu = this.el.nativeElement.querySelector('#megaMenu');
    if (megaMenu) {
      megaMenu.style.display = 'flex';
      this.isOpen = true;
      this.positionUpdate$.next();
    }
  }

  closeMenu(): void {
    this.closeTimeoutId = setTimeout(() => {
      const megaMenu = this.el.nativeElement.querySelector('#megaMenu');
      if (megaMenu) {
        megaMenu.style.display = 'none';
        this.isOpen = false;
      }
    }, 300);
  }

  toggleMenu(): void {
    const megaMenu = this.el.nativeElement.querySelector('#megaMenu');
    if (megaMenu) {
      this.isOpen = !this.isOpen;
      megaMenu.style.display = this.isOpen ? 'flex' : 'none';
      if (this.isOpen) {
        this.positionUpdate$.next();
      }
    }
  }

  positionMenu(): void {
    if (!this.isBrowser) return;

    const menuButton = this.el.nativeElement.querySelector('#menuButton');
    const megaMenu = this.el.nativeElement.querySelector('#megaMenu');

    if (!menuButton || !megaMenu) return;

    const viewportWidth = window.innerWidth;
    const menuContainer = this.el.nativeElement.querySelector('.menu');
    const containerRect = menuContainer.getBoundingClientRect();

    computePosition(menuButton, megaMenu, {
      placement: 'bottom-start',
      middleware: [
        offset(10),
        flip(),
        autoPlacement({
          allowedPlacements: ['bottom-start', 'bottom', 'bottom-end']
        })
      ]
    }).then(({x, y}) => {
      const menuWidth = megaMenu.offsetWidth;
      const rightEdge = x + menuWidth;

      let adjustedX = x;

      if (viewportWidth < 768) {
        adjustedX = containerRect.left;
      } else if (rightEdge > viewportWidth - 20) {
        adjustedX = viewportWidth - menuWidth - 20;
      }

      Object.assign(megaMenu.style, {
        left: `${adjustedX}px`,
        top: `${y}px`,
      });
    });
  }
}
