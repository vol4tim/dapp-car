const chains = {
  1: {
    ROBONOMICS: {
      ens: '',
      ensSuffix: 'eth',
      lighthouse: 'chainm.lighthouse.5.robonomics.eth'
    }
  },
  4451: {
    ROBONOMICS: {
      ens: '0xaC4Ac4801b50b74aa3222B5Ba282FF54407B3941',
      ensSuffix: 'sid',
      lighthouse: 'airalab.lighthouse.5.robonomics.sid'
    }
  },
  4: {
    ROBONOMICS: {
      ens: '0x9D70a7ecf0834ca14969f676e54834F12eaE5E10',
      ensSuffix: 'eth',
      lighthouse: 'mytest.lighthouse.5.robonomics.eth'
    }
  }
};

export default networkId => {
  return chains[networkId];
};
