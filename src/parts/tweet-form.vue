<div id="app" class="app">
  <form @submit.prevent="onSubmit">
    <textarea v-model="item" required placeholder="Type tweet here"></textarea>
    <button @click="onSubmit" type="submit">Submit</button>
  </form>
  <ul class="app__ul">
    <li v-for="tweet in items" key="tweet.id">
      <img :src="tweet.avatar" alt="Аватар">
      <span>{{tweet.date}}</span>
      <div>{{tweet.body}}</div>
    </li>
  </ul>
</div>