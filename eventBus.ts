import { EventEmitter } from 'events';
import { EventName, Events } from './events';

const createEventBus = () => {
  const emitter = new EventEmitter();

  const emit = <T extends Events>(event: T['name'], data: T['data']): void => {
    emitter.emit(event, data);
  };

  const on = <T extends Events>(
    event: T['name'], 
    listener: (data: T['data']) => void
  ): void => {
    emitter.on(event, listener);
  };

  return { emit, on };
};

export const eventBus = createEventBus();