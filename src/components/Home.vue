<template lang='pug'>
.text-center
  img(src='static/assets/logo.png')
  h1 {{ msg }}
  h2 A drawing game.
  
  b-btn.my-2(v-b-modal.how-to-modal='') How to play
  // Modal Component
  b-modal.text-left#how-to-modal(title='How to play', @ok='submit', @shown='clearName')
    p This is like the traditional Pictionary game. One person is given a word to draw and the other player(s) must guess the word that is being drawn.
    ol
      li Click on the Begin Game button to start
      li You can then either select an already existing game to join or create a new game
      li After creating/joining a game, players are provided a link for inviting other players
      li If you are creating a new game, there is also an option to select either a 2-person game or a multi-person game 
      li There is a shared timer among all players (starting at 90 seconds)
      li If you are a guesser, you have unlimited number of guesses. You will type in your guesses in a guess box. The artist will be able to see all players' guesses, but guessers cannot see other players' guesses.
      li The timer will be reduced after the first correct answer is submitted 
      li A round ends when the timer has reached 0 or when all players in the game have guessed correctly

  b-btn.my-2(v-b-modal.scoring-modal='') How scoring works
  // Modal Component
  b-modal.text-left#scoring-modal(title='How scoring works', @ok='submit', @shown='clearName')
    h3 2 players: collaborative
    ul
      li Artist and guesser collaborate together and have shared points
      li They get points based on number of seconds left on clock when guesser guesses correctly
    h3 3+ players: competitive
    ul
      li Artist gets points equal to seconds left on clock when a guesser guesses correctly
      li If guesser guesses correctly with 45 secs left, artist gets 45
      li If another guesser guesses correctly with 20 secs left, artist gets another 20 = 65
      li Guesser gets points based on seconds left on the clock plus a constant (10)
      
  b-btn.my-2(to='/lobby') Start game
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Pictionary!'
    }
  }
}
</script>

<style lang='scss' scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: disc;
  list-style-position: outside;
  margin: 0 5px;
}

li {
  display: list-item;
  margin: 0 5px;
}

a {
  color: #42b983;
}
</style>
