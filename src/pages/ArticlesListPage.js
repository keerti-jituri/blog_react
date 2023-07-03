import articles from './article-content';
import ArticlesList from '../components/ArticlesList';
const ArticlesListPage =()=>{
    return(
        <>
        <h1>This is the Articles List page!</h1>
       <ArticlesList articles={articles}/>
        </>
    );
}

export default ArticlesListPage;