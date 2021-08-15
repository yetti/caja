import { Ref } from 'vue'
import {
  createMachine,
  Interpreter,
  State,
  StateSchema,
  PayloadSender,
} from 'xstate'
import { useMachine } from '@xstate/vue'

interface GameMenuContext {
  visible: false
}

type GameMenuEvent = { type: 'TOGGLE_GAME_MENU' } | { type: 'CLOSE_GAME_MENU' }

type GameMenuState =
  | {
      value: 'idle'
      context: GameMenuContext & {
        visible: false
      }
    }
  | {
      value: 'visible'
      context: GameMenuContext & {
        visible: true
      }
    }
  | {
      value: 'hidden'
      context: GameMenuContext & {
        visible: false
      }
    }

type GameMenuMachine = {
  state: Ref<
    State<
      GameMenuContext,
      GameMenuEvent,
      StateSchema<GameMenuContext>,
      GameMenuState
    >
  >
  send: PayloadSender<GameMenuEvent>
  service: Interpreter<GameMenuContext, any, GameMenuEvent, GameMenuState>
}

const gameMenuMachine = createMachine<
  GameMenuContext,
  GameMenuEvent,
  GameMenuState
>({
  id: 'userMenu',
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE_GAME_MENU: 'visible',
      },
    },
    visible: {
      on: {
        TOGGLE_GAME_MENU: 'hidden',
        CLOSE_GAME_MENU: 'hidden',
      },
    },
    hidden: {
      on: {
        TOGGLE_GAME_MENU: 'visible',
      },
    },
  },
})

export const useGameMenuMachine = function ({
  state: string = {},
}): GameMenuMachine {
  return useMachine(gameMenuMachine)
}
