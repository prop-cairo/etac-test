import useSlideUp from "@/hooks/useSlideup";

const SlideUpButton = ({ link, children }) => {
  const slideUpRef = useSlideUp();

  return (
    <div className="top-slider-button">
      <a className="button slide-up" href={link} ref={slideUpRef}>
        {children}
      </a>
    </div>
  );
};

export default SlideUpButton;
