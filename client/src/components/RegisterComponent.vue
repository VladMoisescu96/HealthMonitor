<template>
    <div id="login">
        <h1>Register user</h1>
        <input type="text" name="username" v-model="username" placeholder="Username" />
        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <input type="date" name="birt date" v-model="birthDate" placeholder="BirthDate" />
        <input type="text" name="groupID" v-model="groupId" placeholder="Group ID" />
        <input type="text" name="userTypeID" v-model="userType" placeholder="User Type ID" />

        <button type="button" v-on:click="createUser()">Login</button>
    </div>
</template>

<script>

import RegisterService from '../RegisterService';

export default {
    data () {
        return {
            username: '',
            email:'',
            password: '',
            birthDate:'',
            groupId:'',
            userType:'',
            submitted: false,
            users: String
        }
    },

    async created() {
        try {
            this.users = await RegisterService.getUsers();

        } catch(err) {
            this.err = err.message;
        }
    },
    computed: {
       
    },

    methods: {
        async createUser() {
            await RegisterService.insertUser(this.username, this.email, this.password, this.birthDate, this.userType, this.groupId);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
