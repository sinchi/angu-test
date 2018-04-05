import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

  });

  it('should render total votes', () => {

    component.otherVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const db = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = db.nativeElement;

    expect(el.innerText).toContain('21');

  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const db = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(db.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when I click the upvote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);

  });
});
