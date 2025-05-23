import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygComponent } from './wysiwyg.component';

describe('WysiwygComponent', () => {
  let component: WysiwygComponent;
  let fixture: ComponentFixture<WysiwygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WysiwygComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
