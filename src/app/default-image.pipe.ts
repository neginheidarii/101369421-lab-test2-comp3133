import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, defaultImage: string): string {
    if (value) {
      return value;
    } else {
      return defaultImage;
    }
  }
}
