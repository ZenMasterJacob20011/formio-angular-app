import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBodyComponent } from './action-body.component';

describe('ActionBodyComponent', () => {
  let component: ActionBodyComponent;
  let fixture: ComponentFixture<ActionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
