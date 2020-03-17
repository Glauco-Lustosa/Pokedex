var app = angular.module('mainApp', []);

app.controller('pokemon', function ($scope, $http) {
  var input = document.getElementById("pokeSearch");
  var text = document.getElementById("warning");
  $scope.pokeSpinner = true;
  $scope.questionMark = true;
  $scope.warning = false;

  String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });

  };

  $scope.play = function () {
    if ($scope.pokemonId > 99) {
      var audio = document.getElementById("audiocem");
      console.log(audio);
      audio.play();
    } else {
      var audio = document.getElementById("audio");
      console.log(audio);
      audio.play();
    }
  }


  $scope.search = function (pokemonID) {
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonID
    }).then(function successCallback(response) {

      console.log(response.data.id);
      $scope.pokemonId = response.data.id;
      $scope.pokemonName = response.data.species.name;
      $scope.pokeSpinner = false;
      $scope.questionMark = false;
      $scope.pokemonSprite = response.data.sprites.front_default;
      var bla = response.data.species.name;
      $scope.pokemonName = bla.capitalize();
      console.log($scope.pokemonName)

      if (response.data.id < 100) {
        console.log('entrou');
        $scope.pokemonId = 0 + (response.data.id);
        $scope.play();

        console.log($scope.pokemonId, $scope.pokemonName);
      } else {
        $scope.pokemonId = response.data.id;
        $scope.play();
      }

    }, function errorCallback(response) {
      $scope.warningError = true;
    });
  };

  input.addEventListener("keyup", function (event) {
    if (event.getModifierState("CapsLock")) {
      $scope.warning = true;
      $scope.warningError = false;
    } else {
      $scope.warning = false;
    }
  });








  audio.play();




});