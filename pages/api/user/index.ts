import { NextApiRequest, NextApiResponse } from 'next';
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
} from '../../../prisma/user';

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        switch (req.method) {
            case 'GET': {
                if (req.query.email) {
                    // Get a single user if id is provided is the query
                    // api/users?email=test@gmail.com
                    const user = await getUser(req.query.email);
                    return res.status(200).json(user);
                } else {
                    // Otherwise, fetch all users
                    const users = await getAllUsers();
                    return res.json(users);
                }
            }
            case 'POST': {
                // Create a new user
                const { name, email, image } = req.body;
                const user = await createUser(email, name, image);
                return res.json(user);
            }
            case 'PUT': {
                // Update an existing user
                const { id, ...updateData } = req.body;
                const user = await updateUser(id, updateData);
                return res.json(user);
            }
            case 'DELETE': {
                // Delete an existing user
                const { id } = req.body;
                const user = await deleteUser(id);
                return res.json(user);
            }
            default:
                break;
        }
    } catch (error) {
        return res.status(500).json({
            ...(typeof error === 'object' ? error : {}),
            message: error.message,
        });
    }
}
