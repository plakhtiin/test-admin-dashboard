import { reducer, initialRoomState } from './room.reducer';

describe('Rooms Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialRoomState, action);

      expect(result).toBe(initialRoomState);
    });
  });
});
