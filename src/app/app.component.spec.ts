import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
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
            declarations: [AppComponent, CounterComponent],
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

    it('should have counter component', () => {
        const counterComponent = compiled.querySelector('app-counter');
        expect(counterComponent).toBeTruthy();
    });

});
