# Truncate Pipe Usage

The `truncate` pipe is a standalone Angular pipe that truncates a string to a specified length. By default, it truncates to 100 characters.

## Pipe Definition

Here is the definition of the `truncate` pipe:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
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
<p>{{ someLongText | truncate }}</p>
<p>{{ someLongText | truncate:50 }}</p>
```

The first line will truncate `someLongText` to 100 characters, and the second line will truncate it to 50 characters. If the text is shorter than the limit, it will be left as is. If it's longer, the extra characters will be replaced with '...'.
