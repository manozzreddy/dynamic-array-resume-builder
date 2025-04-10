import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorProfileComponent } from './contributor-profile.component';
import { By } from '@angular/platform-browser';

describe('ContributorProfileComponent', () => {
  let component: ContributorProfileComponent;
  let fixture: ComponentFixture<ContributorProfileComponent>;
  
  const contributorInfo = 'John Doe';
  const imageUrl = 'https://example.com/image.jpg';
  const linkedinUrl = 'https://www.linkedin.com/in/contributor';
  const githubUrl = 'https://github.com/contributor';
  const portfolioUrl = 'https://portfolio.com/contributor';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributorProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContributorProfileComponent);

    // Setting required inputs
    fixture.componentRef.setInput('contributorInfo', contributorInfo);
    fixture.componentRef.setInput('imageUrl', imageUrl);

    fixture.detectChanges();
    component = fixture.componentInstance;

    // wait for initial data binding
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contributor info correctly', () => {
    const contributorInfoElement = fixture.debugElement.query(
      By.css('.mat-body-large')
    );
    expect(contributorInfoElement.nativeElement.textContent).toContain(
      contributorInfo
    );
  });

  it('should render image with the correct URL', () => {
    const imageElement = fixture.debugElement.query(By.css('img'));
    expect(imageElement.nativeElement.src).toContain(imageUrl);
  });

  it('should display contributor info correctly', () => {
    const contributorInfoElement = fixture.debugElement.query(
      By.css('.mat-body-large')
    );

    expect(contributorInfoElement.nativeElement.textContent).toContain(
      'John Doe'
    );
  });

  it('should render LinkedIn link when provided', () => {
    fixture.componentRef.setInput('linkedinUrl', linkedinUrl);
    fixture.detectChanges();

    const linkedInElement = fixture.debugElement.query(
      By.css(`a[href="${linkedinUrl}"]`)
    );

    expect(linkedInElement).toBeTruthy();
    expect(linkedInElement.nativeElement.getAttribute('href')).toBe(
      linkedinUrl
    );
  });

  it('should not render LinkedIn link when not provided', () => {
    fixture.componentRef.setInput('linkedinUrl', undefined);
    fixture.detectChanges();
    
    const linkedInElement = fixture.debugElement.query(
      By.css(`a[href="${linkedinUrl}"]`)
    );

    expect(linkedInElement).toBeFalsy();
  });

  it('should render GitHub link when provided', () => {
    fixture.componentRef.setInput('githubUrl', githubUrl);
    fixture.detectChanges();

    const githubElement = fixture.debugElement.query(
      By.css(`a[href="${githubUrl}"]`)
    );

    expect(githubElement).toBeTruthy();
  });

  it('should not render GitHub link when not provided', () => {
    fixture.componentRef.setInput('githubUrl', undefined);
    fixture.detectChanges();

    const githubElement = fixture.debugElement.query(
      By.css(`a[href="${githubUrl}"]`)
    );

    expect(githubElement).toBeFalsy();
  });

  it('should render portfolio link when provided', () => {
    fixture.componentRef.setInput('portfolioUrl', portfolioUrl);
    fixture.detectChanges();

    const portfolioElement = fixture.debugElement.query(
      By.css(`a[href="${portfolioUrl}"]`)
    );
    
    expect(portfolioElement).toBeTruthy();
  });

  it('should not render portfolio link when not provided', () => {
    fixture.componentRef.setInput('portfolioUrl', undefined);
    fixture.detectChanges();

    const portfolioElement = fixture.debugElement.query(
      By.css(`a[href="${portfolioUrl}"]`)
    );

    expect(portfolioElement).toBeFalsy();
  });
});
