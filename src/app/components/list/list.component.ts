import { Component,OnInit } from '@angular/core';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public contacts:any[]=[];

  constructor(private contactsService: ContactsService) {}
  
  ngOnInit(): void {
    this.contacts = this.contactsService.getContactDetails();
  }

   deleteContact(id:number){
    const contactId = this.contactsService.getContactById(id);
    this.contactsService.deleteContact(contactId.id);
    this.contacts = this.contactsService.getContactDetails();
  }

}
