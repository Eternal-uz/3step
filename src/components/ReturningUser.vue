<template>
  <form class="form flex flex-col justify-center items-center">
    <h4 class="font-bold p-3">Continue registration</h4>
    <p>What is your favorite book?</p>
    <MyInput
      v-model="book"
      type="text"
      class="input"
      placeholder="Name of the Book"
    />
    <p>what is your favorite show?</p>
    <MyInput
      v-model="show"
      type="text"
      class="input"
      placeholder="Name of the Show"
    />
    <MyButton @click.prevent="(addHobby)" @click="this.$router.push('RegisteredUser')"> Continue </MyButton>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from 'axios';
export default {
  name: "returningUser",
  components: {
    MyInput,
    MyButton,
  },
  data() {
    return {
      hobbies: [],
      show: "",
      book: "",
    };
  },
  methods: {
    continueUser() {
      
    },
    addHobby() {
      axios
        .post("api/hobbies", {
          book: this.book,
          show: this.book,
        })
        .then((response) => {
          const data = response.data;
          this.hobbies.push(response.data);

          this.book = "",
          this.show = ""
          console.log(data);
        });
        
    },
  },
};
</script>
