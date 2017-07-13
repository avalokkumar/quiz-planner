import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  allquiz: any[] = [
      {
        quiz_id: '1',
        quiz_name: 'Check the Map',
        quiz_cat: 'geography',
        author: 'Clayman',
        image: 'assets/images/quiz/sample1.jpg'
      },
      {
        quiz_id: '2',
        quiz_name: 'Lets do math',
        quiz_cat: 'Mathematics',
        author: 'Claymore',
        image: 'assets/images/quiz/sample2.jpg'
      },
      {
        quiz_id: '3',
        quiz_name: 'The Romans',
        quiz_cat: 'history',
        author: 'Clayman',
        image: 'assets/images/quiz/sample3.jpg'
      },
      {
        quiz_id: '4',
        quiz_name: 'Magic Science',
        quiz_cat: 'Science',
        author: 'Clayman',
        image: 'assets/images/quiz/sample4.jpg'
      },
      {
        quiz_id: '5',
        quiz_name: 'Magic Science',
        quiz_cat: 'Science',
        author: 'Clayman',
        image: 'assets/images/quiz/sample5.jpg'
      },
      {
        quiz_id: '6',
        quiz_name: 'Magic Science',
        quiz_cat: 'Science',
        author: 'Clayman',
        image: 'assets/images/quiz/sample6.jpg'
      }
    ];
  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
