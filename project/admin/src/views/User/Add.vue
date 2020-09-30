<template>
  <div>新增用户</div>
</template>

<script>
import axios from '../../utils/server'

export default {
  created () {
    axios.get('/test').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>