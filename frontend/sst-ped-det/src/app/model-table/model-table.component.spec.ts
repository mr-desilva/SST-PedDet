import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelTableComponent } from './model-table.component';

describe('ModelTableComponent', () => {
  let component: ModelTableComponent;
  let fixture: ComponentFixture<ModelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ModelTableComponent', () => {
    expect(component).toBeTruthy();
  });
});
