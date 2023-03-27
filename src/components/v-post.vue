<template>
  <div class="social-feed">
    <h2>Новости</h2>
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-header">
        <img :src="post.avatar" alt="Avatar" class="avatar">
        <div class="author-info">
          <h3>{{ post.author }}</h3>
          <p>{{ post.timestamp }}</p>
        </div>
      </div>
      <div class="post-content">
        <p>{{ post.content }}</p>
        <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image">
      </div>
      <div class="post-actions">
        <button @click="likePost(post.id)">
          <i class="far fa-heart" :class="{ 'fas': post.liked }"></i>
          <span>{{ post.likes }}</span>
        </button>
      </div>
      <div class="comments">
        <h4>Комментарии</h4>
        <ul>
          <li v-for="comment in post.comments" :key="comment.id">
            <div class="comment-info">
              <h5>{{ comment.author }}</h5>
              <p>{{ comment.timestamp }}</p>
            </div>
            <p>{{ comment.content }}</p>
          </li>
        </ul>
        <form @submit.prevent="addComment(post.id)">
          <input type="text" v-model="commentText" placeholder="Add a comment...">
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          author: "Иван Устинов",
          avatar: "https://get.wallhere.com/photo/face-model-portrait-photography-actor-profile-hair-nose-Person-Colton-Haynes-head-man-male-hairstyle-portrait-photography-photo-shoot-close-up-facial-hair-561682.jpg",
          timestamp: "2 часа назад",
          content: "Сегодня была прекрасная погода",
          image: "https://оценика.рф/sites/default/files/works/konkurs/whatsappimage2021-10-18at125120.jpg",
          likes: 10,
          liked: false,
          comments: [
            {
              id: 1,
              author: "Егор Пахарев",
              timestamp: "1 часа назад",
              content: "прекрасное фото!"
            }
          ]
        },
        {
          id: 2,
          author: "Тимофей Сенин",
          avatar: "https://thumbs.dreamstime.com/b/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D1%81%D1%82%D0%BE%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%BD%D0%B5%D1%82-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-173998002.jpg",
          timestamp: "4 часа назад",
          content: "Всем привет )",
          image: null,
          likes: 5,
          liked: false,
          comments: []
        }
      ],
      commentText: ""
    };
  },
  methods: {
    likePost(postId) {
      const post = this.posts.find(post => post.id === postId);
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
    },
    addComment(postId) {
      const post = this.posts.find(post => post.id === postId);
      post.comments.push({
        id: post.comments.length + 1,
        author: "You",
        timestamp: "Прямо сейчас",
        content: this.commentText
      });
      this.commentText = "";
    }
  }
};
</script>

<style>
.social-feed {
  max-width: 800px;
  margin: 0 auto;
}

.social-feed h2 {
  font-size: 1.5rem;
  text-align: center;
}

.post {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.author-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.author-info p {
  margin: 0;
  color: #666;
}

.post-content {
  margin-bottom: 0.5rem;
}

.post-image {
  width: 100%;
  margin-top: 0.5rem;
}

.post-actions {
  display: flex;
  justify-content: space-between;
}

.post-actions button {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: #666;
}

.post-actions button:hover {
  cursor: pointer;
  color: #333;
}

.post-actions i {
  margin-right: 0.5rem;
}

.comments {
  margin-top: 1rem;
}

.comments h4 {
  margin: 0;
  font-size: 1.2rem;
}

.comments ul {
  list-style: none;
  padding: 0;
}

.comment-info h5 {
  margin: 0;
}

.comment-info p {
  margin: 0;
  color: #666;
}

.comments form {
  display: flex;
  margin-top: 1rem;
}

.comments form input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0;
}

.comments form button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0;
  margin-left: 0.5rem;
}

.comments form button[type="submit"]:hover {
  cursor: pointer;
  background-color: #0069d9;
}
</style>