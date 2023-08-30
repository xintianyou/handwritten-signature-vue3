<template>
  <div>
    <canvas
      :width="width"
      :height="height"
      id="canvas"
      @mousedown="mousedownEvent"
      @mousemove="mousemoveEvent"
      @mouseup="mouseupEvent"
      @mouseleave="mouseleaveEvent"
    >
    </canvas>
    <div>
      <button v-if="prev" id="prev" @click="prev">上一步</button>
      <button v-if="reset" id="reset" @click="reset">重做</button>
      <button id="save" @click="save">保存</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  width: {
    type: Number,
    default: 600,
  },
  height: {
    type: Number,
    default: 400,
  },
  prev: {
    type: Boolean,
    default: true,
  },
  reset: {
    type: Boolean,
    default: true,
  },
});
let isDown = false;
let points = [];
let allPoints = [];
let canvas = ref(null);
let ctx = ref(null);

onMounted(() => {
  canvas.value = document.getElementById("canvas");
  ctx.value = canvas.value.getContext("2d");
  ctx.value.lineWidth = 3;
  ctx.value.strokeStyle = "#000";
});

const draw = (lastX, lastY, x, y) => {
  ctx.value.moveTo(lastX, lastY);
  ctx.value.lineTo(x, y);
  ctx.value.stroke();
};
const mousedownEvent = ({ x, y }) => {
  isDown = true;
  points.push({ x, y });
  ctx.value.beginPath();
};
const mousemoveEvent = ({ x, y }) => {
  if (!isDown) return;
  const lastPoint = points.at(-1);
  draw(lastPoint.x, lastPoint.y, x, y);
  points.push({ x, y });
};
const mouseupEvent = () => {
  isDown = false;
  ctx.value.closePath();
  allPoints.push(points);
  points = [];
};
const mouseleaveEvent = () => {
  isDown = false;
  ctx.value.closePath();
  if (points.length) {
    allPoints.push(points);
  }
  points = [];
};
const resetPath = () => {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
};
const prev = () => {
  resetPath();
  allPoints.pop();
  allPoints.forEach((ps) => {
    ps.forEach((item, index) => {
      let next = ps[index + 1];
      if (next) {
        ctx.value.beginPath();
        draw(item.x, item.y, next.x, next.y);
        ctx.value.closePath();
      }
    });
  });
};
const reset = () => {
  resetPath();
  allPoints = [];
};
const emit = defineEmits(["save"]);
const save = () => {
  let imgData = canvas.value.toDataURL("image/png");
  emit("save", imgData);
};
</script>

<style scoped>
canvas {
  background-color: #ddd;
}
</style>
