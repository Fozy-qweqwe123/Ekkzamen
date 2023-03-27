<template>
    <h1>Сообщения</h1>
  <div class="vReviews">
    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> </p>
        <p>я сегодня был в центре москвы,это было превосходно.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> </p>
        <p>я сегодня был в центре москвы,это было превосходно.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> </p>
        <p>я сегодня был в центре москвы,это было превосходно.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> </p>
        <p>я сегодня был в центре москвы,это было превосходно.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> </p>
        <p>я сегодня был в центре москвы,это было превосходно.</p>
    </div>

    <div class="container-review">
        <img src="@/assets/avatarexample.jpg" alt="Avatar" style="width:90px">
        <p><span>Имя пользователя.</span> </p>
        <p>я сегодня был в центре москвы,это было превосходно.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vReviews'
}
</script>

<style>
.container-review {
    border: 2px solid #ccc;
    background-color: #eee;
    border-radius: 5px;
    padding: 16px;
    margin: 16px 0;
}

.container::after {
    content: "";
    clear: both;
    display: table;
}

.container-review img {
    float: left;
    margin-right: 20px;
    border-radius: 50%;
}

.container-review span {
    font-size: 20px;
    margin-right: 15px;
}

@media (max-width: 500px) {
  .container-review {
    text-align: center;
  }

  .container-review img {
    margin: auto;
    float: none;
    display: block;
  }
}
</style>