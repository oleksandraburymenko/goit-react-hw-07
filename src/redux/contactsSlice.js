import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts } from "./contactsOps";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(addContact.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state,  action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                  (item) => item.id !== action.payload.id
                );
                state.loading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.error = true;
                state.loading = false;
            }),
});

export default slice.reducer;