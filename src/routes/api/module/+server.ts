import { json } from '@sveltejs/kit';
import { db } from '$lib/firebase/client';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function GET({ url }) {
	const semester: string = url.searchParams.get('semester');

	const q = query(
		collection(db, 'module'),
		where('year', '==', '1'),
		where('semester', '==', semester)
	);
	const querySnapshot = await getDocs(q);

	const modules = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	})) as Module[];

	return json(modules);
}
