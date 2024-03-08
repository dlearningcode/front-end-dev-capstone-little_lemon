import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from '../ReservationForm';

test('dispatches action with correct payload when reservationDate changes', () => {
    const dispatch = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    render(<ReservationForm availableTimes={availableTimes} dispatch={dispatch} />);

    const dateInput = screen.getByLabelText('Choose date for reservation');
    fireEvent.change(dateInput, { target: { value: '2024-03-31' } });

    expect(dispatch).toHaveBeenCalledWith({ type: 'DATE_CHANGE', payload: '2024-03-31' });
});