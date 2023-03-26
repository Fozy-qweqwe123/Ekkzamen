<template>
    <div class="user-info">
      <img :src="user.avatar" :alt="`${user.first_name} ${user.last_name}`" class="avatar" />
      <h2 class="name">{{ user.first_name }} {{ user.last_name }}</h2>
      <p class="status">{{ user.status }}</p>
      <div class="friends">
        <h3>Друзья</h3>
        <ul>
          <li v-for="friend in user.friends" :key="friend.id">{{ friend.name }}</li>
        </ul>
      </div>
      <div class="groups">
        <h3>Группы</h3>
        <ul>
          <li v-for="group in user.groups" :key="group.id">{{ group.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserInfo",
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  </style>
  