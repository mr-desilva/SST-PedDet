import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectionComponent } from './image-selection.component';

describe('ImageSelectionComponent', () => {
  let component: ImageSelectionComponent;
  let fixture: ComponentFixture<ImageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ImageSelectionComponent', () => {
    expect(component).toBeTruthy();
  });
});
