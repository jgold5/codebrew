type PostProps = {
    title: string,
    content: string,
    author: string, 
}

export function Post({title, content, author}: PostProps) {
    return (
        <article className="rounded-2x1 shadow-md p-6 transition hover:shadow-1g">
            <header className="mb-4">
                <h2 className="text-x1 font-semibold">{title}</h2>
                <p className="text-sm text-gray-500">
                    By {author}
                </p>
            </header>
            <p className="text-gray-700">{content}</p>
        </article>
    );
}