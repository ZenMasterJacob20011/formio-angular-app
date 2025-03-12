import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessTabComponent } from './access-tab.component';

describe('AccessTabComponent', () => {
  let component: AccessTabComponent;
  let fixture: ComponentFixture<AccessTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
