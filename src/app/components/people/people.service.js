/**
 * Created by littlestone on 2016/9/12.
 */
export class PeopleService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.api = 'app/data/people.json';
  }

  getAllPeople() {
    return this.$http.get(this.api, {cache: true}).then(function (resp) {
      return resp;
    });
  }

  getPerson() {
    function personMatchesParam(person) {
      return person.id === id;
    }
    return service.getAllPeople().then((people)=>{
      return people.find(personMatchesParam)
    });
  }
}
;