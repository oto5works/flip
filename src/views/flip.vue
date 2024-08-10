<template>
  <div class="flip-clock">
    <div v-for="(character, index) in characters" :key="index" class="flip-card">
      <div class="flip-card-inner" :class="{ 'flip': currentIndexes[index] !== initialIndexes[index] }">
        <div class="flip-card-front">
          {{ characters[initialIndexes[index]] }}
        </div>
        <div class="flip-card-back">
          {{ characters[currentIndexes[index]] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: ['8', 'H', 'k', '$', '1', 't', 'x', 'S'],
      currentIndexes: [0, 0, 0, 0, 0, 0, 0, 0],
      initialIndexes: [0, 0, 0, 0, 0, 0, 0, 0],
    };
  },
  methods: {
    flipCharacter(index) {
      this.currentIndexes[index] = (this.currentIndexes[index] + 1) % this.characters.length;
      setTimeout(() => {
        this.initialIndexes[index] = this.currentIndexes[index];
      }, 600); // 애니메이션이 끝난 후 초기화
    },
    startFlipAnimation() {
      this.characters.forEach((_, i) => {
        setInterval(() => {
          this.flipCharacter(i);
        }, 1000 * (i + 1)); // 각 문자마다 순차적으로 1초씩 차이를 두고 플립
      });
    },
  },
  mounted() {
    this.startFlipAnimation();
  },
};
</script>
<style scoped>
.flip-clock {
  display: flex;
  justify-content: space-around;
}

.flip-card {
  width: 50px;
  height: 70px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flip {
  transform: rotateX(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateX(180deg);
}
</style>
