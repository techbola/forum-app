<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea
          v-model="text"
          class="form-input"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="form-actions">
        <button class="btn btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      text: "",
    };
  },
  methods: {
    save() {
      const postId = "forum" + Math.random();
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
      };

      this.$emit("save", { post });

      this.text = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
