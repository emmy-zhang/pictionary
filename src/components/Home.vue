<template lang='pug'>
.text-center
  img(src='static/assets/logo.png')
  h1 {{ msg }}
  h2 The drawing game.
</template>

<script>
export default {
  name: 'home',
  data () {
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
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
