<template>
  <div class="tag" :class="activeChk" @click="clicked">
    {{ index }}
  </div>
</template>

<script>
export default {
  props: ['index', 'curruntIndex'],
  data() {
    return {
      activeTag: 'active-tag',
      tag: 'tag',
    };
  },
  methods: {
    clicked() {
      this.$emit('clicked', this.index);
    },
  },
  computed: {
    activeChk() {
      if (this.index === this.curruntIndex) {
        return {
          'active-tag': true,
        };
      }

      return {
        'active-tag': false,
      };
    },
  },
};
</script>

<style>

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

</style>
