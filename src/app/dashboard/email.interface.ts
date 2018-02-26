import {ContactType} from './contact-type.enum';

export interface Email{
  emailAddress: string;
  type: ContactType;
}
