import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsTabComponent } from './actions-tab.component';

describe('ActionsTabComponent', () => {
  let component: ActionsTabComponent;
  let fixture: ComponentFixture<ActionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
