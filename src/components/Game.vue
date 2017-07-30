<template lang='pug'>
.text-center
  img(src='static/assets/logo.png')
  h1 Welcome to Pictionary!

  h2 Public Rooms
  // Boostrap Vue component
  b-list-group#room-list.col-6.mx-auto
    b-list-group-item.room(v-for='room in rooms').justify-content-center
      p.w-100 {{ room.type }} room: {{ room.players }} players
      button.btn-primary Join
  br

  // Two-way data binding
  div#create-game
    h2 Create a game
    input(v-model='msg' placeholder='Two way binding test.')
    p The message is: {{ msg }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'banana bread',
      // Some sample rooms
      rooms: [
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
      ]
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
