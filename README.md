gulp-wisp
=========

## Information

<table>
<tr> 
<td>Package</td><td>gulp-wisp</td>
</tr>
<tr>
<td>Description</td>
<td>Compiles Wisp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

```javascript
var wisp = require('gulp-wisp');

gulp.task('wisp', function() {
  gulp.src('./src/*.wisp')
    .pipe(wisp())
    .pipe(gulp.dest('./lib'))
});
```

## LICENSE

(ISC License)

Copyright (c) 2014, Birdduck Software <the30yearswar@hotmail.com>


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.