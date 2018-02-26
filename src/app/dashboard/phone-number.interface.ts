import {ContactType} from './contact-type.enum';

export interface PhoneNumber {
  phoneNo: string;
  type: ContactType;
}
