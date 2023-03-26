<template>
  <div>
    <h1 class="news">Новости</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="likePost(post_id)">Лайкнуть</button>
        <button @click="showComments(post)">Комментарии ({{ post.comments.length }})</button>
        <div v-show="post.showComments">
          <form @submit.prevent="addComment(post)">
            <input type="text" v-model="newComment">
            <button>Добавить комментарий</button>
          </form>
          <ul>
            <li v-for="comment in post.comments" :key="comment.id">
              <p>{{ comment.content }}</p>
              <button @click="likeComment(post, comment)">Лайaкнуть</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Тимофей Сенин ',
          content: 'Привет, друзья! Хочу рассказать вам про свою новую книгу, которую недавно выпустил. Это история о моих приключениях в путешествиях по всему миру. Я побывал в самых разных уголках планеты и увидел множество удивительных вещей. Расскажу о том, как я пересекал Атлантику на паруснике, плавал с акулами на Гавайях и восхищался красотами Новой Зеландии. Надеюсь, вы захотите прочитать эту книгу и узнать больше о моих приключениях. Спасибо за внимание!',
          likes: 2,
          comments: [],
          showComments: false,
        },
        {
          id: 2,
          title: 'Пост 2',
          content: 'Содержимое поста 2',
          likes: 0,
          comments: [],
          showComments: false,
        },
      ],
      newComment: '',
    }
  },
  methods: {
    likePost(post) {
      post.likes++
    },
    showComments(post) {
      post.showComments = !post.showComments
    },
    addComment(post) {
      post.comments.push({
        id: post.comments.length + 1,
        content: this.newComment,
        likes: 0,
      })
      this.newComment = ''
    },
    likeComment(post, comment) {
      comment.likes++
    },
  },
}
</script>
<style scoped>
  li {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 1%;
  }
  .news  {
    display: flex;
    align-items:center ;
    justify-content: center;
  }
</style>
