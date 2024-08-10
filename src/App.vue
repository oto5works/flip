<!-- App.vue -->
<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script>

export default {
  components: {},

  computed: {
  },
  created() {},
  methods: {
  },
};
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100%;
}
.app {
  width: 100%;
  max-width: 480px;
  height: 100%;
  display: block; /* 필요한 경우에만 추가 */
}
</style>
