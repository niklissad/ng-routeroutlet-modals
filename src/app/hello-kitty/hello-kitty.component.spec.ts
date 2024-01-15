import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloKittyComponent } from './hello-kitty.component';

describe('HelloKittyComponent', () => {
  let component: HelloKittyComponent;
  let fixture: ComponentFixture<HelloKittyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloKittyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloKittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
