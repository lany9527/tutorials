/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AboutController } from './about/about.controller';
import { ContactController } from './contact/contact.controller';
import { PeopleController } from './people/people.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { PeopleService } from '../app/components/people/people.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import PersonDetailComponent  from '../app/components/person-detail/person-detail.component';
import PersonListComponent  from '../app/components/person-list/person-list.component';
import bComponent  from '../app/components/b-component/b-component.component';
import aComponent  from '../app/components/a-component/a-component.component';


angular.module('tutorials', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('people', PeopleService)
  .controller('MainController', MainController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .controller('PeopleController', PeopleController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .component('personDetail', PersonDetailComponent)
  .component('personList', PersonListComponent)
  .component('b', bComponent)
  .component('aComponent', aComponent)
;
