import { Ref } from 'vue'
import {
  createMachine,
  Interpreter,
  State,
  StateSchema,
  PayloadSender,
} from 'xstate'
import { useMachine } from '@xstate/vue'

interface UserMenuContext {
  visible: false
}

type UserMenuEvent = { type: 'TOGGLE_VISIBILITY' }

type UserMenuState =
  | {
      value: 'idle'
      context: UserMenuContext & {
        visible: false
      }
    }
  | {
      value: 'visible'
      context: UserMenuContext & {
        visible: true
      }
    }

type UserMenuMachineService = {
  state: Ref<
    State<
      UserMenuContext,
      UserMenuEvent,
      StateSchema<UserMenuContext>,
      UserMenuState
    >
  >
  send: PayloadSender<UserMenuEvent>
  service: Interpreter<UserMenuContext, any, UserMenuEvent, UserMenuState>
}

const userMenuMachine = createMachine<
  UserMenuContext,
  UserMenuEvent,
  UserMenuState
>({
  id: 'userMenu',
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE_VISIBILITY: 'visible',
      },
    },
    visible: {
      on: {
        TOGGLE_VISIBILITY: 'hidden',
      },
    },
    hidden: {
      on: {
        TOGGLE_VISIBILITY: 'visible',
      },
    },
  },
})

export const useUserMenuMachine = function ({
  state: string = {},
}): UserMenuMachineService {
  return useMachine(userMenuMachine)
}
