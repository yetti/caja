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

type UserMenuEvent = { type: 'TOGGLE_USER_MENU' } | { type: 'CLOSE_USER_MENU' }

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
  | {
      value: 'hidden'
      context: UserMenuContext & {
        visible: false
      }
    }

type UserMenuMachine = {
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
        TOGGLE_USER_MENU: 'visible',
      },
    },
    visible: {
      on: {
        TOGGLE_USER_MENU: 'hidden',
        CLOSE_USER_MENU: 'hidden',
      },
    },
    hidden: {
      on: {
        TOGGLE_USER_MENU: 'visible',
      },
    },
  },
})

export const useUserMenuMachine = function (): UserMenuMachine {
  return useMachine(userMenuMachine)
}
