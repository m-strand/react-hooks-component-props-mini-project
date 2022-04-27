import React from "react";
import Article from "./Article.js";

function ArticleList ({posts}) {
    const renderArticle = posts.map((post) => {
        return (
            <Article key={post.id}/>
        )})

    return (
        <main>
            {renderArticle}
        </main>
    )
}
export default ArticleList;