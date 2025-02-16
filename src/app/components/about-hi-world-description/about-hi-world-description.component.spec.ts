import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHiWorldDescriptionComponent } from './about-hi-world-description.component';

describe('AboutHiWorldDescriptionComponent', () => {
  let component: AboutHiWorldDescriptionComponent;
  let fixture: ComponentFixture<AboutHiWorldDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHiWorldDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHiWorldDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
