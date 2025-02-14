import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        RouterLink,
        MatToolbarModule,
        MatSidenavModule,
        MatIcon,
        MatButtonModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  private readonly ARIA_HIDDEN_VALUE = "false";

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setAriaHiddenLock();
  }

  private setAriaHiddenLock(): void {
    const nativeElement = this.el.nativeElement as HTMLElement;
    this.renderer.setAttribute(
      nativeElement,
      "aria-hidden",
      this.ARIA_HIDDEN_VALUE
    );

    const originalSetAttribute = nativeElement.setAttribute.bind(nativeElement);

    nativeElement.setAttribute = (attr: string, value: string) => {
      if (attr === "aria-hidden") {
        value = this.ARIA_HIDDEN_VALUE;
      }
      originalSetAttribute(attr, value);
    };
  }
}
