import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepractisetestComponent } from './createpractisetest.component';

describe('CreatepractisetestComponent', () => {
  let component: CreatepractisetestComponent;
  let fixture: ComponentFixture<CreatepractisetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepractisetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepractisetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
