import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-owner',
  templateUrl: './board-owner.component.html',
  styleUrls: ['./board-owner.component.css']
})
export class BoardOwnerComponent implements OnInit {

  content: string;
  readData : any;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.userService.getOwnerBoard().subscribe(
      data => {
        this.content = JSON.parse(data).message;
        this.readData = JSON.parse(data).data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
