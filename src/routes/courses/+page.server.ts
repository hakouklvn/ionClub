import { db } from '$lib/firebase/client';
import { collection, getDocs, query } from 'firebase/firestore';

export const load: PageLoad = async () => {
	const q = query(collection(db, 'module'));
	const querySnapshot = await getDocs(q);

	const modules = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	})) as Module[];

	return { modules };
};
