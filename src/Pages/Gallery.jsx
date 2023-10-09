import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
const Gallery = () => {
  const images = [
    {
      original: "https://images2.imgbox.com/8f/f3/DIyYnvoz_o.jpeg",
      thumbnail: "https://images2.imgbox.com/8f/f3/DIyYnvoz_o.jpeg",
    },
    {
      original: "https://images2.imgbox.com/0c/93/bx0kGbgW_o.jpeg",
      thumbnail: "https://images2.imgbox.com/0c/93/bx0kGbgW_o.jpeg",
    },
    {
      original: "https://images2.imgbox.com/50/aa/bC8BgHPl_o.jpeg",
      thumbnail: "https://images2.imgbox.com/50/aa/bC8BgHPl_o.jpeg",
    },
    {
      original: "https://images2.imgbox.com/fd/4f/CcvnN9bv_o.jpeg",
      thumbnail: "https://images2.imgbox.com/fd/4f/CcvnN9bv_o.jpeg",
    },
    {
      original: "https://images2.imgbox.com/92/d7/2bBDIl0t_o.jpeg",
      thumbnail: "https://images2.imgbox.com/92/d7/2bBDIl0t_o.jpeg",
    },
    {
      original: "https://images2.imgbox.com/7f/b9/yt5azvyh_o.jpeg",
      thumbnail: "https://images2.imgbox.com/7f/b9/yt5azvyh_o.jpeg",
    },
    {
      original: "https://images2.imgbox.com/a1/14/L7xUpwKG_o.jpg",
      thumbnail: "https://images2.imgbox.com/a1/14/L7xUpwKG_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/f2/6b/SRb6WKMY_o.jpg",
      thumbnail: "https://images2.imgbox.com/f2/6b/SRb6WKMY_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/f1/a4/1EbXOEaV_o.jpg",
      thumbnail: "https://images2.imgbox.com/f1/a4/1EbXOEaV_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/ce/55/KCSiPNX9_o.jpg",
      thumbnail: "https://images2.imgbox.com/ce/55/KCSiPNX9_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/91/ec/S54R401z_o.jpg",
      thumbnail: "https://images2.imgbox.com/91/ec/S54R401z_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/36/5a/JEOplkKU_o.jpg",
      thumbnail: "https://images2.imgbox.com/36/5a/JEOplkKU_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/3f/3d/UBInyPHj_o.jpg",
      thumbnail: "https://images2.imgbox.com/3f/3d/UBInyPHj_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/63/26/7HdyRJZt_o.jpg",
      thumbnail: "https://images2.imgbox.com/63/26/7HdyRJZt_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/d9/fa/TD9X2YA5_o.jpg",
      thumbnail: "https://images2.imgbox.com/d9/fa/TD9X2YA5_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/e0/5e/raH9GkCE_o.jpg",
      thumbnail: "https://images2.imgbox.com/e0/5e/raH9GkCE_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/a2/40/vJupndcs_o.jpg",
      thumbnail: "https://images2.imgbox.com/a2/40/vJupndcs_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/45/3c/pfM6mzbv_o.jpg",
      thumbnail: "https://images2.imgbox.com/45/3c/pfM6mzbv_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/d7/66/zifoCVKi_o.jpg",
      thumbnail: "https://images2.imgbox.com/d7/66/zifoCVKi_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/17/08/8xLJ9fB7_o.jpg",
      thumbnail: "https://images2.imgbox.com/17/08/8xLJ9fB7_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/63/e2/J4mGZRsf_o.jpg",
      thumbnail: "https://images2.imgbox.com/63/e2/J4mGZRsf_o.jpg",
    },
    {
      original: "https://images2.imgbox.com/b0/52/4b87sAue_o.jpg",
      thumbnail: "https://images2.imgbox.com/b0/52/4b87sAue_o.jpg",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <h1 className="text-center text-5xl">
          Our{" "}
          <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
            Gallery
          </span>
        </h1>
        <p className="text-center text-2xl">
          Check Out photos taken by Our Professional Photographers
        </p>
      </div>
      <ImageGallery items={images} showIndex={true} />
    </div>
  );
};

export default Gallery;
