import { NewProductBase } from './new-product-base';

export class TextBoxField extends NewProductBase<string> {
  override controlType = 'textbox';
}
