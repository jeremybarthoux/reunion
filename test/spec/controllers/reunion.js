'use strict';

describe('Controller: ReunionCtrl', function () {

  // load the controller's module
  beforeEach(module('gestionReunionAngularApp'));

  var ReunionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReunionCtrl = $controller('ReunionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReunionCtrl.awesomeThings.length).toBe(3);
  });
});
