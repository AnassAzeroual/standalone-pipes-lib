# ng-truncate Pipe Usage

The `ng-truncate` pipe is a standalone Angular pipe that truncates a string to a specified length. By default, it truncates to 100 characters.

## Pipe Definition

Here is the definition of the `ng-truncate` pipe:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone:true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 100): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
```

## Usage

You can use this pipe in your Angular templates like so:

```html
<p>{{ 'This is some long text that will be truncated.' | truncate }}</p>
  <!-- This is some long text that will be truncated. -->
<p>{{ 'This is some long text that will be truncated.' | truncate:10 }}</p>
  <!-- This is so... -->
```

The first line will truncate `someLongText` to 100 characters, and the second line will truncate it to 10 characters. If the text is shorter than the limit, it will be left as is. If it's longer, the extra characters will be replaced with '...'.


## Custom "Read More" Functionality

You can also implement a "Read More" functionality in your component. Here's an example:

```typescript
export class AppComponent {
  someLongText = 'This is some long text that will be truncated.';
  showFullText = false;

  toggleText() {
    this.showFullText = !this.showFullText;
  }
}
```

And in your component HTML file:

```html
  <p>{{ someLongText | truncate: (showFullText)? someLongText?.length : 40 }}</p>

  <button (click)="toggleText()">{{showFullText ? 'Read Less' : 'Read More'}}</button>
```

In this example, when the "Read More" button is clicked, `showFullText` becomes `true`, and the full text is displayed. When the "Read Less" button is clicked, `showFullText` becomes `false`, and the text is truncated.
