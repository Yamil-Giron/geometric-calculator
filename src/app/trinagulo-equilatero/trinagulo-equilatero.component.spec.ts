import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrinaguloEquilateroComponent } from './trinagulo-equilatero.component';

describe('TrinaguloEquilateroComponent', () => {
  let component: TrinaguloEquilateroComponent;
  let fixture: ComponentFixture<TrinaguloEquilateroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TrinaguloEquilateroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrinaguloEquilateroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
