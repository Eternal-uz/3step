<template>
<div class="flex px-10 justify-center">
  <div class="p-4 border-2  text-center m-1 rounded-sm "  >
    <router-link to="/FirstComer">Click here to register </router-link>
  </div>
  <div class="p-4 border-2  text-center m-1 rounded-sm " >
    <router-link to="/ReturningUser">Click here to continue </router-link>
  </div>
  <div class="p-4 border-2  text-center m-1 rounded-sm " >
    <router-link to="/RegisteredUser">Click here to see details </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Home",
};
</script>