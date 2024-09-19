import command from '../../config.json' assert {type: 'json'};

const createArticles = (): string[] => {
	let string = "";
	const articles: string[] = [];
	const files = `${command.articles.length} File(s)`;
	const SPACE = "&nbsp;";

	articles.push("<br>")

	command.articles.forEach((ele) => {
		let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
		string += SPACE.repeat(2);
		string += link;
		console.log('element zero length', ele[0].length)
		string += SPACE.repeat(100 - ele[0].length);
		string += ele[1];
		articles.push(string);
		string = '';
	});

	articles.push("<br>");
	articles.push(files);
	articles.push("<br>");
	return articles
}

export const ARTICLES = createArticles()
