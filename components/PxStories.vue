<template>
  <div>
    <div class="d-flex align-items-center justify-content-center flex-column">
      <div class="storie-container">
        <div class="storie-border"></div>
        <b-avatar
          style="border: 2.5px solid #fff"
          size="3.6rem"
          :src="pfp"
        ></b-avatar>
      </div>
      <p class="text-truncate small" style="max-width: 4rem">{{ username }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  props: {
    pfp: {
      type: String,
      default: "https://placekitten.com/300/300",
      required: true,
    },
    username: {
      type: String,
      default: "Username",
      required: true,
    },
  },
};
</script>
<style>
.storie-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.storie-border {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    45deg,
    #feda75,
    #fa7e1e,
    #d62976,
    #962fbf,
    #4f5bd5,
    #2b6cb0
  );
  border-radius: 50%;
  box-shadow: 0 0 0 2px transparent;
  position: absolute;
}
</style>
