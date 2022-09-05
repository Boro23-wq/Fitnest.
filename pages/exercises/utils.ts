import axios from 'axios';

export const fetchExercises = async (offset) => {
    console.log(offset);
    const res = await axios.get(
        'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: { offset },
            headers: {
                'X-RapidAPI-Key': process.env
                    .NEXT_PUBLIC_RAPID_API_KEY as string,
                'X-RapidAPI-Host': process.env
                    .NEXT_PUBLIC_RAPID_API_HOST as string,
            },
        }
    );

    return res.data;
};

export const fetchExerciseByName = async (name) => {
    const res = await axios.get(
        'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: { name },
            headers: {
                'X-RapidAPI-Key': process.env
                    .NEXT_PUBLIC_RAPID_API_KEY as string,
                'X-RapidAPI-Host': process.env
                    .NEXT_PUBLIC_RAPID_API_HOST as string,
            },
        }
    );

    return res.data;
};

export const fetchExerciseByType = async (type, offset?) => {
    const res = await axios.get(
        'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: { type, offset },
            headers: {
                'X-RapidAPI-Key': process.env
                    .NEXT_PUBLIC_RAPID_API_KEY as string,
                'X-RapidAPI-Host': process.env
                    .NEXT_PUBLIC_RAPID_API_HOST as string,
            },
        }
    );

    return res.data;
};

export const fetchExerciseByMuscle = async (muscle, offset) => {
    const res = await axios.get(
        'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: { muscle, offset },
            headers: {
                'X-RapidAPI-Key': process.env
                    .NEXT_PUBLIC_RAPID_API_KEY as string,
                'X-RapidAPI-Host': process.env
                    .NEXT_PUBLIC_RAPID_API_HOST as string,
            },
        }
    );

    return res.data;
};
