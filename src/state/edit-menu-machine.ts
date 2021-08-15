import { Ref } from 'vue'
import {
  createMachine,
  Interpreter,
  State,
  StateSchema,
  PayloadSender,
} from 'xstate'
import { useMachine } from '@xstate/vue'

interface EditMenuContext {
  visible: false
}

type EditMenuEvent = { type: 'TOGGLE_EDIT_MENU' } | { type: 'CLOSE_EDIT_MENU' }

type EditMenuState =
  | {
      value: 'idle'
      context: EditMenuContext & {
        visible: false
      }
    }
  | {
      value: 'visible'
      context: EditMenuContext & {
        visible: true
      }
    }
  | {
      value: 'hidden'
      context: EditMenuContext & {
        visible: false
      }
    }

type EditMenuMachine = {
  state: Ref<
    State<
      EditMenuContext,
      EditMenuEvent,
      StateSchema<EditMenuContext>,
      EditMenuState
    >
  >
  send: PayloadSender<EditMenuEvent>
  service: Interpreter<EditMenuContext, any, EditMenuEvent, EditMenuState>
}

const editMenuMachine = createMachine<
  EditMenuContext,
  EditMenuEvent,
  EditMenuState
>({
  id: 'editMenu',
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE_EDIT_MENU: 'visible',
      },
    },
    visible: {
      on: {
        TOGGLE_EDIT_MENU: 'hidden',
        CLOSE_EDIT_MENU: 'hidden',
      },
    },
    hidden: {
      on: {
        TOGGLE_EDIT_MENU: 'visible',
      },
    },
  },
})

export const useEditMenuMachine = function (): EditMenuMachine {
  return useMachine(editMenuMachine)
}
