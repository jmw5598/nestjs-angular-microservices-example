import { MessagePatternCommand } from '../models/message-pattern-command.model';

export const signInCommand: MessagePatternCommand<void> = {
  cmd: 'sign-in'
} as MessagePatternCommand<void>;

export const refreshAccessTokenCommand: MessagePatternCommand<void> = {
  cmd: 'refresh-access-token'
} as MessagePatternCommand<void>;
