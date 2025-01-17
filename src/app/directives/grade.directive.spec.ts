import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradeDirective } from './grade.directive';
import { AppComponent } from '../app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { GradePipe } from '../pipes/grade.pipe';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        AppComponent,
        GradePipe,
        GradeDirective
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }))

  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('div')
    };
    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });

  it("should change the text color on mouse over", () => {
    const divs = el.queryAll(By.css('div'));

    expect(divs.length).toBeGreaterThanOrEqual(5);

    const div0 = divs[0];
    const div1 = divs[1];
    const div2 = divs[2];
    const div3 = divs[3];
    const div4 = divs[4];

    div0.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('green');

    div1.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div1.nativeElement.style.color).toBe('blue');

    div2.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div2.nativeElement.style.color).toBe('blue');
    
    div3.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div3.nativeElement.style.color).toBe('red');
    
    div4.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div4.nativeElement.style.color).toBe('blue');
  })

  it("should change the text color to black on mouse leave", () => {
    const divs = el.queryAll(By.css('div'));

    expect(divs.length).toBeGreaterThanOrEqual(5);

    const div0 = divs[0];
    const div1 = divs[1];
    const div2 = divs[2];
    const div3 = divs[3];
    const div4 = divs[4];

    div0.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('black');

    div1.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div1.nativeElement.style.color).toBe('black');

    div2.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div2.nativeElement.style.color).toBe('black');
    
    div3.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div3.nativeElement.style.color).toBe('black');
    
    div4.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div4.nativeElement.style.color).toBe('black');
  })
});
