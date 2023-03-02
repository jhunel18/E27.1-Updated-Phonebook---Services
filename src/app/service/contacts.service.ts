import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddComponent } from '../components/add/add.component';
import { Contacts } from '../interface/contacts';
import { CONTACTS } from '../mock-data/mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = CONTACTS;
  // contactId:number=1;
  model:any = {};
  
  constructor() {}
  
  addContact(model:Contacts){
    const existingContact = this.contacts.find(c => c.name == model.name || c.phone == model.phone);
    if (existingContact) {
      const confirmation = confirm(`A contact with name '${model.name}' already exists. Do you want to update it?`);
      if(confirmation) {
        this.editContact({...existingContact, ...model});
        console.log(model);
      }
     }
     else{
      const newId = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
      this.contacts.push({...model, id: newId});
    }
    }

    editContact(contact:Contacts){
      
      const index = this.contacts.findIndex(c => c.id === contact.id);
      this.contacts[index] = contact;
      
    }

    deleteContact(id:number){
      this.contacts = this.contacts.filter(c => c.id !== id);

    }

  getContactDetails(){
    return this.contacts
  }
  getContactById(id:number):Contacts{
    const contact = this.contacts.find(c => c.id === id);
    const index = this.contacts.findIndex(c => c.id === id);
    if (contact !== undefined) {
      this.contacts[index] = contact;
    return contact;
  }
  throw new Error('Contact not found.');
  }
 
  
}
