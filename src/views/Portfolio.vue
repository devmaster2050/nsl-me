<template>
  <!-- 404 Subpage -->
  <section id="portfolio" class="portfolio animated-section" ref="portfolio">
    <div class="section-content">
      <div class="page-title mb-0 pb-0">
        <h2>
          My
          <span>Works</span>
        </h2>
      </div>

      <DeveloperActivity class="mt-2 mb-5" />

      <div class="row">
        <div
          class="col-md-6 mb-4"
          v-for="(project, index) in projectList"
          :key="index"
        >
          <div class="portfolio-card-wrapper">
            <div class="portfolio-card">
              <div
                class="portfolio-card-front"
                :style="
                  project.coverImg
                    ? `background-image: url(${project.coverImg});`
                    : ''
                "
              >
                <div class="image_overlay" />

                <div class="view_details btn-primary-custom">View details</div>
                <div class="stats-container">
                  <h3 class="project-name">{{ project.label }}</h3>

                  <div class="project-links">
                    <div class="bar-separator"></div>
                    <ul>
                      <li v-if="project.liveDemoLink">
                        <a
                          :href="project.liveDemoLink"
                          target="_blank"
                          title="Live demo"
                        >
                          <font-awesome-icon :icon="['fas', 'eye']" />
                        </a>
                      </li>
                      <li v-if="project.repoLink">
                        <a
                          :href="project.repoLink"
                          target="_blank"
                          title="Github repo"
                        >
                          <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- /.project-links -->
                </div>
                <!-- /.stats-container -->
              </div>
              <!-- /.portfolio-card-front -->

              <div class="portfolio-card-back">
                <div class="description-wrapper">
                  <h3 class="description-title">{{ project.label }}</h3>

                  <div class="bar-separator"></div>
                  <p class="description-content">
                    <span
                      v-if="project.description"
                      v-html="project.description"
                    >
                    </span>
                    <template v-else> No description </template>
                  </p>
                </div>

                <div class="footer">
                  <a
                    v-if="project.liveDemoLink"
                    :href="project.liveDemoLink"
                    class="mr-2"
                    target="_blank"
                    title="Live demo"
                  >
                    <font-awesome-icon :icon="['fas', 'eye']" />
                    Live demo
                  </a>

                  <a
                    v-if="project.repoLink"
                    :href="project.repoLink"
                    target="_blank"
                    title="Live demo"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" />
                    Github repo
                  </a>
                  <div
                    class="d-flex align-items-center"
                    v-if="project.linkToShare"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'share-alt']"
                      class="mr-2"
                    />
                    <a
                      :href="
                        `https://www.linkedin.com/shareArticle
												?mini=true
												&url=${project.linkToShare}
												&title=Share my work on Linkedin
												&summary=I share with you this project which interested me a lot!
												&source=Kai Jie Liemvo`
                      "
                      target="_blank"
                      class="mr-2"
                    >
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                      Linkedin</a
                    >
                    <a
                      :href="
                        `https://twitter.com/intent/tweet
												?url=${project.linkToShare}
												&title=Share my work on Twitter
												&text=I share with you this project which interested me a lot!
												&hashtags=nathanMandemvo,${project.hashtags}`
                      "
                      target="_blank"
                      class="mr-2"
                    >
                      <font-awesome-icon :icon="['fab', 'twitter']" />
                      Twitter</a
                    >
                  </div>
                </div>

                <div class="flip-back">
                  <div class="cy"></div>
                  <div class="cx"></div>
                </div>
              </div>
              <!-- /.portfolio-card-back -->
            </div>
            <!-- /.portfolio-card -->
          </div>
          <!-- /.portfolio-card-wrapper -->
        </div>
        <!-- /.col-sm-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.section-content -->
  </section>
  <!-- /.portfolio -->
</template>

<script>
// HELPERS
import animatePortfolioCard from "../assets/js/animatePortfolioCard";

// COMPONENTS
import DeveloperActivity from "../components/DeveloppeurActivity";

