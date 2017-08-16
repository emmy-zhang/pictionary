<template lang='pug'>
#root.container-fluid.d-flex.p-0
  .col-md-3.d-flex.grid-border.flex-column
    b-list-group#player-list
      b-list-group-item.player.justify-content-center(v-for='(player, index) in players', key='index')
        p.w-100 {{ player.name }}: {{ player.score }}
    button.btn-primary(@click='addPlayer("Bobbi")') Add player
  .col-md-6.d-flex.grid-border
    p too
  .col-md-3.d-flex.grid-border
    p big
</template>

<script>
export default {
  name: 'home',
  methods: {
    addPlayer(name) {
      this.players.push({
        name,
        score: 0
      })
    }
  },
  data() {
    return {
      msg: 'zucchini bread',
      // Some sample players
      players: [
        {
          name: 'Dan',
          score: 0
        },
        {
          name: 'Emmy',
          score: 0
        },
        {
          name: 'Moeji',
          score: 0
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
html, body {
  overflow: hidden;
}

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

.grid-border {
  border: 1px solid #000;
}

#root {
  height: calc(100% - 56px);
}
</style>
