import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routerLinks: { path: string; icon: string; title: string; }[] = [
    {
      title: 'Calendar',
      path: 'calendar',
      icon: 'pi-calendar'
    },
    {
      title: 'Device',
      path: 'device',
      icon: 'pi-th-large'
    },
    {
      title: 'Charts',
      path: 'charts',
      icon: 'pi-chart-bar'
    }
  ];

  constructor() {
  }
  
  ngOnInit() {
    this.longestWord('what444 time is it now what1 what2 what33s');
  }
  public longestWord(str: string): string {
    const wordArr: string[] = str.split(/\s/);
    let maxStrLength = 0;
    let largestWord = '';
    wordArr.forEach((word: string) => {
      if (maxStrLength < word.length) {
        maxStrLength = word.length;
        largestWord = word;
      }
    });
    return largestWord;
  }
}
