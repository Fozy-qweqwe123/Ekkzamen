<template>
  <div class="user-profile">
    <div class="avatar">
      <img :src="user.avatar" alt="User Avatar" />
    </div>
    <div class="info">
      <h3>{{ user.name }} {{ user.surname }}</h3>
      <p>{{ user.status }}</p>
      <button @click="editing = true">Edit Status</button>
      <div v-if="editing" class="status-edit">
        <input type="text" v-model="user.status" />
        <button @click="editing = false">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      editing: false,
      currentUser: {
        name: "John",
        surname: "Doe",
        avatar: "/path/to/avatar.jpg",
        status: "Online",
      },
    };
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  margin: 20px;
}

.avatar {
  margin-right: 20px;
}

.info {
  display: flex;
  flex-direction: column;
}

.status-edit {
  margin-top: 10px;
}
</style>