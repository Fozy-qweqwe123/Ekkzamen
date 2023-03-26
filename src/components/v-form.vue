<template>
<div class="center">
    <h1>Login</h1>
    <form>
      <div class="txt_field">
        <input type="text" required v-model="username">
        <label>Username</label>
        <span></span>
      </div>
      <div class="txt_field">
        <input type="password" required v-model="password">
        <label>Password</label>
        <span></span>
      </div>
      <div class="pass" @click="forgotPassword()">Forgot Password?</div>
      <button   type="submit" value="Login" > <router-link to="/post">Login</router-link>  </button>
      <div class="signup_link">Not a mmember? <router-link to="/post">Signup</router-link></div>
    </form>
  </div>
</template>

<script>
export default {
  created () {

    this.$root.showHeader = false;   
  },
  
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      // Place your login logic here
      console.log(`Username: ${this.username}, Password: ${this.password}`)
    },
    forgotPassword() {
      // Place your forgot password logic here
      console.log('Forgot Password')
    }
  }
}
</script>

<style scoped>
body  {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  height: 100vh;
  overflow: hidden;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
}

.center h1 {
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid silver;
}

.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.3s;
}

.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;

  transition: 0.3s;
}

.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #2691d9;
}

.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}

.pass {
  margin: -5px 0px 15px 5px;
  color: #a6a6a6;
  cursor: pointer;
}

.pass:hover {
  text-decoration: underline;
}

button[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  font-size: 18px;
  border-radius: 25px;

  font-weight: 700;
  color: #e9f4fb;
  outline: none;
  cursor: pointer;
}

button[type="submit"]:hover {
  border-color: #2691d9;
  transition: 0.5s;
}
.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}

.signup_link a {
  color: #2691d9;
  text-decoration: none;
}

.signup_link a:hover {
  text-decoration: underline;
}
a {
  text-decoration: none;
  color: #e9f4fb;
}
</style>