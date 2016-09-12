/**
 * Created by littlestone on 2016/9/12.
 */
export class PeopleController {
  constructor ($http,people){
    'ngInject';
    let peopleList = [];
    function peopleList() {
      return people.getAllPeople()
/*.then(
 function (resp) {
 peopleList = resp.data;
 console.log(peopleList);
 }
 );*/
    }
    peopleList();
  }
};