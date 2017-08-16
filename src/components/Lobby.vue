<template lang='pug'>
.text-center
  img(src='static/assets/logo.png')
  h1 Welcome to Pictionary!

  h2 Public games
  // Boostrap Vue component
  b-list-group#game-list.col-6.mx-auto
    b-list-group-item.game.justify-content-center(v-for='(game, index) in games', key='index')
      p {{ index }}
      p.w-100 {{ game.type }} game: {{ game.players }} players
      button.btn-primary Join
  br

  b-btn.my-2(v-b-modal.create-game-modal='') Create new game
  // Modal Component
  b-modal.text-left#create-game-modal(title='Create new game', @ok='createGame', ok-title='Create game')
    h4 Name of new game
    // enter name of new game
    b-form-input(v-model='msg', type='text', placeholder='Enter game name')
    p The message is: {{ msg }}
    
    h4 Game mode
    // select game mode
    input(type='radio', id='two-player', value='cooperative', v-model='gameMode')
    label(for='two-players') Two player
    br
    input(type='radio', id='multiplayer', value='competitive', v-model='gameMode')
    label(for='multiplayer') Multiplayer (3+)

    h4 Number of rounds
    select(v-model='numberOfRounds', text='Select # of rounds')
      option(disabled) Please select one
      option(selected) 5
      option 10

    h4 Make team public?
    input(type='checkbox', id='public', v-model='isPublic')
    label(for='public') Public

</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'zucchini bread',
      // Some sample games
      games: [
        {
          type: 'public',
          players: 4
        },
        {
          type: 'public',
          players: 3
        },
        {
          type: 'public',
          players: 5
        }
      ],
      gameMode: false,
      numberOfRounds: 5,
      isPublic: false
    }
  },
  methods: {
    createGame() {
      /* console.log(`gameMode: ${this.gameMode}`)
      console.log(`numberOfRounds: ${this.numberOfRounds}`)
      console.log(`isPublic: ${this.isPublic}`) */
      this.$store.dispatch('createGame', {
        game: {
          gameMode: this.gameMode,
          numberOfRounds: this.numberOfRounds,
          isPublic: this.isPublic
        },
        users: [1, 2, 3]
      })
    }
  }
}
</script>

<style lang='scss' scoped>


</style>
