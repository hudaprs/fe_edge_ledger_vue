<template>
  <div>
    <main id="about">
      <!-- Icons -->
      <section id="icons" class="icons bg-light">
        <div class="flex-items">
          <div>
            <em class="fas fa-university fa-2x"></em>
            <h3>Investment Banking</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iusto!
            </p>
          </div>
          <div>
            <em class="fas fa-book-reader fa-2x"></em>
            <h3>Portfolio Manager</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iusto!
            </p>
          </div>
          <div>
            <em class="fas fa-pencil-alt fa-2x"></em>
            <h3>Tax & Custodial</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iusto!
            </p>
          </div>
        </div>
      </section>

      <!-- Solutions -->
      <section id="solutions" class="solutions flex-columns">
        <div class="row">
          <div class="column">
            <div class="column-1">
              <img src="../assets/images/home/people.jpg" alt="People">
            </div>
          </div>
          <div class="column bg-primary">
            <div class="column-2">
              <h4>
                What you are looking for 
              </h4>
              <h2>
                We Provide Bespoke Solutions
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate architecto eaque blanditiis aperiam atque alias molestias repellendus dolorem incidunt, itaque in vitae aliquid, perferendis hic ipsa nostrum quisquam facere.
              </p>
              <a href="#cases" class="btn btn-outline">
                <em class="fas fa-chevron-right"></em>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Cases -->
      <section id="cases" class="cases flex-grid section-padding">
        <section class="section-header">
          <h4>
            This is what we do
          </h4>
          <h2>
            Business Cases
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!
          </p>
        </section>
        <div class="row">
          <VueEasyLightbox
            :visible="visible"
            :imgs="imgs"
            :index="index"
            @hide="handleHide"
          ></VueEasyLightbox>
          <div class="column">
            <img @click="showMultiple(1)" src="../assets/images/cases/cases1.jpg" alt="Cases 1">
            <img @click="showMultiple(2)" src="../assets/images/cases/cases2.jpg" alt="Cases 2">
          </div>
          <div class="column">
            <img @click="showMultiple(3)" src="../assets/images/cases/cases3.jpg" alt="Cases 3">
            <img @click="showMultiple(4)" src="../assets/images/cases/cases4.jpg" alt="Cases 4">
          </div>
          <div class="column">
            <img @click="showMultiple(5)" src="../assets/images/cases/cases5.jpg" alt="Cases 5">
            <img @click="showMultiple(6)" src="../assets/images/cases/cases6.jpg" alt="Cases 6">
          </div>
          <div class="column">
            <img @click="showMultiple(7)" src="../assets/images/cases/cases7.jpg" alt="Cases 7">
            <img @click="showMultiple(8)" src="../assets/images/cases/cases8.jpg" alt="Cases 8">
          </div>
        </div>
      </section>

      <!-- Blog -->
      <section id="blog" class="blog flex-columns flex-reverse">
        <div class="row">
          <div class="column">
            <div class="column-1">
              <img src="../assets/images/home/blog.jpg" alt="Blog">
            </div>
          </div>
          <div class="column bg-secondary">
            <div class="column-2">
              <h4>
                May 1 2020
              </h4>
              <h2>
                Blog Post One
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate architecto eaque blanditiis aperiam atque alias molestias repellendus dolorem incidunt, itaque in vitae aliquid, perferendis hic ipsa nostrum quisquam facere.
              </p>
              <router-link to="/blog" class="btn btn-outline">
                <em class="fas fa-chevron-right"></em>
                Read Our Blog
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section id="team" class="team bg-light section-padding">
        <section class="section-header">
          <h4>
            Who we are
          </h4>
          <h2>
            Our Professional Team
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolore!
          </p>
        </section>
        <div class="flex-items">
          <div>
            <img src="../assets/images/team/person1.jpg" alt="John Doe">
            <h4>
              John Doe
            </h4>
            <p>
              President
            </p>
          </div>
          <div>
            <img src="../assets/images/team/person2.jpg" alt="Jane Doe">
            <h4>
              Jane Doe
            </h4>
            <p>
              Vice President
            </p>
          </div>
          <div>
            <img src="../assets/images/team/person3.jpg" alt="Smith Will">
            <h4>
              Smith Will
            </h4>
            <p>
              Operational Head
            </p>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="contact flex-columns">
        <div class="row">
          <div class="column">
            <div class="column-1">
              <img src="../assets/images/home/contact.jpg" alt="Contact">
            </div>
          </div>
          <div class="column bg-light">
            <div class="column-2">
              <h2>
                Callback Request
              </h2>
              <form action="" class="callback-form">
                <div class="form-control">
                  <input type="text" name="name" id="name" placeholder="Enter Name">
                </div>
                <div class="form-control">
                  <input type="email" name="email" id="email" placeholder="Enter Email">
                </div>
                <div class="form-control">
                  <input type="text" name="phone" id="phone" placeholder="Enter Phone">
                </div>
                <input type="button" class="btn btn-primary" value="Send">
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import VueEasyLightbox from 'vue-easy-lightbox'

  export default {
    name: 'Home',
    components: {
      VueEasyLightbox
    },
    data() {
      return {
        imgs: null,  // Img Url , string or Array
        visible: false,
        index: 0
      }
    },
    methods: {
      show() {
        this.visible = true
      },
      showMultiple(index) {
        this.imgs = [
          require('../assets/images/cases/cases1.jpg'),
          require('../assets/images/cases/cases2.jpg'),
          require('../assets/images/cases/cases3.jpg'),
          require('../assets/images/cases/cases4.jpg'),
          require('../assets/images/cases/cases5.jpg'),
          require('../assets/images/cases/cases6.jpg'),
          require('../assets/images/cases/cases7.jpg'),
          require('../assets/images/cases/cases8.jpg')
        ]
        this.index = index - 1
        this.show()
      },
      handleHide() {
        this.visible = false
      }
    }
  }
</script>