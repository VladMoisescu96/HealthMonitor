<template>  
    <div>
        <h2>Login</h2>
        <form v-on:submit.prevent="login()">
            <input type="text" name="username" v-model="username" placeholder="Username" /><br>
            <input type="password" name="password" v-model="password" placeholder="Password" /><br>    
            <input type="submit" value="Login" />    
        </form>    
    </div>
</template>

<script> 

    import LoginService from '../LoginService'   
    export default { 
        name: "Login",
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {    
            login() {
                LoginService.login(this.username, this.password)
            }
        },
sockets: {
    connect: function() {
      console.log("socket connected");
      this.$socket.emit("pula", {
        data: "data",
        data2: "data2"
      });
      console.log(this.$socket);
    },
    pulaa: function(data) {
      console.log(data.data);
    }
  }

    }
</script>
