interface IDocument {
	id: string;
	name: string;
	resume: string;
	module: string;
	fileUrl: string;
}

interface Module {
	id: string;
	name: string;
	description: string;
	semestre: string;
	year: string;
}
