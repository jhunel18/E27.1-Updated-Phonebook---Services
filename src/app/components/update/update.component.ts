import { Component, OnInit} from '@angular/core';
import { ContactsService } from 'src/app/service/contacts.service';
import { Contacts } from 'src/app/interface/contacts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  

  model:Contacts={
    id: 0,
    name:'',
    phone:''
  }
  constructor(private contactsService: ContactsService, private router:Router, private route:ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.model = this.contactsService.getContactById(id);
    //this.model = this.contactsService.getContactById();
  }
  
  // editContact(model:Contacts){
  //  this.contactsService.editContact(model);
  //  this.router.navigateByUrl('/');
  // }

  editContact(name: string, phone: string): void {
    this.contactsService.editContact({...this.model, name, phone});
    this.router.navigateByUrl('/');
    }

}
