<template>
  <!-- Resume Subpage -->
  <section data-id="resume" class="animated-section">
    <div class="page-title">
      <h2>Resume</h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-12 col-sm-7 mb-4">
          <div class="block-title">
            <h3>Experience</h3>
          </div>

          <div class="timeline timeline-second-style clearfix">
            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2024 - Present</h5>
                <a href="https://microsanconsulting.com/" class="item-company"
                  >Microsan Consultancy Services
                  <font-awesome-icon icon="external-link-alt"
                /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Full Stack Developer</h4>
                <p class="">
                  I develop dApps for web and mobile, ensuring seamless
                  blockchain integration. I build and deploy scalable smart
                  contracts and design secure, user-focused DeFi platforms.
                  Using tools like React, Node.js, Solidity, Rust, and Web3.js,
                  I deliver end-to-end blockchain solutions while collaborating
                  with clients to meet their needs effectively.
                </p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2021 - 2023</h5>
                <a
                  href="https://spectre.software/"
                  target="_blank"
                  class="item-company"
                  >SpeCtre <font-awesome-icon icon="external-link-alt"
                /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Blockchain Developer</h4>
                <p class="">
                  I developed smart contracts for DeFi projects, improving
                  efficiency and user experience. I built dApp front-ends with
                  React, Web3.js, and IPFS, optimizing blockchain interactions.
                  I reduced gas costs and enhanced transaction throughput on
                  Ethereum and other networks. Collaborating with teams, I
                  integrated dApps into ecosystems and delivered successful
                  blockchain projects.
                </p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2018 - 2020</h5>
                <a
                  href="https://hexacore.in/"
                  target="_blank"
                  class="item-company"
                  >HexaCore <font-awesome-icon icon="external-link-alt"
                /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Blockchain Developer</h4>
                <p class="">
                  I developed blockchain applications, focusing on smart
                  contracts for supply chain and DeFi. I created decentralized
                  ledgers for transparency, tokenized real-world assets, and
                  designed a custom consensus algorithm to optimize networks. I
                  also integrated secure wallets and DEXs across blockchains.
                </p>
              </div>
            </div>

            <div class="timeline-item clearfix">
              <div class="left-part">
                <h5 class="item-period">2015 - 2018</h5>
                <a
                  href="https://kaz.com.bd"
                  target="_blank"
                  class="item-company"
                  >Kaz Software <font-awesome-icon icon="external-link-alt"
                /></a>
              </div>
              <div class="divider"></div>
              <div class="right-part">
                <h4 class="item-title">Web Developer</h4>
                <p class="">
                  I built web applications with JavaScript, HTML5, CSS3, and
                  AngularJS. I integrated front-ends with blockchain backends,
                  implemented APIs, and enhanced user experiences with
                  third-party libraries. I ensured quality and functionality
                  through agile collaboration with clients.
                </p>
              </div>
            </div>
          </div>

          <div class="white-space-50"></div>

          <!-- Knowledges -->
          <div class="block-title">
            <h3>Knowledge & Others</h3>
          </div>

          <ul class="knowledges">
            <li>Ethereum</li>
            <li>Solana</li>
            <li>Polkadot</li>
            <li>Chainlink</li>
            <li>Digital Marketing</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Scrum Methodologies</li>
            <li>Web3</li>
            <li>Code testing</li>
          </ul>
          <!-- End of Knowledges -->
        </div>

        <!-- Skills & Certificates -->
        <div class="col-12 col-sm-5">
          <!-- Coding Skills -->
          <div class="block-title">
            <h3>
              Coding
              <span>Skills</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill
              v-for="(item, index) in skills"
              :key="index"
              :title="item.title"
              :percentage="parseInt(item.percentage)"
            ></Skill>
          </div>
          <!-- End of Coding Skills -->

          <div class="white-space-10"></div>

          <div class="block-title">
            <h3>
              DBMS / Services
              <span>Used</span>
            </h3>
          </div>

          <div class="skills-info skills-second-style">
            <Skill title="MySQL" :percentage="90"></Skill>
            <Skill title="MongoDB" :percentage="85"></Skill>
            <Skill title="PostgreSQL" :percentage="75"></Skill>
            <Skill title="Firebase" :percentage="70"></Skill>
          </div>
          <!-- End of Coding Skills -->
        </div>
      </div>
    </div>
  </section>
  <!-- End of Resume Subpage -->
</template>

<script>
import { mapGetters } from "vuex";
import Skill from "../components/Skill";

export default {
  name: "Resume",
  components: {
    Skill,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      skills: "author/getSkills",
    }),
  },
  mounted() {
    document.title = "@KaiJieLie_ | Resume";
  },
};
</script>
