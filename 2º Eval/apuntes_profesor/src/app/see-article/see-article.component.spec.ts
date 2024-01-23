import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeArticleComponent } from './see-article.component';

describe('SeeArticleComponent', () => {
  let component: SeeArticleComponent;
  let fixture: ComponentFixture<SeeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
