import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public roomId: number;
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.roomId = params['roomId'];
      this.commonService.openRoomsListTree.next(Number(this.roomId));
    });
  }

}
