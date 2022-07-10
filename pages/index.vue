<template>
  <div class="page">
    <!-- <div class="hello">Hello, I'm a Frontend Developer from Vietnam.</div> -->
    <div class="profile">
      <div class="profile__info">
        <h2 class="profile__info-name">Nguyễn Văn Phước</h2>
        <p class="profile__info-position">Frontend Developer</p>
      </div>
      <div class="profile__avatar">
        <img src="@/assets/img/avatar.jpg" alt="" />
      </div>
    </div>
    <!-- Summary -->
    <div class="group">
      <!-- <h3 class="heading">Summary</h3> -->
      <h3 class="heading">Giới thiệu</h3>
      <p class="content">
        Mong muốn được làm việc ở một môi trường năng động, chuyên nghiệp, nơi mà có thể phát triển bản thân, được công
        nhận để vận dụng tối đa kinh nghiệm và kỹ năng đã có trong công việc đảm nhận và học hỏi thêm kinh nghiệm. Tìm
        kiếm cơ hội thăng tiến, thành công trong công việc và góp phần xây dựng công ty ngày càng phát triển
      </p>
      <!-- <nuxt-link class="btn btn--primary" :to="{ name: 'projects' }">
        <span>My Projects</span>
        <a-icon type="caret-right" theme="filled" />
      </nuxt-link> -->
    </div>
    <!-- Experience -->
    <div class="group">
      <!-- <h3 class="heading">Experience</h3> -->
      <h3 class="heading">Kinh nghiệm</h3>
      <div class="timelines">
        <div class="item">
          <span class="item__date"> 04/2021 - 10/2021 </span>
          <div class="item__text">
            <p class="item__text-title">Epal Solution <span>(Lập trình Wordpress)</span></p>
            <div class="item__text-content">
              <p>Nhận file Figma từ design từ đó code ra giao diện và thêm tính năng cần thiết cho khách hàng</p>
            </div>
          </div>
        </div>
        <div class="item">
          <span class="item__date"> 11/2021 - 04/2022 </span>
          <div class="item__text">
            <p class="item__text-title">Eco Group <span>(Fresher Frontend)</span></p>
            <div class="item__text-content">
              <p>Training VueJS</p>
              <p>Tham gia vào dự án: Ecogreen</p>
            </div>
          </div>
        </div>
        <div class="item">
          <span class="item__date"> 4/2022 - hiện tại </span>
          <div class="item__text">
            <p class="item__text-title">Global Study Guide <span>(Frontend)</span></p>
            <div class="item__text-content">
              <p>Làm việc với designer và backend để cùng phát triển các sản phẩm của công ty</p>
              <p>Tham gia vào dự án: Startupbooster, GSG, Smart Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Skills -->
    <div class="group">
      <!-- <h3 class="heading">Skills</h3> -->
      <h3 class="heading">Kỹ năng</h3>
      <div class="timelines">
        <div class="item">
          <span class="item__date"> Ngôn ngữ </span>
          <div class="item__text">HTML 5, CSS3, JavaScript</div>
        </div>
        <div class="item">
          <span class="item__date"> Thư viện </span>
          <div class="item__text">VueJS, NuxtJS, Tailwind, Antdv</div>
        </div>
        <div class="item">
          <span class="item__date"> Công cụ</span>
          <div class="item__text">Git, Photoshop, Figma</div>
        </div>
        <div class="item">
          <span class="item__date"> Kỹ năng mềm </span>
          <div class="item__text">Làm việc nhóm, giao tiếp</div>
        </div>
      </div>
    </div>
    <!-- Education -->
    <div class="group">
      <!-- <h3 class="heading">Education</h3> -->
      <h3 class="heading">Học vấn</h3>
      <div class="timelines">
        <div class="item">
          <span class="item__date"> 08/2018 - 2021 </span>
          <div class="item__text">
            <p class="item__text-title">Cao Đẳng Miền Nam <span>(Công Nghệ Thông Tin)</span></p>
            <div class="item__text-content">
              <p>Điểm tích lũy: 3.11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact -->
    <div class="group">
      <h3 class="heading">Contact</h3>
      <div class="contact">
        <a class="contact__item" href="mailto:nguyenphuoc04052000@gmail.com" target="_blank">
          <a-icon type="mail" />
          <span>nguyenphuoc04052000@gmail.com</span>
        </a>
        <a class="contact__item" href="https://github.com/nguyenphuoc450" target="_blank">
          <a-icon type="github" />
          <span>Github</span>
        </a>
        <a class="contact__item" href="https://www.linkedin.com/in/nguyenphuoc450/" target="_blank">
          <a-icon type="linkedin" />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.page {
  .hello {
    padding: 12px 24px;
    background-color: rgba(255, 255, 255, 0.08);
    text-align: center;
    border-radius: 4px;
  }
  .profile {
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 16px;
    &__info {
      &-name {
        margin: 0;
        font-size: 36px;
        line-height: 48px;
        font-weight: 700;
        color: #fff;
      }
      &-position {
        margin: 0;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
      }
    }
    &__avatar {
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
}
.group {
  margin-top: 16px;
}
.timelines {
  .item {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid #525252;
    &.no-border {
      border: none;
      padding: 0;
    }
    &:first-child {
      padding-top: 0;
    }
    &__date {
      font-weight: 700;
    }
    &__text {
      &-title {
        span {
          opacity: 0.6;
        }
      }
      p {
        margin-bottom: 6px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
.contact {
  a {
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    grid-gap: 12px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
