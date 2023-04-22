import React from 'react';

export interface Props {
    title: string,
    description: string | null,
    commentsQty: number,
    category: string
}

export default function DestructuringProps({title, description, commentsQty, category}: Props): JSX.Element{

    
    return (
        <section className="container">
        <div className="posts">

            <div className="post">
              <div className="post-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{commentsQty}</p>
                <p>{category}</p>
              </div>
            </div>

        </div>
      </section>
    )
}
