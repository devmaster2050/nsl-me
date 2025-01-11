const state = () => ({
  skills: [
    { percentage: 90, title: "JS | TS" },
    { percentage: 95, title: "HTLM5, CSS3" },
    { percentage: 95, title: "Solidity" },
    { percentage: 80, title: "Rust" },
    { percentage: 90, title: "Web3.js" },
    { percentage: 95, title: "Smart Contracts" },
    { percentage: 90, title: "Hardhat" },
    { percentage: 90, title: "Truffle" },
    { percentage: 70, title: "AWS" },
    { percentage: 85, title: "Git" },
    { percentage: 90, title: "Python" },
    { percentage: 90, title: "DEX" },
    { percentage: 85, title: "CEX" },
    { percentage: 95, title: "React" },
    { percentage: 65, title: "Angular" },
    { percentage: 80, title: "Vue.js" },
    { percentage: 90, title: "Nodejs" },
    { percentage: 80, title: "Vuejs (& nuxtjs)" },
    { percentage: 70, title: "React (& nextjs)" },
    { percentage: 75, title: "React-native" },
    { percentage: 60, title: "Laravel" },
    { percentage: 90, title: "Express.js" },
  ],
});

const getters = {
  getSkills(state) {
    return state.skills;
  },
};

const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
