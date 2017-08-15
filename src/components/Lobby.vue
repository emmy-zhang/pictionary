<template lang='pug'>
.text-center
  img(src='static/assets/logo.png')
  h1 Welcome to Pictionary!

  h2 Public games
  // Boostrap Vue component
  b-list-group#game-list.col-6.mx-auto
    b-list-group-item.game.justify-content-center(v-for='(game, index) in games')
      p {{ index }}
      p.w-100 {{ game.type }} game: {{ game.players }} players
      button.btn-primary Join
  br

  // Two-way data binding
  div.container.col-sm-3#create-game
    h2 Create a game
    b-form-input(v-model='msg', type='text', placeholder='Enter game name', :formatter='format')
    p The message is: {{ msg }}

    // Radio buttons
    h3 Player mode
    input(type='radio', id='two-players', value='Two players', v-model='picked')
    label(for='two-players') Two players
    br
    input(type='radio', id='multiplayer', value='Multiplayer (3+)', v-model='picked')
    label(for='multiplayer') Multiplayer (3+)
    br
    span Picked:  {{ picked }}

    h3 Number of rounds
    select(v-model='selected', text='Select # of rounds')
      option(disabled, value='') Please select one
      option 5
      option 10
    span Selected: {{ selected }}

    h3 Make team public?
    input(type='checkbox', id='public', v-model='isPublic')
    label(for='public') Public
    br
    span Public: {{ isPublic }}
</template>

<script>
export default {
  name: 'home',
  data () {
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
      picked: false,
      selected: '',
      isPublic: false
    }
  }
}
</script>

<style lang='scss' scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  // list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
