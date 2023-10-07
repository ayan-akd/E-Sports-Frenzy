const BlogCard = ({ blog }) => {
  const { title, image, description } = blog;
  return (
    <div>
      <div className="card card-compact">
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg">{description}</p>
          <div className="card-actions justify-start">
            <a className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600" href="">Read More...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
