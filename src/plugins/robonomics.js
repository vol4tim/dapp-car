import Vue from 'vue';
import RComponents, { filters } from '../RComponents';
import config from '../config';

Vue.filter('urlExplorer', filters.urlExplorer);
Vue.filter('urlIpfs', filters.urlIpfs);
Vue.filter('fromWei', filters.fromWei);

Vue.use(RComponents, {
  ipfs: {
    cdn: 'ipfs.min.js'
  },
  robonomics: {
    version: 5,
    chain: networkId => config.chain(networkId).ROBONOMICS
  }
});
