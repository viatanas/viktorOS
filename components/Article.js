const Article = ({ post }) => {
  return (
    <article className="flex flex-col space-y-6">
      <h1 className="text-2xl font-medium text-gray-900 font-inter">
        {post.title}
      </h1>
      <div
        className="text-base font-normal text-gray-700 border-gray-200 font-inter prose-p:mb-5 prose-p:leading-7 prose-img:my-10 prose-img:rounded-lg prose-h3:mb-3 prose-h3:mt-14 prose-h3:font-semibold prose-h3:text-xl prose-h3:text-gray-900 prose-table:w-full prose-table:text-gray-900 prose-table:table-fixed prose-table:divide-y prose-table:divide-gray-200 prose-table:mb-10 prose-thead:text-base prose-th:font-medium prose-th:py-2 prose-td:text-sm prose-td:w-full prose-th:text-center prose-td:text-center prose-th:px-2 prose-td:py-4 prose-td:px-3 prose-td:border-b"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </article>
  );
};

export default Article;
