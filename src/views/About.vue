<template>
  <!-- About Me Subpage -->
  <section data-id="about-me" class="animated-section">
    <div class="page-title">
      <h2>
        About
        <span>Me</span>
      </h2>
    </div>

    <div class="section-content">
      <!-- Personal Information -->
      <div class="row">
        <div class="col-12 text-justify">
          <p>
            Experienced <strong>Blockchain Full Stack Developer</strong> with
            over 7+ years of expertise in building scalable, secure, and
            user-friendly decentralized applications <strong>(dApps</strong>)
            and <strong>smart contracts</strong>. Specialized in
            <strong>DeFi</strong> platforms, blockchain integration, and
            <strong>Web3</strong>
            solutions across multiple blockchain ecosystems. Proven track record
            of delivering <strong>high-impact projects</strong> in various
            sectors, including <strong>finance</strong>,
            <strong>supply chain</strong>, and <strong>NFTs</strong>. Adept at
            leveraging cutting-edge technologies like <strong>Solidity</strong>,
            <strong>Rust</strong>, and <strong>Web3.js</strong> to create
            seamless decentralized solutions, with a keen focus on security,
            scalability, and performance.
          </p>
        </div>
      </div>
      <!-- End of Personal Information -->

      <div class="white-space-50"></div>

      <!-- Services -->
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="block-title">
            <h3>
              More
              <span>About Me</span>
            </h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="col-inner">
            <div class="info-list-w-icon">
              <div class="info-block-w-icon">
                <div class="ci-icon">
                  <i class="lnr lnr-store"></i>
                </div>
                <div class="ci-text">
                  <h4>
                    Technologies Curious
                    <font-awesome-icon
                      icon="leaf"
                      class="text-primary-custom"
                    />
                  </h4>
                  <p>
                    Since I was introduced to technology, I have been passionate
                    about building and creating. My early fascination with 3D
                    modeling using tools like 3DS-Max and Blender has evolved
                    into a deep interest in cutting-edge technologies.
                  </p>
                  <p>
                    Today, I’m captivated by the potential of blockchain and
                    Web3.0 — a transformative new world that represents the
                    future of innovation. 🚀
                  </p>
                  <p>
                    Learning and applying blockchain technologies like smart
                    contracts, decentralized applications (dApps), and
                    tokenomics has reignited my passion for building. It’s
                    incredibly fulfilling to explore and contribute to this
                    rapidly evolving ecosystem while combining creativity with
                    technical skills. ❤
                  </p>
                </div>
              </div>
              <div class="info-block-w-icon">
                <div class="ci-icon">
                  <i class="lnr lnr-laptop-phone"></i>
                </div>
                <div class="ci-text">
                  <h4>
                    Music
                    <font-awesome-icon
                      icon="music"
                      class="text-primary-custom"
                    />
                  </h4>
                  <p>Without music, I can't stay alive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6">
          <div class="col-inner">
            <div class="info-list-w-icon">
              <div class="info-block-w-icon">
                <div class="ci-icon">
                  <i class="lnr lnr-pencil"></i>
                </div>
                <div class="ci-text">
                  <h4>
                    Traveler beginner
                    <font-awesome-icon
                      icon="globe"
                      class="text-primary-custom"
                    />
                  </h4>
                  <p>
                    Not long ago, I discovered the pleasure of traveling and
                    meeting new people. maybe one day, I will do my world tour
                    too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.section-content -->
  </section>
  <!-- End of About Me Subpage -->
</template>

<script>
export default {
  mounted() {
    this.age = new Date().getFullYear() - 1998;
    document.title = "@KaiJieLie_ | About";
  },
};
</script>
