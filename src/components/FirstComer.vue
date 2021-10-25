<template>
  <div>
    <form class="form flex flex-col items-center">
      <h4 class="">Fill in to Register</h4>
      <myInput
        v-model="firstName"
        type="text"
        class="input p-4  "
        placeholder="First Name"
      />
      <myInput
        v-model="lastName"
        type="text"
        class="input p-4 "
        placeholder="Last Name"
      />
      <myButton @click.prevent="addUser"> Register </myButton>
      <myButton @click.prevent="nextPage"> Continue </myButton>
    </form>
  </div>
</template>



<script>
import axios from 'axios';
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
//import { mapMutations } from 'vuex';
export default {
  name: "firstUser",
  components: { MyInput, MyButton },
  data() {
    return {
      users:[],
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    addUser() {
      axios
        .post("http://localhost:5000/users", {
          name: this.firstName,
          surname: this.lastName,
        })
        .then((response) => {
          const data = response.data;
          this.users.push(response.data);

          this.firstName = "",
          this.lastName = ""
          console.log(data);
        });
    },
    nextPage() {
      this.$router.push("returningUser");
    },
  },
};
</script>
