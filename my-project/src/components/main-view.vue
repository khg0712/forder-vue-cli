<template>
  <div id="app">
        <div id="container">
            <div id="tag-box">
                <forder-tag v-for="item in tags" :index="item" :currunt-index="curruntIndex" @clicked="changeView" :key="item.id"></forder-tag>
                <div class="tag add-tag" @click="addTag">+</div>
            </div>
            <component :is="currentView" :index='curruntIndex' 
            :contents="curruntContents" @submit="onReceive">
            </component>
        </div>
    </div>
</template>

<script>
import forderTag from './forder-tag';
import defaultContent from './default-content';
import mainContent from './main-content';

export default {
  data() {
    return {
      tags: [],
      index: 0,
      currentView: defaultContent,
      content: [],
      curruntIndex: 0,
      curruntContents: [],
    }
  },
  components: {
    'forder-tag': forderTag,
  },
  methods: {
    addTag() {
      this.index += 1;
      this.tags.push(this.index);
      this.currentView = mainContent;
      this.content.push([]);
      this.changeView(this.index);
    },
    onReceive(index, title) {
      this.content[index - 1].push(title);
    },
    changeView(page) {
      this.curruntIndex = page;
      this.curruntContents = this.content[page - 1];
    },
  },
};
</script>

<style>
html * {
    padding: 0;
}

#container {
    width: 900px;
    height: 500px;
    margin: auto;
}

.tag {
  position: relative;
  left: 0;
  display: inline-block;
  border-bottom: 50px solid rgb(133, 177, 75);
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;
	height: 0;
	width: 50px;
    text-align: center;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
}

.active-tag {
    border-bottom: 50px solid #207c3c;
}

#tag-box {
    display: inline-block;
}

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
