<template>
  <div class="home">
    <h1>Try Web Push</h1>

    <section>
      <h2>Env Information</h2>
      <p>
        <span>Web Push</span>
        <span>{{ webPushUsable | usable }}</span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  filters: {
    usable: flg => (flg === true ? "⭕️" : "❌")
  },
  computed: {
    webPushUsable: vm => vm.$_webPush.usable
  }
};
</script>
