var app = angular.module('mainApp', []);

app.controller('pokemon', function ($scope, $http) {
  var input = document.getElementById("pokeSearch");
  var text = document.getElementById("warning");
  $scope.pokeSpinner = true;
  $scope.questionMark = true;
  $scope.display = false;
  $scope.warning = false;


  var colors = {
    normal: document.body.style.backgroundColor = "#c6c6a7",
    fire: document.body.style.backgroundColor = "#f5ac78",
    water: document.body.style.backgroundColor = "#9db7f5",
    electric: document.body.style.backgroundColor = "#fae078",
    grass: document.body.style.backgroundColor = "#a7db8d",
    ice: document.body.style.backgroundColor = "#bce6e6",
    fighting: document.body.style.backgroundColor = "#d67873",
    poison: document.body.style.backgroundColor = "#c183c1",
    ground: document.body.style.backgroundColor = "#ebd69d",
    flying: document.body.style.backgroundColor = "#c6b7f5",
    psychic: document.body.style.backgroundColor = "#fa92b2",
    bug: document.body.style.backgroundColor = "#c6d16e",
    rock: document.body.style.backgroundColor = "#d1c17d",
    ghost: document.body.style.backgroundColor = "#a292bc",
    dragon: document.body.style.backgroundColor = "#a27dfa",
    steel: document.body.style.backgroundColor = "#d1d1e0",
    fairy: document.body.style.backgroundColor = "#f4bdc9",
    dark: document.body.style.backgroundColor = "#705848"
  };
 
  String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  };

  $scope.description = function (pokemonID) {
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon-species/' + pokemonID + '/'
    }).then(function successCallback(response) {
    $scope.pokeDescription = response.data.flavor_text_entries[1].flavor_text;

    }, function errorCallback(response) {
     
    });

  }

  $scope.play = function () {
    if ($scope.pokemonId > 99) {
      var audio = document.getElementById("audiocem");
      audio.play();
    } else {
      var audio = document.getElementById("audio");
      audio.play();
    }
  }

  $scope.search = function (pokemonID) {
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonID
    }).then(function successCallback(response) {
      $scope.pokeTypeArr = [];
      var bla = response.data.species.name;
      $scope.pokemonId = response.data.id;
      $scope.pokemonName = response.data.species.name;
      $scope.pokeSpinner = false;
      $scope.questionMark = false;
      $scope.pokemonName = bla.capitalize();
      $scope.pokemonSprite = response.data.sprites.front_default;
      $scope.display = true;
      

      let pokeColored = []; 
      // aqui eu pego o tamanho da minha resposta
      for (let i = 0; i < response.data.types.length; i++) {
        $scope.pokeTypeArr.push(response.data.types[i].type.name);
        pokeColored.push(colors[$scope.pokeTypeArr[i]].toString());
        document.getElementById("badge").style.backgroundColor = pokeColored[0];
        document.getElementById("badge1").style.backgroundColor = pokeColored[1];
      }

      if (response.data.id < 100) {
        $scope.pokemonId = 0 + (response.data.id);
        $scope.play();

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