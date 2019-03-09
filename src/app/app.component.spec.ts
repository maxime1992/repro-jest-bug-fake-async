import {
  TestBed,
  async,
  fakeAsync,
  ComponentFixture,
  tick,
} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // following is not working
  it('should change the title after 5s', fakeAsync(() => {
    tick(5000);
    expect(app.title).toBe('new title!');
  }));
});
