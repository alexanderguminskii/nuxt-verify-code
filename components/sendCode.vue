<template>
  <div class="container">
    <div class="input-verify">
      <template v-for="(v, index) in values">
        <input
          ref="inputRefs"
          :key="index"
          type="number"
          pattern="[0-9]"
          required="required"
          maxlength="1"
          class="input-verify__item"
          :autoFocus="index === autoFocusIndex"
          :data-id="index"
          :value="v"
          @input="onValueChange"
          @focus="onFocus"
          @keydown="keyPres"
        />
      </template>
    </div>
    <div class="input-resend">
      <div class="input-resend__timer">
        Не получили код в смс?
        <span v-if="seconds"> {{ makeTimerValue(seconds) }} </span>
        <a
          v-else
          href="#"
          class="input-resend__link"
          @click.prevent="resetCode"
        >
          Запросить повторно
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    fields: {
      type: Number,
      default: 4,
    },
    timerSeconds: {
      type: Number,
      default: 20,
    },
  },

  setup(props, { emit }) {
    const autoFocusIndex = ref(0) as any
    const values = ref([]) as any
    const inputRefs = ref([]) as any
    const fields = ref(props.fields) as any
    const seconds = ref(props.timerSeconds) as any
    const timerInterval = ref() as any

    for (let i = 0; i < fields.value; i++) {
      values.value.push('')
    }

    const onFocus = (e: any) => {
      e.target.select()
    }

    const onValueChange = (e: any) => {
      const index = parseInt(e.target.dataset.id)
      const nextIndex = index + 1

      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1)

        values.value[index] = e.target.value.split('')[0]
      } else {
        values.value[index] = e.target.value
      }

      if (nextIndex < fields.value) {
        const element = inputRefs.value[nextIndex]

        element.focus()
        element.select()
      }

      trigger()
    }

    const keyPres = (e: any) => {
      const index = parseInt(e.target.dataset.id)
      const prevIndex = index - 1
      const prev = inputRefs.value[prevIndex]

      if (e.key === 'Backspace') {
        e.preventDefault()
        const vals = [...values.value]
        
        if (values.value[index]) {
          vals[index] = ''
          values.value = vals
          trigger()
        } else if (prev) {
          vals[prevIndex] = ''
          prev.focus()
          values.value = vals
          trigger()
        }
      }
    }

    const trigger = () => {
      const code = values.value.join('')

      if (code.length === fields.value) {
        emit('verifyCode', parseInt(code))
      }
    }

    const timer = () => {
      clearInterval(timerInterval.value)

      timerInterval.value = setInterval(() => {
        if (seconds.value <= 0) {
          clearInterval(timerInterval.value)
        } else {
          seconds.value--
        }
      }, 1000)
    }

    timer()

    const resetCode = () => {
      emit('reset', true)

      seconds.value = props.timerSeconds

      timer()
    }

    const makeTimerValue = (value: number) => {
      let seconds = `${value % 60}`
      let minutes = `${Math.floor(value / 60)}`

      if (+seconds < 10) {
        seconds = `0${value % 60}`
      }

      if (+minutes < 10) {
        minutes = `0${Math.floor(value / 60)}`
      }

      return `${minutes}:${seconds}`
    }

    return {
      autoFocusIndex,
      values,
      inputRefs,
      onValueChange,
      onFocus,
      keyPres,
      seconds,
      resetCode,
      makeTimerValue,
    }
  },
})
</script>

<style lang="scss">
.input {
  &-verify {
    width: max-content;
    margin-bottom: 20px;
    &__item {
      box-sizing: border-box;

      padding: 15px;
      margin-right: 16px;
      width: 65px;
      height: 65px;
      font-size: 28px;
      text-align: center;
      border: 1px solid #948787;
      border-radius: 8px;
      outline: 0;
      &:focus {
        border: 1px solid black;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &-resend {
    width: max-content;
    margin-bottom: 20px;
    color: #494949;
    font-size: 16px;
    &__link {
      color: #a71b1b;
      text-decoration: none;
    }
  }
}

.container {
  padding-top: 50px;
  width: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

body {
  box-sizing: border-box;
  margin: 0;
}

input {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
