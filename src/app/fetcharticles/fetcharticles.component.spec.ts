import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetcharticlesComponent } from './fetcharticles.component';

describe('FetcharticlesComponent', () => {
  let component: FetcharticlesComponent;
  let fixture: ComponentFixture<FetcharticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetcharticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetcharticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
