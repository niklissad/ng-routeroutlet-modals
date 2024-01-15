import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloGuysComponent } from './hello-guys.component';

describe('HelloGuysComponent', () => {
  let component: HelloGuysComponent;
  let fixture: ComponentFixture<HelloGuysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloGuysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloGuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
