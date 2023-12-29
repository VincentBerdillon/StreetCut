import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Card = {
    id: string;
    name: string;
}

type CardState = {
    cards : Card[];
}

const initialState : CardState = {
    cards : [
        {id: '1', name: 'Card1'},
        {id:'2', name: 'Card2'}
    ],
};

const cardSlice = createSlice({
    name : 'cards',
    initialState,
    reducers : {
        addCard : (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        }
    }
})

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;