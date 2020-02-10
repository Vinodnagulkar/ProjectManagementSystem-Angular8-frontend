import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdiscriptionComponent } from './projectdiscription.component';

describe('ProjectdiscriptionComponent', () => {
  let component: ProjectdiscriptionComponent;
  let fixture: ComponentFixture<ProjectdiscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdiscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
