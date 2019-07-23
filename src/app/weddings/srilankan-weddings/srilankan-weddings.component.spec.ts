import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankanWeddingsComponent } from './srilankan-weddings.component';

describe('SrilankanWeddingsComponent', () => {
  let component: SrilankanWeddingsComponent;
  let fixture: ComponentFixture<SrilankanWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrilankanWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrilankanWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
