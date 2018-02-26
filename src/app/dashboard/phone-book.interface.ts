import {PhoneNumber} from './phone-number.interface';
import {Email} from './email.interface';

export interface PhoneBook {
  id: string;
  name: string;
  emails: Email[];
  phoneNumbers: PhoneNumber[];

}
