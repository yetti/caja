import { Ref } from 'vue'
import {
  createMachine,
  Interpreter,
  State,
  StateSchema,
  PayloadSender,
} from 'xstate'
import { useMachine } from '@xstate/vue'

interface SlideoverContext {
  visible: false
}

type SlideoverEvent = { type: 'SHOW_SLIDEOVER' } | { type: 'CLOSE_SLIDEOVER' }

type SlideoverState =
  | {
      value: 'idle'
      context: SlideoverContext & {
        visible: false
      }
    }
  | {
      value: 'visible'
      context: SlideoverContext & {
        visible: true
      }
    }
  | {
      value: 'hidden'
      context: SlideoverContext & {
        visible: false
      }
    }

type SlideoverMachine = {
  state: Ref<
    State<
      SlideoverContext,
      SlideoverEvent,
      StateSchema<SlideoverContext>,
      SlideoverState
    >
  >
  send: PayloadSender<SlideoverEvent>
  service: Interpreter<SlideoverContext, any, SlideoverEvent, SlideoverState>
}

const slideoverMachine = createMachine<
  SlideoverContext,
  SlideoverEvent,
  SlideoverState
>({
  id: 'slideover',
  initial: 'idle',
  states: {
    idle: {
      on: {
        SHOW_SLIDEOVER: 'visible',
      },
    },
    visible: {
      on: {
        CLOSE_SLIDEOVER: 'hidden',
      },
    },
    hidden: {
      on: {
        SHOW_SLIDEOVER: 'visible',
      },
    },
  },
})

export const useSlideoverMachine = function (): SlideoverMachine {
  return useMachine(slideoverMachine)
}
