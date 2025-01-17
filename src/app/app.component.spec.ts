import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';
import { GradePipe } from './pipes/grade.pipe';
import { RouterModule } from '@angular/router';
import { Addition } from './Calculator';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        RouterModule
      ],
      declarations: [
        AppComponent, GradePipe
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
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

  // it('should render a button with text subscribed and the button should be disabled after clicked', (done: DoneFn) => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let btnElements = el.queryAll(By.css('.subscribe'));
  //   console.log(btnElements);
  //   // component.btnText = "Subscribe",
  //   btnElements[0].nativeElement.click();
  //   setTimeout(() => {
  //     console.log("Some other test cases");
      
  //   }, 8000)
  //   setTimeout(() => {
  //     fixture.detectChanges();
  //     btnElements = el.queryAll(By.css('.subscribe'));
  //     expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
  //     expect(btnElements[0].nativeElement.disabled).toBeTrue();
  //     done();
  //   }, 3000)
  // })


  it('should render a button with text subscribed and the button should be disabled after clicked', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    console.log(btnElements);
    // component.btnText = "Subscribe",
    btnElements[0].nativeElement.click();
    setTimeout(() => {
      console.log("Some other test cases");
      
    }, 8000)
    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
    }, 3000)

    flush();

    // tick(3000);
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
    // tick(5000);
  }))

  it("should test the promise", fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log("First Set Timeout");
      
      counter = counter + 2;
    }, 2000)

    setTimeout(() => {
      console.log("Second Set Timeout");
      counter = counter + 3;
    }, 3000)

    Promise.resolve().then(() => {
      console.log("Promise");
      counter = counter + 1;
    });

    // flush();

    // tick(1000)
    flushMicrotasks();
    expect(counter).toBe(1)

    tick(2000);
    expect(counter).toBe(3);
    tick(3000);
    expect(counter).toBe(6);
  }))

  it("should test the observable", fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }));

  it("Show Alrt message", () => {
    expect(component.showMessage("Hello")).toBe("Hello");
  })

  it("Show the Addition result", () => {
    expect(Addition(2, 8)).toBe(10)
  })

});
