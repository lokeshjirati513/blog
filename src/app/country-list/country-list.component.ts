import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  template: `
    <h2 class="custom">
      country-list works (inline template and inline style )
</h2>
  `,
  styles: `.custom{ color : blue}`
})
export class CountryListComponent {

}
