import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider h-auto object-cover absolute opacity-75" data-aos="fade-right" data-aos-duration="1000">
        <div className="keen-slider__slide number-slide1"><img src="/images/2.webp" alt="" /></div>
        <div className="keen-slider__slide number-slide1"><img src="/images/3.webp" alt="" /></div>
        <div className="keen-slider__slide number-slide1"><img src="/images/4.webp" alt="" /></div>
      </div>
    </>
  )
}

export default Slider;