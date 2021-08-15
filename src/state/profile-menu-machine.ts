import { Ref } from 'vue'
import {
  createMachine,
  Interpreter,
  State,
  StateSchema,
  PayloadSender,
} from 'xstate'
import { useMachine } from '@xstate/vue'

interface ProfileMenuContext {
  visible: false
}

type ProfileMenuEvent =
  | { type: 'TOGGLE_PROFILE_MENU' }
  | { type: 'CLOSE_PROFILE_MENU' }

type ProfileMenuState =
  | {
      value: 'idle'
      context: ProfileMenuContext & {
        visible: false
      }
    }
  | {
      value: 'visible'
      context: ProfileMenuContext & {
        visible: true
      }
    }
  | {
      value: 'hidden'
      context: ProfileMenuContext & {
        visible: false
      }
    }

type ProfileMenuMachine = {
  state: Ref<
    State<
      ProfileMenuContext,
      ProfileMenuEvent,
      StateSchema<ProfileMenuContext>,
      ProfileMenuState
    >
  >
  send: PayloadSender<ProfileMenuEvent>
  service: Interpreter<
    ProfileMenuContext,
    any,
    ProfileMenuEvent,
    ProfileMenuState
  >
}

const profileMenuMachine = createMachine<
  ProfileMenuContext,
  ProfileMenuEvent,
  ProfileMenuState
>({
  id: 'profileMenu',
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE_PROFILE_MENU: 'visible',
      },
    },
    visible: {
      on: {
        TOGGLE_PROFILE_MENU: 'hidden',
        CLOSE_PROFILE_MENU: 'hidden',
      },
    },
    hidden: {
      on: {
        TOGGLE_PROFILE_MENU: 'visible',
      },
    },
  },
})

export const useProfileMenuMachine = function (): ProfileMenuMachine {
  return useMachine(profileMenuMachine)
}
