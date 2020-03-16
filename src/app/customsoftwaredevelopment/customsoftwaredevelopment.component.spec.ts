import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsoftwaredevelopmentComponent } from './customsoftwaredevelopment.component';

describe('CustomsoftwaredevelopmentComponent', () => {
  let component: CustomsoftwaredevelopmentComponent;
  let fixture: ComponentFixture<CustomsoftwaredevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomsoftwaredevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsoftwaredevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
