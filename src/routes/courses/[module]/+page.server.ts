import type { PageLoad } from './$types';

import { db } from '$lib/firebase/client';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const load: PageLoad = async ({ params }) => {
	const q = query(collection(db, 'document'), where('module', '==', params.module));
	const querySnapshot = await getDocs(q);

	const documents = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	})) as IDocument[];

	return { documents };
};
