import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[material-icon], material-icon'
})
export class MdcMaterialIcon {
  @HostBinding('class.material-icons') isHostClass = true;
}
