# nuxt-verify-code

> 📱 verification code component for Nuxt

## see the demo

- [Demo](https://alexangum.ru/)

## install dependencies
```bash
npm install
```

## run project
```bash
npm run dev
```

## usage

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