import { Ref } from 'vue'
import {
  createMachine,
  Interpreter,
  State,
  StateSchema,
  PayloadSender,
} from 'xstate'
import { useMachine } from '@xstate/vue'

interface SidebarContext {
  visible: false
}

type SidebarEvent = { type: 'TOGGLE_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' }

type SidebarState =
  | {
      value: 'idle'
      context: SidebarContext & {
        visible: false
      }
    }
  | {
      value: 'visible'
      context: SidebarContext & {
        visible: true
      }
    }
  | {
      value: 'hidden'
      context: SidebarContext & {
        visible: false
      }
    }

type SidebarMachine = {
  state: Ref<
    State<
      SidebarContext,
      SidebarEvent,
      StateSchema<SidebarContext>,
      SidebarState
    >
  >
  send: PayloadSender<SidebarEvent>
  service: Interpreter<SidebarContext, any, SidebarEvent, SidebarState>
}

const sidebarMachine = createMachine<
  SidebarContext,
  SidebarEvent,
  SidebarState
>({
  id: 'sidebar',
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE_SIDEBAR: 'visible',
      },
    },
    visible: {
      on: {
        TOGGLE_SIDEBAR: 'hidden',
        CLOSE_SIDEBAR: 'hidden',
      },
    },
    hidden: {
      on: {
        TOGGLE_SIDEBAR: 'visible',
      },
    },
  },
})

export const useSidebarMachine = function ({
  state: string = {},
}): SidebarMachine {
  return useMachine(sidebarMachine)
}
