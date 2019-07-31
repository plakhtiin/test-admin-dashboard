import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as RoomsSelectors from '../../store/selectors/rooms/rooms.selectors';
import { Room } from '../../../../../API/src/db/models/room';
import { State } from '../../store/reducers';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

interface RouterLinks {
  path: string;
  icon: string | string[];
  title: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routerLinks: RouterLinks[] = [
    {
      title: 'Calendar',
      path: 'calendar',
      icon: 'pi pi-calendar',
    },
    {
      title: 'Devices',
      path: 'devices',
      icon: 'pi pi-th-large',
    },
    {
      title: 'Charts',
      path: 'charts',
      icon: 'pi pi-chart-bar',
    }
  ];
  public rooms: TreeNode[] = [];
  public expandedRoomId: number;
  
  constructor(
    private store: Store<State>,
    private router: Router,
    private commonService: CommonService,
  ) {
  }
  
  ngOnInit() {
    this.commonService.openRoomsListTree$.subscribe((val: number) => {
      this.expandedRoomId = val;
      if (val && this.rooms[0].children.length) {
        const expandedRoom = this.rooms[0].children.find((room: TreeNode) => room.data === val);
        
        this.clearAllRoomStyles();
        
        this.rooms[0].expanded = true;
        expandedRoom.styleClass = 'active';
        expandedRoom.expanded = true;
      }
    });
    this.store.pipe(
      select(RoomsSelectors.selectRoomsCollection)
    )
      .subscribe((rooms: Room[]) => {
        this.rooms = [
          {
            label: 'Rooms',
            icon: ['fas', 'home'],
            children: [],
          }
        ];
        rooms.forEach((room: Room) => {
          this.rooms[0].children.push({
            label: room.name,
            data: room.id,
            icon: room.icon
          });
        });
        if (this.expandedRoomId) {
          this.commonService.openRoomsListTree.next(this.expandedRoomId);
        }
      });
  }
  
  public clearAllRoomStyles(): void {
    this.rooms[0].styleClass = '';
    this.rooms[0].children.forEach((room: TreeNode) => room.styleClass = '');
  }
  
  public goToRoom(event): void {
    const routerArr = ['rooms'];
    
    this.clearAllRoomStyles();
    event.node.styleClass = 'active';
    
    if (event.node.data) {
      routerArr.push(event.node.data);
    }
    this.router.navigate(routerArr);
  }
}
