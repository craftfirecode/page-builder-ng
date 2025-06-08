import {Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {autoPlacement, computePosition, flip, offset} from '@floating-ui/dom';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss'
})
export class MegaMenuComponent implements OnInit {
  private isOpen = false;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return; // Wenn nicht im Browser, keine Initialisierung durchführen

    const menuButton = this.el.nativeElement.querySelector('#menuButton');
    const megaMenu = this.el.nativeElement.querySelector('#megaMenu');

    // Hover-Verhalten (PC)
    this.renderer.listen(menuButton, 'mouseenter', () => {
      this.openMenu(menuButton, megaMenu);
    });

    // Das Menü und der Button müssen beide überwacht werden
    this.renderer.listen(megaMenu, 'mouseenter', () => {
      this.openMenu(menuButton, megaMenu);
    });

    // Nur schließen, wenn sowohl Button als auch Menü verlassen wurden
    this.renderer.listen(menuButton, 'mouseleave', (event) => {
      // Prüfen, ob in das Menü gewechselt wurde
      if (!megaMenu.contains(event.relatedTarget)) {
        setTimeout(() => {
          if (!megaMenu.matches(':hover')) {
            this.closeMenu(megaMenu);
          }
        }, 100);
      }
    });

    this.renderer.listen(megaMenu, 'mouseleave', (event) => {
      // Prüfen, ob zum Button gewechselt wurde
      if (!menuButton.contains(event.relatedTarget)) {
        this.closeMenu(megaMenu);
      }
    });

    // Klick-Verhalten (Mobil)
    this.renderer.listen(menuButton, 'click', () => {
      this.toggleMenu(menuButton, megaMenu);
    });

    // Schließen bei Klick außerhalb
    this.renderer.listen('document', 'click', (event) => {
      if (this.isOpen && !menuButton.contains(event.target) && !megaMenu.contains(event.target)) {
        this.closeMenu(megaMenu);
      }
    });

    // Fenstergröße überwachen - nur im Browser
    if (this.isBrowser) {
      window.addEventListener('resize', () => {
        if (this.isOpen) {
          this.positionMenu(menuButton, megaMenu);
        }
      });
    }
  }

  private openMenu(menuButton: HTMLElement, megaMenu: HTMLElement): void {
    megaMenu.style.display = 'flex';
    this.isOpen = true;
    this.positionMenu(menuButton, megaMenu);
  }

  private closeMenu(megaMenu: HTMLElement): void {
    megaMenu.style.display = 'none';
    this.isOpen = false;
  }

  private toggleMenu(menuButton: HTMLElement, megaMenu: HTMLElement): void {
    this.isOpen = !this.isOpen;
    megaMenu.style.display = this.isOpen ? 'flex' : 'none';
    if (this.isOpen) {
      this.positionMenu(menuButton, megaMenu);
    }
  }

  // Berechnet und setzt die Position des Mega Menus
  private positionMenu(menuButton: HTMLElement, megaMenu: HTMLElement): void {
    if (!this.isBrowser) return;

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
      // Prüfen, ob das Menü den Bildschirm rechts überschreitet
      const menuWidth = megaMenu.offsetWidth;
      const rightEdge = x + menuWidth;

      // Korrigierte Position, um im Container zu bleiben
      let adjustedX = x;

      if (viewportWidth < 768) {
        // Mobile: Menü soll unter dem Button zentriert sein
        adjustedX = containerRect.left;
      } else if (rightEdge > viewportWidth - 20) {
        // Desktop: Bildschirmrand berücksichtigen
        adjustedX = viewportWidth - menuWidth - 20;
      }

      Object.assign(megaMenu.style, {
        left: `${adjustedX}px`,
        top: `${y}px`,
      });
    });
  }
}
