# nuxt-verify-code

## See the demo

- [Demo](https://alexangum.ru/)

## Build Setup

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

## Usage

```jsx
<template>
  <SendCode :fields="4" :timer-seconds="10" @verifyCode="setVerifyCode" @reset="resetVerifyCode" />
</template>

<script lang="ts">
import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore() as any

    const setVerifyCode = (data: any) => {
      store.commit('CHANGE_VERIFY_CODE', data)
    }

    const resetVerifyCode = () => {
      store.commit('CHANGE_VERIFY_CODE', '')

      /* here your function to send code */
    }

    return {
      setVerifyCode,
      resetVerifyCode,
    }
  },
})
</script>
```