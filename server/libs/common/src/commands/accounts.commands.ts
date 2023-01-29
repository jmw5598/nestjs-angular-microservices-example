import { MessagePatternCommand } from '../models/message-pattern-command.model'

export const registerAccountCommand: MessagePatternCommand<void> = {
  cmd: 'register'
} as MessagePatternCommand<void>;

export const forgotPasswordCommand: MessagePatternCommand<void> = {
  cmd: 'forgot-password'
} as MessagePatternCommand<void>;

export const resetPasswordCommand: MessagePatternCommand<void> = {
  cmd: 'reset-password'
} as MessagePatternCommand<void>;

export const confirmEmailCommand: MessagePatternCommand<void> = {
  cmd: 'confirm-email'
} as MessagePatternCommand<void>;
