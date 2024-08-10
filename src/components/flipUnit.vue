<template>
  <div class="flip-unit">
    <div class="flip-card" :class="{ flipping: isFlipping }">
      <div class="top">{{ previousValue }}</div>
      <div class="bottom">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFlipping: false,
      previousValue: this.value,
    };
  },
  watch: {
    value(newValue, oldValue) {
      this.previousValue = oldValue;
      this.isFlipping = true;
      setTimeout(() => {
        this.isFlipping = false;
      }, 600); // Flip 애니메이션 시간
    },
  },
};
</script>

<style scoped>
.flip-unit {
  perspective: 1000px;
}

.flip-card {
  position: relative;
  width: 50px;
  height: 70px;
  transform-style: preserve-3d;
  transform-origin: bottom;
  transition: transform 0.6s ease-in-out;
}

.flip-card.flipping {
  transform: rotateX(-180deg);
}

.flip-card .top, .flip-card .bottom {
  position: absolute;
  width: 100%;
  height: 50%;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  backface-visibility: hidden;
}

.flip-card .top {
  top: 0;
  border-radius: 5px 5px 0 0;
}

.flip-card .bottom {
  bottom: 0;
  transform: rotateX(180deg);
  border-radius: 0 0 5px 5px;
}
</style>
