import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProglistComponent } from './proglist.component';

describe('ProglistComponent', () => {
  let component: ProglistComponent;
  let fixture: ComponentFixture<ProglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
