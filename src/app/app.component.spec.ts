import { AppComponent } from './app.component';
import { TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Suite
// Spec
// arrange
// act
// assert / expect

describe('App Component', () => {

    let fixture;
    let component;
    let compiled;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement['componentInstance'];
        compiled = fixture.debugElement['nativeElement'];

    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a title', () => {
        const title = 'Testing a simple counter';
        expect(component.title).toBe(title);
    });

    it('should render title in h1', () => {
        const displayElement = compiled['querySelector']('h1');
        expect(displayElement['textContent']).toContain(component.title);
    });

    it('should have a counter', () => {
        expect(component.counter).toBe(0);
    });

    it('should render counter in p tag', () => {
        const element = fixture.debugElement.query(By.css('#counter')).nativeElement;
        expect(element.outerText).toContain(component.counter);
    });

    it('should have a increment button', () => {
        const element = fixture.debugElement.query(By.css('#increment')).nativeElement;
        expect(element.outerText).toContain('Increment');
    });

    it('should have a decrement button', () => {
        const element = fixture.debugElement.query(By.css('#decrement')).nativeElement;
        expect(element.outerText).toContain('Decrement');
    });

    it('should have a reset button', () => {
        const element = fixture.debugElement.query(By.css('#reset')).nativeElement;
        expect(element.outerText).toContain('Reset');
    });

    it('should increment the counter value by 1 when increment button is pressed', () => {
        const element = fixture.debugElement.query(By.css('#increment')).nativeElement;
        const initialCounterValue = component.counter;
        element.click();
        expect(component.counter).toBe(initialCounterValue + 1);
    });

    it('should decrement the counter value by 1 when decrement button is pressed', () => {
        const element = fixture.debugElement.query(By.css('#decrement')).nativeElement;
        const initialCounterValue = component.counter;
        element.click();
        expect(component.counter).toBe(initialCounterValue - 1);
    });

    it('should reset the counter value to 0 when reset button is pressed', () => {
        const element = fixture.debugElement.query(By.css('#reset')).nativeElement;
        const initialCounterValue = component.counter;
        element.click();
        expect(component.counter).toBe(initialCounterValue - initialCounterValue);
    });

});
