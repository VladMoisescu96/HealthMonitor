<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.username }}</p>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Dashboard",
  data() {
    return {
      user: {
        name: "Jesse"
      }
    };
  },
  methods: {
    getUserData: function() {
      let self = this;
      axios
        .get("/api/user")
        .then(response => {
          console.log("Raspuns la navigare:");
          console.log(response);
          self.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          console.log("Raspuns la navigare:");
          console.log(errors);
          router.push("/");
        });
    }
  },
  mounted() {
    this.getUserData();
  },

  sockets: {
    connect: function() {
      console.log("socket connected");
      this.$socket.emit("emit_method", {
        data: "data",
        data2: "data2"
      });
      console.log(this.$socket);
    },
    
    customEmit: function(data) {
      console.log(data.data);
    }
  }
};
</script>
