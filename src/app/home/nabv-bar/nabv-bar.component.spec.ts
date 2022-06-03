import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvBarComponent } from './nabv-bar.component';

describe('NabvBarComponent', () => {
  let component: NabvBarComponent;
  let fixture: ComponentFixture<NabvBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
