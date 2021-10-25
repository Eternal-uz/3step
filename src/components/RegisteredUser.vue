<template>
  <div>
    <h3 class="font-bold">Thank you for registering</h3>
    <MyButton @click="getUsers">Check out your details</MyButton>
    <ul>
      <li class="list-none" v-for="data in datas" :key="data">
        <p>
          your first name is <strong>{{ data.name }}</strong>
        </p>
        <p>
          your lastname is <strong>{{ data.surname }}</strong>
        </p>
        <p>
          your favorite show is <strong>{{ data.book }}</strong>
        </p>
        <p>
          your favorite book is <strong>{{ data.show }}</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import MyButton from "./UI/MyButton.vue";
// import { mapState } from "vuex";
export default {
  name: "registeredUser",
  components: { MyButton: MyButton },
  data() {
    return {
      datas: {},
    };
  },
  methods: {
    getUsers() {
      axios.get("api/users").then((response) => {
        this.datas = response.data;
      });
    },
  },
  computed: {
    // ...mapState(["users", "hobbies"]),
  },
  crteated() {},
};
</script>
<style>
input{
  width: 50% !important;
}
</style>
