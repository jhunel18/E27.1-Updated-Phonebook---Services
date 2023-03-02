import { Component} from '@angular/core';
import { ContactsService } from 'src/app/service/contacts.service';
import { Contacts } from 'src/app/interface/contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{

  model:any = {};
  constructor(private contactsService: ContactsService, private router:Router) {}
   addContact(model:Contacts){
    this.contactsService.addContact(model);
    this.router.navigateByUrl('/');
  }
}
