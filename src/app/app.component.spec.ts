import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      el = fixture.debugElement;
      component = fixture.componentInstance;
    })
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularUnitTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularUnitTesting');
  });

  it('should render a button with text subscribe', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    const btnElements = el.queryAll(By.css('.subscribe'));
    // component.btnText = "Subscribe",
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  })

  it('should render a button with text subscribed and the button should be disabled after click', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    console.log(btnElements);
    // component.btnText = "Subscribe",
    btnElements[0].nativeElement.click();
    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
      expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
      expect(btnElements[0].nativeElement.disabled).toBeFalse();
    }, 3000)
  })

});
