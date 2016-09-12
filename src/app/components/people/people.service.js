/**
 * Created by littlestone on 2016/9/12.
 */
export class PeopleService {
  constructor ($http){
    'ngInject';
    this.$http = $http;
    this.api = 'app/data/people.json';
  }
  getAllPeople () {
    return this.$http.get(this.api, { cache: true }).then(function(resp) {
      // console.log(resp);
      return resp.data;
    });
  }
  /*$get($http) {
    'ngInject';
    let people = {

    };
    return people;

  }*/

};