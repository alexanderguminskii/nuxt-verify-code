export const state = () => ({
  verifyData: {
    phone: '+37533585363',
    code: ''
  }
})

export const mutations = {
  CHANGE_VERIFY_CODE(state, code) {
    state.verifyData.code = code
  }
}