import {useParams} from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
const ArticlePage =()=>{
    const { articleId } =useParams();
    const article =articles.find(article=>article.name === articleId);

    if(!article){
        return <NotFoundPage />
        
    }

    return(
        <><h1>This is the Article page for the article which is: {articleId}!</h1>
        <h1>
            {article.title}
        </h1>
            {article.content.map((paragraph,i) =>(
                <p key={i}>{paragraph}</p>
            ))}
            
       </>  
       );
}

export default ArticlePage;