// IMGS
const nexusProLandingImg01 = require("../assets/img/projects/nexusProLandingImg_01.png");
const nexusProLandingImg02 = require("../assets/img/projects/nexusProLandingImg_02.png");
const nexusProLandingImg03 = require("../assets/img/projects/nexusProLandingImg_03.png");
const metaSwapImg01 = require("../assets/img/projects/metaswap_01.png");
const metaSwapImg02 = require("../assets/img/projects/metaswap_02.png");
const metaSwapImg03 = require("../assets/img/projects/metaswap_03.png");

export default {
  components: {
    DeveloperActivity,
  },
  data() {
    return {
      projectList: [
        {
          label: "Nexus Pro Landing",
          description: `
						A platform that facilitates the trading of Nexus Pro tokens, focusing on providing users with a seamless experience in acquiring and managing digital assets.
					`,
          coverImg: nexusProLandingImg01,
          liveDemoLink: "https://nexuspro.io",
          linkToShare: "https://nexuspro.io",
          repoLink: "https://github.com/devmaster2050/nexuspro",
          hashtags:
            "OpenSource,blockchain,cryptoswap,nexuspro.io, Typescript,react,node.js,GraphQl,react,reactNative,Angular",
        },
        {
          label: "Nexus Pro Landing",
          description: `
						A platform that facilitates the trading of Nexus Pro tokens, focusing on providing users with a seamless experience in acquiring and managing digital assets.
					`,
          coverImg: nexusProLandingImg02,
          liveDemoLink: "https://nexuspro.io",
          linkToShare: "https://nexuspro.io",
          repoLink: "https://github.com/devmaster2050/nexuspro",
          hashtags:
            "OpenSource,blockchain,cryptoswap,nexuspro.io, Typescript,react,node.js,GraphQl,react,reactNative,Angular",
        },
        {
          label: "Nexus Pro Landing",
          description: `
						A platform that facilitates the trading of Nexus Pro tokens, focusing on providing users with a seamless experience in acquiring and managing digital assets.
					`,
          coverImg: nexusProLandingImg03,
          liveDemoLink: "https://nexuspro.io",
          linkToShare: "https://nexuspro.io",
          repoLink: "https://github.com/devmaster2050/nexuspro",
          hashtags:
            "OpenSource,blockchain,cryptoswap,nexuspro.io, Typescript,react,node.js,GraphQl,react,reactNative,Angular",
        },
        {
          label: "MetaSwap",
          description: `
						MetaSwap is associated with various platforms in the blockchain and cryptocurrency space, each serving different functions.
					`,
          coverImg: metaSwapImg01,
          liveDemoLink: "https://metaswap.freeblock.site",
          linkToShare: "https://metaswap.freeblock.site",
          repoLink: "https://github.com/devmaster2050/metaswap",
          hashtags: "MetaSwap,ethereum,wallet, cryptocurrency, solana, binance",
        },
        {
          label: "MetaSwap",
          description: `
						MetaSwap is associated with various platforms in the blockchain and cryptocurrency space, each serving different functions.
					`,
          coverImg: metaSwapImg02,
          liveDemoLink: "https://metaswap.freeblock.site",
          linkToShare: "https://metaswap.freeblock.site",
          repoLink: "https://github.com/devmaster2050/metaswap",
          hashtags: "MetaSwap,ethereum,wallet, cryptocurrency, solana, binance",
        },
        {
          label: "MetaSwap",
          description: `
						MetaSwap is associated with various platforms in the blockchain and cryptocurrency space, each serving different functions.
					`,
          coverImg: metaSwapImg03,
          liveDemoLink: "https://metaswap.freeblock.site",
          linkToShare: "https://metaswap.freeblock.site",
          repoLink: "https://github.com/devmaster2050/metaswap",
          hashtags: "MetaSwap,ethereum,wallet, cryptocurrency, solana, binance",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const domPortfolioCards = window.document.querySelectorAll(
        "#portfolio .portfolio-card"
      );
      domPortfolioCards.forEach((portFolioCard) => {
        animatePortfolioCard(portFolioCard);
      });
    }, 1000);
    document.title = "@KaiJieLie_ | Works";
  },
};
</script>
