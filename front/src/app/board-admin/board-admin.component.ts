import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ShopService} from '../_services/shop.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;
  readData : any;

  constructor(private userService: UserService, private shopService: ShopService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = JSON.parse(data).message;
        this.readData = JSON.parse(data).data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );    
  }

  onDeleteShop(id:any)
  {
    this.shopService.deleteData(id).subscribe(
      data => {
        this.content = JSON.parse(data).message;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );    
    this.getData();
  }

  view(id:any)
  {
    this.router.navigateByUrl('/department-list', { state: id });
  }

}
