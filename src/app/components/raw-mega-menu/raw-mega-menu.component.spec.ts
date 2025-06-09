import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMegaMenuComponent } from './raw-mega-menu.component';

describe('RawMegaMenuComponent', () => {
  let component: RawMegaMenuComponent;
  let fixture: ComponentFixture<RawMegaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawMegaMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
