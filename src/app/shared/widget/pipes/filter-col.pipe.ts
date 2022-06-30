import { Pipe, PipeTransform } from '@angular/core';
import { IPartnerInfoPaged2 } from 'src/app/core/models';

@Pipe({
  name: 'filterCol'
})
export class FilterColPipe implements PipeTransform {

  transform(items: Array<IPartnerInfoPaged2>, options: string[]): Array<any> {
    return (items || []).map(item => {
      const obj: any = {};
      options.forEach(k => {
        const t = (item as any)[k];
        obj[k] = t;
      });
      return obj;
    });
  }

}
