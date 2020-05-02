<template>
  <div id="home">
    <header :class="this.$route.meta.isHome ? 'hero' : 'hero blog'">
      <div id="navbar" class="navbar top">
        <h1 class="logo">
          <span class="text-primary">
            <em class="fas fa-book-open"></em>
            Edge
          </span>Ledger
        </h1>
        <nav>
          <ul v-if="this.$route.meta.isHome">
            <li>
              <a href="#home" v-smooth-scroll>
                Home
              </a>
            </li>
            <li>
              <a href="#about" v-smooth-scroll>
                About
              </a>
            </li>
            <li>
              <a href="#cases" v-smooth-scroll>
                Cases
              </a>
            </li>
            <li>
              <a href="#blog" v-smooth-scroll>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" v-smooth-scroll>
                Contact
              </a>
            </li>
          </ul>
          <ul v-else>
            <li>
              <a href="/home#home">
                Home
              </a>
            </li>
            <li>
              <a href="/home#about">
                About
              </a>
            </li>
            <li>
              <a href="/home#cases">
                Cases
              </a>
            </li>
            <li>
              <a href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a href="/home#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="content">
        <div v-if="this.$route.meta.isHome">
          <h1>
            The Sky Is The Limit
          </h1>
          <p>
            World class financial assistance
          </p>
          <a href="#" class="btn btn-primary">
            <em class="fas fa-chevron-right"></em>
            Read More
          </a>
        </div>
        <div v-else>
          <h1>
            Blog
          </h1>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>