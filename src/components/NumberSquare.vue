<template>
  <div class="square" @mouseenter="scaleDown" @mouseleave="resetScale">{{ number }}</div>
</template>

<script>
export default {
  props: {
    number: Number
  },
  methods: {
    scaleDown(event) {
      event.target.style.transform = 'scale(0.8)';
    },
    resetScale(event) {
      event.target.style.transform = 'scale(1)';
    }
  }
}
</script>

<style>
.square {
  width: 50px;
  height: 50px;
  border: 2px solid green;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  margin: 0 auto;
}
</style>