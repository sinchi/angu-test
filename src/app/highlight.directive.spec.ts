/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p appHighlight="cyan">First</p>
    <p appHighlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
    const db = fixture.debugElement.queryAll(By.css('p'))[0];
    const el: HTMLElement = db.nativeElement;

    expect(el.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with yellow', () => {
    const db = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive = db.injector.get(HighlightDirective);
    const el: HTMLElement = db.nativeElement;

    expect(el.style.backgroundColor).toBe(directive.defaultColor);
  });
});
