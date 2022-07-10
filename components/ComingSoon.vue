<template>
  <div class="coming-soon">
    <lottie-player
      src="https://assets1.lottiefiles.com/packages/lf20_zboivc9e.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
    <p>Coming soon...</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.coming-soon {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  padding: 20% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  p {
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
  }
}
</style>
