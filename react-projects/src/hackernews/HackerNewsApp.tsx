import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Navigation from "./Navigation";

import './HackerNewsScroll.css'

import { ArticleType, ArticleCommentType } from "./constants/constants";

import hero from './assets/img/hero.png';
import Article from "./Article";
import ArticleModal from "./ArticleModal";



const HackerNewsApp = () => {
	let [newsPage, setNewsPage] = useState<number>(0);
	let [showModal, setShowModal] = useState<boolean>(false);

	const [news, setNews] = useState<ArticleType[]>([]);
	const [modalArticle, setModalArticle] = useState<ArticleType>({
		by: '',
		descendants: 0,
		id: 0,
		kids: [],
		score: 0,
		time: 0,
		title: '',
		type: '',
		url: ''
	});
	const [comments, setComments] = useState<ArticleCommentType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");


	const getTopNews = async () => {
		try {
			const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
			const data = await response.json();
			return data;
		} catch (error: any) {
			setError(error);
		}
	};

	const getNews = async (id: number) => {
		try {
			const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
			const data = await response.json();
			const article = {
				by: data.by,
				descendants: data.descendants,
				id: data.id,
				kids: data.kids,
				score: data.score,
				// convert time from unix to readable date
				time: new Date(data.time * 1000).toLocaleDateString("en-UK", { year: 'numeric', month: 'long', day: 'numeric' }),
				title: data.title,
				type: data.type,
				url: data.url
			}
			return article;
		} catch (error: any) {
			setError(error);
		}
	};

	const getNewsData = async (page: number) => {
		setLoading(true);
		const topNews = await getTopNews();
		const news = await Promise.all(topNews.slice((page - 1) * 2, page * 2).map((id: number) => getNews(id)));

		setNews((prevNews) => [...prevNews, ...news]);
		setLoading(false);
	};


	const getArticleComments = async (id: number) => {
		try {
			const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
			const data = await response.json();
			const articleComment = {
				by: data.by,
				id: data.id,
				kids: data.kids,
				parent: data.parent,
				text: data.text,
				// convert time from unix to readable date
				time: data.time,
				type: data.type
			}
			return articleComment as ArticleCommentType;
		} catch (error: any) {
			setError(error);
		}
	};

	const getArticleCommentsData = async (article: ArticleType) => {
		setLoading(true);
		const articleComments = await Promise.all(article.kids.map((id: number) => getArticleComments(id)));
		if (articleComments)
			setComments(articleComments as ArticleCommentType[]);

		setLoading(false);
	};


	const showArticleModal = async (id: number) => {
		const article = news.find((article: ArticleType) => article.id === id);
		if (article) {
			if (article.kids) {
				await getArticleCommentsData(article);
				setModalArticle(article);
				setShowModal(true);
			}
			else {
				setModalArticle(article);
				setShowModal(true);

			}
		}
	}

	const loadMore = () => {
		setNewsPage(newsPage += 1);
		getNewsData(newsPage);
	}

	useEffect(() => {
		document.title = "Hacker News";
		loadMore();
	}, []);

	// load untill scrollbar is shown
	useEffect(() => {
		if (news.length > 0) {
			const scrollHeight = document.documentElement.scrollHeight;
			const clientHeight = document.documentElement.clientHeight;
			if (scrollHeight === clientHeight) {
				loadMore();
			}
		}
	}, [news]);


	// if clicked outside modal, close modal
	window.onclick = (e: any) => {
		if (e.target.id === "modal") setShowModal(false);
	}
	document.body.classList.add('customScroll');

	let classGrid: string = "mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 px-10";
	return (
		<>
			<div style={{ background: `url(${hero})`, backgroundSize: `cover`, backgroundPosition: `center` }}
				className='w-screen h-screen fixed'></div>
			<div className="h-screen w-screen bg-black opacity-40 fixed"></div>
			<div className="absolute">
				<Navigation />
					<InfiniteScroll
						dataLength={news.length} //This is important field to render the next data
						next={loadMore}
						hasMore={true}
						loader={<h4 className="text-amber-500">Loading...</h4>}
						className={classGrid}
						endMessage={
							<p style={{ textAlign: 'center' }}>
								<b>Yay! You have seen it all</b>
							</p>
						}>
							

						{news.map((article: ArticleType) => (
							<Article
								key={article.id}
								by={article.by}
								descendants={article.descendants}
								id={article.id}
								kids={article.kids}
								score={article.score}
								time={article.time}
								title={article.title}
								type={article.type}
								url={article.url}
								callback={showArticleModal}
							></Article>
						))}
					</InfiniteScroll>


					{showModal &&
						<ArticleModal
							by={modalArticle?.by}
							descendants={modalArticle?.descendants}
							id={modalArticle?.id}
							kids={modalArticle?.kids}
							score={modalArticle?.score}
							time={modalArticle?.time}
							title={modalArticle?.title}
							type={modalArticle?.type}
							url={modalArticle?.url}
							comments={comments}
						/>}
			</div>
		</>

	);
}

export default HackerNewsApp;
