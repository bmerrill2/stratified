import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsDueComponent } from './audits-due.component';

describe('AuditsDueComponent', () => {
  let component: AuditsDueComponent;
  let fixture: ComponentFixture<AuditsDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditsDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
