import React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DateReserve from '@/components/DateReserve';

export default function Booking() {
    return (
        <main className='min-h-screen bg-gray-100 flex items-center justify-center py-10'>
            <div className='bg-white w-full max-w-lg p-8 rounded-lg shadow-lg'>
                <div className='text-2xl font-semibold text-center mb-6 text-gray-800'>Vaccine Booking</div>
                <form className="flex flex-col gap-6">
                    <TextField
                        name="Name-Lastname"
                        label="Name-Lastname"
                        variant="standard"
                        fullWidth
                        className="border-b-2 border-gray-300 focus:border-blue-500"
                    />
                    <TextField
                        name="Citizen ID"
                        label="Citizen ID"
                        variant="standard"
                        fullWidth
                        className="border-b-2 border-gray-300 focus:border-blue-500"
                    />
                    <FormControl variant="standard" fullWidth className="border-b-2 border-gray-300 focus-within:border-blue-500">
                        <InputLabel id="hospital-label">Select Hospital</InputLabel>
                        <Select
                            variant='standard'
                            labelId="hospital-label"
                            id="hospital"
                            defaultValue=""
                            className="focus:ring-0"
                        >
                            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                            <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                        </Select>
                    </FormControl>
                    <DateReserve />
                    <Button
                        type="submit"
                        variant="contained"
                        name="Book Vaccine"
                        fullWidth
                        className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg py-2"
                    >
                        Book Vaccine
                    </Button>
                </form>
            </div>
            <PromoteCard />
        </main>
    );
}
