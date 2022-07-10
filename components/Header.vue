<template>
  <div class="header">
    <ul class="nav">
      <li class="nav__item" v-for="item in links" :key="item.name">
        <nuxt-link :to="{ name: item.name }">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <!-- <div class="toggle-theme">
      <div class="toggle-theme__item toggle-theme__item--moon" v-show="getThemeDark" @click="handleToggleTheme">
        <img src="@/assets/img/i-moon.svg" alt="" />
      </div>
      <div class="toggle-theme__item toggle-theme__item--sun" v-show="!getThemeDark" @click="handleToggleTheme">
        <img src="@/assets/img/i-sun.svg" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      links: [
        {
          name: 'home',
          title: 'Home',
        },
        {
          name: 'projects',
          title: 'Projects',
        },
        {
          name: 'blog',
          title: 'Blog',
        },
      ],
    }
  },
  methods: {
    handleToggleTheme() {
      this.toggleThemeDark()
    },
    ...mapActions(['toggleThemeDark']),
  },
  computed: {
    ...mapGetters(['getThemeDark']),
  },
  mounted() {
    const body = document.querySelector('body')
    if (this.getThemeDark) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  max-width: 768px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  padding: 8px 16px;
  background: #20202380;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  z-index: 100;
  .nav {
    display: flex;
    align-items: center;
    grid-gap: 24px;
    padding: 0;
    margin: 0;
    &__item {
      padding: 6px 0;
      position: relative;
      list-style: none;
      font-size: 16px;
      line-height: 24px;
      //   &:hover {
      //     &::before {
      //       width: 100%;
      //     }
      //     a {
      //       color: #4646e7;
      //     }
      //   }
      //   &:before {
      //     content: '';
      //     position: absolute;
      //     top: 100%;
      //     left: 0;
      //     width: 0;
      //     height: 1px;
      //     background-color: #4646e7;
      //     transition: all ease 0.3s;
      //   }
      a {
        color: #fff;
        text-transform: capitalize;
        transition: all ease 0.3s;
        &.nuxt-link-exact-active.nuxt-link-active {
          color: #4646e7;
          font-weight: 700;
        }
      }
    }
  }
  .toggle-theme {
    &__item {
      padding: 6px 12px;
      cursor: pointer;
      transition: all ease 0.3s;
      border-radius: 6px;
      &--sun {
        background-color: #fff;
      }
      &--moon {
        background-color: #4646e7;
      }
      img {
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
  }
}
</style>
