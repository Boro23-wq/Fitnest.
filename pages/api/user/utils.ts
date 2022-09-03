export const userExist = async (email) => {
    const response = await fetch(`/api/user?email=${email}`, {
        method: 'GET',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};

export const saveUser = async (loggedInUser) => {
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loggedInUser),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
};
