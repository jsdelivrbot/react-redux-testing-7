import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/commentReducer';
import { SAVE_COMMENT } from '../../src/actions';

describe(' comments Reducer', () => {
	it('handles action with unknonw tyoe', () => {
		//expecting what is returned () to be an array
		expect(commentReducer(undefined, {})).to.be.eql([]);
	});

	it('SAVE_COMMENT', () => {
		const action = { type: SAVE_COMMENT, payload: 'new comment' };
		expect(commentReducer([], action)).to.eql(['new asdf']);
	});
});
