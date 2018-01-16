<template>
  <div class="content">
    <ol>
      <li class="text" v-for="content in contents" :key="content.index">{{content}}</li>
    </ol>
    <input type="text" id="title-input" v-model="title" @keyup.enter="submitTitle">
    <button class="add-btn" @click="submitTitle" >등록</button>
  </div>
</template>

<script>
export default {
  props: ['index', 'contents'],
  data() {
    return {
      title: [],
    };
  },
  methods: {
    submitTitle() {
      this.$emit('submit', this.index, this.title);
      this.title = '';
    },
  },
};
</script>

<style>

.content {
    width: 860px;
    height: 80%;
    border: 1px solid rgb(133, 177, 75);
    color: #207c3c;
    padding: 20px;
}

.text {
    margin-left: 20px;
    margin-bottom: 10px;
}

#title-input {
    width: 300px;
    height: 30px;
    margin-right: 20px;
}

.add-btn {
    height: 30px;
    width: 60px;
    text-align: center;
}
</style>
