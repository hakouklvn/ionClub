import { db } from "$lib/firebase/client";
import { fail } from "@sveltejs/kit";
import { addDoc, collection } from "firebase/firestore";

export const actions = {
	default: async ({ request }: { request: Request }): Promise<any> => {
		const formData = Object.fromEntries(await request.formData());
		try {
			await addDoc(collection(db, 'subscription'), {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				phone: formData.phone,
				description: formData.message
			});
			return { success: true };
		} catch (err: any) {
			return fail(400, {
				error: true,
				message: err.message !== '' ? err.message : 'Something went wrong, please try again'
			});
		}
	}
};
