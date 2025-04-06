import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWysiwygComponent } from './image-wysiwyg.component';

describe('ImageWysiwygComponent', () => {
  let component: ImageWysiwygComponent;
  let fixture: ComponentFixture<ImageWysiwygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageWysiwygComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
