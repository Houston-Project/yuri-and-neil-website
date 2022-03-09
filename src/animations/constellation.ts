import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initConstellationAimation() {
  const wrapper = document.querySelector('.constellation-wrapper') as HTMLDivElement
  const svgWrapper = wrapper.querySelector('.constellation-svg_wrapper') as HTMLDivElement

  svgWrapper.innerHTML = SVG

  const path = svgWrapper.querySelector('.constellation-path path') as SVGPathElement
  const logosWrapper = document.querySelector('.constellation-logos_wrapper') as HTMLDivElement
  const logos = [...logosWrapper.querySelectorAll<HTMLDivElement>('.constellation-logo')]

  const animation = gsap.timeline({}).fromTo(
    path,
    {
      drawSVG: '0%',
    },
    {
      drawSVG: '100%',
      duration: 10,
    }
  )

  logos.forEach((l, i) => {
    animation.to(
      l,
      {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          end: 1 - i * 0.1,
        },
        transformOrigin: '50% 50%',
        immediateRender: true,
        duration: 15,
        // ease: 'linear',
        stagger: {
          amount: 0.4,
        },
        delay: 0.1 * i,
      },
      10
    )
  })
  const height = window.innerHeight * 5

  ScrollTrigger.create({
    trigger: wrapper,
    end: `${height}px 0%`,
    // markers: true,
    scrub: true,
    pin: true,
    animation,
  })
}

const SVG = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1622 1540" class="constellation-path">
<path d="m796.322 811.214.261.265.259.27.256.276.252.28.25.286.247.291.244.296.241.301.237.307.234.311.231.316.227.321.224.325.22.331.216.335.213.34.209.345.205.35.2.354.197.358.193.364.188.367.185.372.179.377.176.381.171.385.166.389.162.393.157.398.152.402.148.405.143.41.137.413.133.418.128.421.122.424.118.429.112.432.106.436.102.439.096.442.09.446.085.449.079.452.074.456.068.458.062.462.057.464.05.467.045.47.038.473.033.476.026.478.021.48.014.483.008.485.002.488-.005.49-.011.492-.017.494-.024.496-.03.497-.037.5-.043.501-.05.503-.056.505-.063.506-.07.507-.077.509-.083.51-.09.511-.097.512-.104.513-.111.514-.117.514-.125.516-.131.516-.139.517-.145.517-.153.517-.16.518-.166.518-.174.518-.181.518-.188.517-.195.518-.203.518-.209.517-.217.516-.224.516-.231.515-.239.515-.245.514-.253.513-.26.512-.268.51-.274.51-.282.508-.289.507-.297.506-.303.503-.311.503-.318.5-.326.498-.332.497-.34.494-.347.493-.354.49-.362.488-.369.485-.376.483-.383.48-.39.477-.397.475-.405.471-.411.469-.419.466-.425.462-.433.459-.44.456-.447.452-.453.449-.461.445-.467.441-.475.437-.481.434-.488.429-.495.425-.502.421-.508.417-.515.412-.521.408-.529.403-.534.399-.542.393-.547.389-.555.384-.56.379-.567.374-.573.368-.58.363-.586.358-.591.352-.598.347-.604.341-.61.335-.616.329-.622.324-.627.317-.633.312-.639.305-.645.299-.65.293-.656.286-.661.279-.667.273-.672.267-.677.26-.682.252-.688.246-.692.239-.698.232-.702.225-.708.218-.712.21-.716.203-.722.196-.725.188-.731.18-.735.173-.738.165-.744.158-.747.149-.751.142-.756.133-.759.126-.763.117-.766.11-.771.101-.774.093-.777.084-.781.076-.783.068-.788.059-.79.05-.793.042-.796.033-.799.025-.801.015-.804.007-.807-.002-.809-.011-.812-.02-.813-.029-.816-.039-.817-.047-.82-.057-.822-.065-.823-.076-.824-.084-.827-.094-.827-.103-.829-.112-.83-.122-.831-.132-.833-.141-.832-.15-.834-.16-.835-.17-.834-.18-.836-.189-.835-.198-.836-.209-.836-.218-.836-.228-.836-.238-.835-.248-.836-.257-.834-.268-.835-.277-.833-.287-.833-.297-.831-.307-.831-.317-.829-.326-.829-.337-.826-.347-.826-.356-.824-.367-.821-.376-.821-.387-.818-.396-.816-.406-.813-.417-.812-.426-.809-.436-.806-.446-.804-.456-.801-.467-.798-.475-.795-.486-.792-.496-.789-.506-.785-.515-.782-.525-.778-.535-.774-.545-.771-.555-.766-.564-.763-.575-.758-.584-.754-.593-.749-.603-.745-.613-.74-.622-.736-.632-.73-.642-.725-.651-.72-.66-.715-.67-.71-.679-.704-.689-.698-.698-.693-.707-.687-.716-.681-.725-.674-.735-.669-.744-.662-.752-.656-.762-.649-.77-.643-.779-.636-.788-.629-.797-.622-.806-.614-.814-.608-.822-.601-.832-.592-.839-.586-.848-.578-.856-.57-.865-.562-.872-.554-.881-.546-.888-.538-.897-.53-.904-.521-.913-.513-.919-.504-.928-.496-.935-.487-.943-.477-.95-.469-.957-.46-.964-.451-.972-.441-.979-.432-.985-.423-.993-.413-.999-.403-1.006-.393-1.012-.384-1.019-.374-1.026-.364-1.031-.353-1.038-.344-1.044-.333-1.05-.323-1.056-.312-1.062-.302-1.067-.291-1.073-.281-1.078-.269-1.084-.259-1.089-.248-1.095-.237-1.099-.226-1.104-.214-1.109-.204-1.114-.192-1.118-.18-1.123-.17-1.127-.157-1.132-.146-1.136-.135-1.139-.123-1.144-.111-1.147-.099-1.151-.087-1.154-.075-1.158-.063-1.161-.051-1.165-.039-1.167-.027-1.17-.014-1.173-.002-1.176.01-1.178.023-1.181.035-1.182.047-1.185.061-1.187.072-1.189.086-1.19.098-1.193.111-1.193.123-1.195.137-1.196.149-1.197.162-1.198.175-1.199.188-1.199.201-1.2.214-1.201.227-1.2.24-1.201.253-1.2.266-1.2.28-1.2.292-1.2.306-1.199.318-1.198.332-1.197.346-1.196.358-1.195.371-1.193.385-1.192.398-1.19.412-1.189.424-1.187.438-1.184.451-1.182.464-1.18.478-1.178.49-1.174.504-1.172.518-1.169.53-1.166.544-1.162.557-1.16.57-1.155.583-1.152.596-1.148.61-1.144.622-1.14.636-1.136.649-1.131.661-1.126.675-1.122.688-1.117.701-1.112.713-1.107.727-1.101.739-1.096.752-1.09.765-1.084.778-1.079.79-1.073.803-1.066.816-1.06.828-1.053.841-1.047.853-1.04.865-1.033.878-1.026.89-1.019.903-1.011.914-1.004.927-.996.939-.989.951-.98.962-.973.975-.964.986-.956.998-.947 1.01-.939 1.021-.929 1.033-.921 1.045-.912 1.055-.903 1.067-.894 1.078-.884 1.089-.874 1.1-.865 1.112-.854 1.121-.845 1.133-.835 1.144-.824 1.154-.814 1.164-.804 1.175-.793 1.185-.782 1.195-.771 1.206-.76 1.215-.749 1.225-.738 1.236-.726 1.244-.715 1.255-.703 1.263-.692 1.274-.679 1.282-.668 1.292-.655 1.3-.644 1.309-.63 1.319-.619 1.327-.606 1.335-.593 1.344-.58 1.352-.568 1.36-.554 1.369-.542 1.376-.528 1.384-.515 1.392-.501 1.399-.488 1.407-.474 1.414-.461 1.421-.446 1.428-.433 1.435-.419 1.442-.405 1.448-.39 1.455-.376 1.461-.362 1.468-.347 1.473-.333 1.479-.318 1.485-.303 1.49-.289 1.496-.273 1.501-.259 1.507-.243 1.511-.229 1.516-.213 1.521-.198 1.525-.182 1.53-.168 1.534-.151 1.538-.136 1.542-.121 1.546-.105 1.549-.089 1.552-.073 1.556-.057 1.559-.042 1.562-.025 1.565-.009 1.567.006 1.57.023 1.572.039 1.574.056 1.576.071 1.578.088 1.579.105 1.581.12 1.582.137 1.583.154 1.584.17 1.585.187 1.585.204 1.586.22 1.586.236 1.586.254 1.586.27 1.586.286 1.585.304 1.584.32 1.584.337 1.582.354 1.582.371 1.58.387 1.578.405 1.577.421 1.575.438 1.573.455 1.57.471 1.568.489 1.566.505 1.562.522 1.56.54 1.556.555 1.553.573 1.55.59 1.546.606 1.542.623 1.538.64 1.533.657 1.529.673 1.525.69 1.52.707 1.515.723 1.509.74 1.505.757 1.498.773 1.493.79 1.488.806 1.481.823 1.475.839 1.468.855 1.462.872 1.455.888 1.448.904 1.441.92 1.434.937 1.426.952 1.418.969 1.411.984 1.402 1.001 1.395 1.016 1.386 1.032 1.377 1.048 1.368 1.063 1.36 1.079 1.351 1.094 1.341 1.11 1.332 1.125 1.322 1.14 1.313 1.156 1.303 1.17 1.292 1.186 1.282 1.2 1.272 1.216 1.261 1.23 1.25 1.245 1.239 1.259 1.229 1.274 1.216 1.288 1.206 1.302 1.194 1.317 1.182 1.331 1.17 1.344 1.157 1.359 1.146 1.372 1.133 1.386 1.121 1.399 1.108 1.413 1.095 1.426 1.081 1.44 1.069 1.452 1.055 1.466 1.042 1.478 1.028 1.491 1.015 1.503 1 1.516.986 1.528.972 1.54.957 1.553.943 1.564.929 1.576.913 1.588.898 1.599.884 1.611.868 1.622.852 1.633.838 1.644.821 1.654.806 1.665.79 1.676.773 1.686.758 1.696.741 1.707.725 1.716.708 1.726.692 1.735.674 1.745.658 1.754.641 1.763.624 1.772.606 1.781.589 1.789.572 1.797.554 1.806.536 1.814.518 1.822.501 1.829.482 1.837.465 1.845.446 1.851.428 1.859.409 1.865.392 1.872.372 1.878.354 1.885.335 1.89.316 1.897.297 1.902.278 1.908.259 1.913.24 1.918.221 1.923.201 1.928.182 1.932.163 1.937.142 1.941.124 1.945.103 1.948.084 1.952.064 1.956.045 1.958.024 1.962.004 1.964-.015 1.967-.036 1.969-.056 1.971-.076 1.974-.096 1.975-.116 1.976-.137 1.978-.157 1.979-.177 1.98-.198 1.98-.218 1.981-.239 1.981-.259 1.982-.28 1.981-.3 1.98-.321 1.981-.341 1.979-.362 1.978-.382 1.977-.403 1.976-.424 1.974-.444 1.972-.465 1.97-.486 1.968-.506 1.965-.527 1.963-.547 1.959-.569 1.957-.588 1.953-.61 1.949-.629 1.946-.651 1.941-.671 1.937-.692 1.933-.712 1.928-.732 1.924-.753 1.918-.774 1.913-.793 1.907-.815 1.901-.834 1.896-.855 1.889-.875 1.883-.895 1.876-.916 1.869-.935 1.863-.956 1.855-.976 1.847-.995 1.84-1.016 1.832-1.035 1.824-1.055 1.815-1.075 1.807-1.095 1.798-1.114 1.789-1.133 1.78-1.153 1.77-1.173 1.761-1.191 1.751-1.211 1.741-1.23 1.73-1.249 1.72-1.268 1.71-1.287 1.699-1.305 1.687-1.325 1.676-1.343 1.665-1.361 1.653-1.38 1.641-1.398 1.629-1.416 1.617-1.434 1.604-1.453 1.591-1.47 1.579-1.488 1.565-1.505 1.552-1.523 1.539-1.54 1.525-1.558 1.511-1.575 1.497-1.592 1.483-1.608 1.468-1.626 1.453-1.642 1.439-1.658 1.424-1.675 1.408-1.691 1.393-1.707 1.378-1.724 1.361-1.738 1.346-1.755 1.326-1.77 1.32-1.785 1.29-1.801 1.28-1.815 1.27-1.831 1.24-1.845 1.23-1.86 1.21-1.874 1.2-1.888 1.18-1.903 1.15-1.916 1.15-1.93 1.12-1.944 1.1-1.956 1.09-1.971 1.06-1.983 1.05-1.996 1.03-2.008 1.01-2.022.99-2.033.97-2.046.96-2.057.93-2.069.91-2.081.89-2.092.88-2.103.85-2.114.83-2.125.81-2.136.79-2.146.77-2.156.75-2.166.73-2.175.7-2.185.69-2.195.66-2.204.65-2.212.62-2.222.59-2.229.58-2.238.56-2.246.53-2.254.51-2.262.49-2.268.46-2.277.45-2.283.42-2.289.4-2.296.37-2.303.36-2.308.32-2.315.31-2.319.28-2.326.26-2.33.24-2.335.22-2.34.19-2.344.16-2.349.14-2.352.12-2.356.1-2.36.07-2.362.05-2.366.02h-2.368l-2.371-.02-2.373-.05-2.376-.07-2.376-.1-2.379-.12-2.38-.14-2.38-.17-2.382-.19-2.382-.22-2.382-.24-2.382-.27-2.382-.29-2.382-.31-2.381-.34-2.38-.37-2.378-.39-2.378-.41-2.375-.44-2.374-.46-2.371-.48-2.368-.51-2.366-.54-2.363-.56-2.36-.58-2.356-.61-2.353-.64-2.348-.65-2.345-.69-2.339-.7-2.335-.74-2.33-.75-2.325-.78-2.319-.8-2.313-.83-2.307-.86-2.301-.87-2.294-.9-2.288-.93-2.28-.95-2.273-.97-2.266-1-2.257-1.02-2.25-1.05-2.241-1.07-2.233-1.09-2.224-1.11-2.215-1.14-2.205-1.17-2.196-1.19-2.186-1.21-2.176-1.23-2.166-1.26-2.155-1.28-2.144-1.3-2.134-1.33-2.122-1.35-2.11-1.37-2.098-1.39-2.087-1.42-2.074-1.44-2.062-1.463-2.049-1.484-2.036-1.507-2.022-1.529-2.009-1.551-1.996-1.572-1.981-1.595-1.967-1.616-1.953-1.637-1.938-1.659-1.924-1.68-1.908-1.701-1.892-1.722-1.878-1.743-1.861-1.763-1.845-1.784-1.829-1.804-1.813-1.825-1.796-1.845-1.779-1.865-1.762-1.884-1.744-1.904-1.727-1.924-1.709-1.943-1.691-1.962-1.673-1.981-1.654-1.999-1.636-2.019-1.617-2.037-1.598-2.055-1.578-2.073-1.559-2.092-1.54-2.109-1.519-2.126-1.5-2.144-1.479-2.161-1.459-2.178-1.438-2.195-1.417-2.212-1.397-2.228-1.375-2.244-1.354-2.26-1.332-2.276-1.31-2.292-1.288-2.307-1.267-2.322-1.244-2.337-1.221-2.352-1.199-2.366-1.176-2.381-1.154-2.395-1.13-2.409-1.106-2.422-1.084-2.436-1.059-2.449-1.036-2.462-1.012-2.475-.988-2.488-.964-2.499-.939-2.512-.915-2.523-.89-2.535-.865-2.547-.84-2.557-.816-2.569-.79-2.579-.765-2.589-.739-2.599-.714-2.609-.688-2.619-.662-2.628-.636-2.638-.61-2.646-.584-2.654-.558-2.663-.531-2.671-.505-2.679-.478-2.686-.452-2.694-.424-2.701-.398-2.707-.371-2.714-.344-2.72-.316-2.726-.289-2.731-.262-2.737-.235-2.742-.207-2.747-.179-2.752-.152-2.756-.124-2.759-.097-2.764-.068-2.767-.041-2.77-.013-2.773.016-2.775.043-2.778.071-2.78.1-2.782.127-2.783.156-2.784.185-2.785.212-2.786.241-2.786.269-2.787.298-2.785.325-2.786.355-2.784.382-2.784.412-2.782.439-2.78.468-2.778.497-2.776.525-2.774.554-2.77.581-2.768.611-2.763.639-2.761.667-2.756.696-2.752.724-2.747.752-2.742.781-2.737.809-2.731.837-2.726.866-2.72.894-2.713.921-2.707.951-2.699.978-2.693 1.006-2.684 1.034-2.677 1.062-2.669 1.09-2.66 1.117-2.652 1.146-2.643 1.173-2.633 1.2-2.624 1.229-2.614 1.255-2.604 1.283-2.593 1.31-2.583 1.337-2.571 1.365-2.56 1.391-2.549 1.419-2.537 1.445-2.525 1.472-2.512 1.498-2.499 1.525-2.487 1.551-2.473 1.578-2.459 1.604-2.446 1.629-2.432 1.656-2.417 1.681-2.403 1.707-2.388 1.733-2.372 1.758-2.357 1.783-2.341 1.809-2.325 1.833-2.309 1.858-2.293 1.883-2.275 1.908-2.259 1.931-2.241 1.956-2.223 1.98-2.206 2.004-2.187 2.028-2.169 2.051-2.15 2.075-2.132 2.098-2.112 2.121-2.093 2.143-2.073 2.167-2.054 2.189-2.033 2.211-2.013 2.233-1.992 2.256-1.971 2.277-1.95 2.298-1.929 2.32-1.907 2.341-1.885 2.362-1.864 2.383-1.841 2.403-1.818 2.424-1.796 2.443-1.773 2.464-1.749 2.483-1.726 2.502-1.703 2.522-1.678 2.541-1.655 2.56-1.63 2.578-1.606 2.596-1.581 2.614-1.557 2.632-1.531 2.65-1.506 2.667-1.48 2.684-1.455 2.701-1.428 2.718-1.403 2.734-1.377 2.75-1.35 2.765-1.323 2.782-1.296 2.796-1.27 2.812-1.242 2.826-1.215 2.841-1.188 2.856-1.16 2.869-1.131 2.883-1.104 2.896-1.076 2.909-1.048 2.923-1.018L698 511l2.947-.961 2.959-.933 2.971-.903 2.982-.874 2.994-.845 3.005-.815 3.015-.786 3.025-.756 3.036-.726 3.045-.696 3.054-.666 3.064-.636 3.072-.605 3.081-.575 3.089-.544 3.098-.513 3.104-.483 3.112-.452 3.119-.42 3.126-.39 3.132-.358 3.138-.328 3.144-.295 3.149-.265 3.154-.233 3.159-.201 3.164-.169 3.168-.138 3.171-.106 3.175-.074 3.179-.042 3.181-.01 3.184.021 3.186.054 3.187.086 3.19.119 3.191.15 3.191.183 3.193.215 3.192.247 3.193.28 3.192.312 3.191.345 3.191.377 3.189.409 3.187.442 3.186.474 3.183.507 3.18.539 3.177.572 3.174.604 3.171.636 3.166.669 3.162.701 3.157.734 3.152.766 3.147.798 3.142.831 3.135.863 3.129.895 3.122.927 3.115.96 3.108.991 3.101 1.024 3.092 1.055 3.084 1.088 3.075 1.119 3.067 1.152 3.057 1.183 3.047 1.214 3.038 1.247 3.027 1.277 3.017 1.31 3.005 1.34 2.995 1.372 2.983 1.403 2.971 1.434 2.958 1.465 2.946 1.496 2.934 1.527 2.92 1.557 2.906 1.588 2.893 1.619 2.878 1.648 2.864 1.679 2.85 1.709 2.834 1.739 2.818 1.769 2.803 1.798 2.787 1.828 2.771 1.858 2.754 1.886 2.736 1.916 2.72 1.945 2.702 1.973 2.684 2.003 2.666 2.03 2.647 2.059 2.629 2.088 2.606 2.115 2.59 2.143 2.57 2.17 2.55 2.198 2.53 2.226 2.51 2.252 2.49 2.279 2.47 2.306 2.45 2.333 2.42 2.359 2.4 2.385 2.38 2.41 2.36 2.437 2.34 2.462 2.31 2.487 2.29 2.513 2.26 2.537 2.24 2.562 2.22 2.586 2.19 2.611 2.17 2.634 2.14 2.658 2.12 2.682 2.09 2.704 2.06 2.728 2.04 2.751 2.02 2.773 1.99 2.795 1.96 2.817 1.93 2.839 1.91 2.86 1.87 2.882 1.86 2.903 1.82 2.923 1.79 2.944 1.77 2.964 1.74 2.983 1.71 3.004 1.68 3.023 1.65 3.041 1.62 3.061 1.59 3.079 1.57 3.097 1.53 3.115 1.5 3.133 1.47 3.15 1.44 3.167 1.41 3.184 1.38 3.2 1.35 3.216 1.32 3.232 1.28 3.248 1.25 3.263 1.22 3.277 1.19 3.293 1.16 3.306 1.12 3.321 1.09 3.334 1.06 3.347 1.03 3.361.99 3.373.96 3.385.92 3.397.9 3.409.86 3.421.82 3.431.79 3.442.76 3.452.72 3.463.69 3.472.65 3.481.62 3.49.58 3.499.55 3.507.52 3.516.48 3.522.44 3.53.41 3.537.38 3.544.33 3.549.31 3.556.26 3.561.24 3.566.19 3.57.16 3.576.13 3.579.09 3.583.05 3.586.01 3.589-.02 3.592-.05 3.594-.09 3.596-.13 3.597-.17 3.599-.2 3.599-.23 3.6-.28 3.6-.31 3.6-.34 3.598-.39 3.598-.42 3.596-.45 3.595-.49 3.592-.53 3.59-.57 3.587-.6 3.584-.64 3.58-.67 3.576-.71 3.571-.75 3.567-.78 3.562-.82 3.556-.86 3.55-.89 3.544-.93 3.537-.97 3.531-1 3.523-1.04 3.515-1.07 3.508-1.11 3.498-1.14 3.49-1.19 3.481-1.21 3.471-1.26 3.461-1.28 3.451-1.33 3.44-1.36 3.43-1.39 3.417-1.43 3.406-1.47 3.394-1.5 3.381-1.53 3.369-1.57 3.355-1.61 3.342-1.64 3.328-1.67 3.313-1.71 3.3-1.74 3.28-1.78 3.27-1.81 3.25-1.85 3.24-1.88 3.22-1.91 3.2-1.95 3.19-1.97 3.17-2.02 3.15-2.04 3.13-2.08 3.12-2.11 3.09-2.14 3.08-2.18 3.05-2.21 3.04-2.24 3.02-2.27 2.99-2.3 2.98-2.34 2.95-2.36 2.93-2.4 2.91-2.43 2.89-2.46 2.87-2.48 2.84-2.52 2.82-2.55 2.79-2.58 2.77-2.61 2.75-2.64 2.73-2.66 2.69-2.7 2.68-2.72 2.65-2.75 2.62-2.78 2.59-2.81 2.57-2.84 2.55-2.862 2.51-2.89 2.49-2.918 2.47-2.944 2.43-2.97 2.41-2.996 2.37-3.022 2.35-3.048 2.32-3.073 2.29-3.098 2.27-3.122 2.23-3.147 2.2-3.171 2.17-3.195 2.14-3.219 2.11-3.241 2.08-3.265 2.05-3.288 2.02-3.309 1.98-3.332 1.96-3.353 1.92-3.375 1.88-3.396 1.86-3.417 1.82-3.437 1.79-3.457 1.76-3.478 1.72-3.496 1.69-3.516 1.65-3.535 1.62-3.553 1.59-3.571 1.55-3.589 1.51-3.607 1.48-3.623 1.45-3.641 1.41-3.656 1.37-3.673 1.34-3.689 1.3-3.704 1.27-3.719 1.23-3.734 1.19-3.748 1.16-3.762 1.11-3.775 1.09-3.789 1.04-3.801 1.01-3.814.97-3.826.93-3.838.89-3.849.86-3.861.82-3.87.78-3.881.74-3.891.7-3.9.66-3.909.63-3.918.58-3.926.55-3.935.51-3.941.47-3.949.43-3.955.39-3.962.35-3.968.31-3.973.27-3.978.23-3.983.19-3.988.15-3.991.12-3.995.07-3.998.03-4.001-.01-4.003-.05-4.005-.09-4.007-.13-4.007-.17-4.009-.21-4.008-.25-4.009-.29-4.008-.33-4.007-.37-4.006-.41-4.004-.46-4.002-.49-3.999-.53-3.997-.58-3.993-.61-3.989-.66-3.985-.7-3.98-.73-3.976-.78-3.97-.82-3.964-.85-3.958-.9-3.951-.94-3.944-.98-3.937-1.02-3.928-1.05-3.921-1.1-3.911-1.14-3.903-1.18-3.893-1.22-3.883-1.26-3.873-1.3-3.862-1.33-3.851-1.38-3.839-1.42-3.827-1.46-3.815-1.49-3.802-1.54-3.789-1.57-3.776-1.61-3.761-1.66-3.747-1.69-3.732-1.73-3.717-1.76-3.701-1.81-3.686-1.85-3.669-1.88-3.652-1.92-3.635-1.96-3.618-1.99-3.599-2.04-3.582-2.07-3.562-2.11-3.544-2.14-3.524-2.18-3.504-2.22-3.484-2.26-3.463-2.29-3.442-2.33-3.421-2.36-3.399-2.4-3.377-2.43-3.354-2.47-3.332-2.51-3.308-2.54-3.284-2.57-3.261-2.61-3.237-2.65-3.211-2.67-3.187-2.72-3.161-2.74-3.136-2.78-3.109-2.81-3.083-2.84-3.056-2.88-3.029-2.91-3.001-2.94-2.974-2.98-2.945-3-2.917-3.04-2.888-3.06-2.859-3.1-2.83-3.13-2.8-3.16-2.769-3.19-2.739-3.21-2.709-3.25-2.677-3.28-2.646-3.3-2.614-3.34-2.582-3.36-2.55-3.39-2.517-3.41-2.484-3.45-2.452-3.47-2.417-3.5-2.384-3.52-2.35-3.55-2.316-3.58-2.28-3.6-2.247-3.63-2.21-3.65-2.176-3.67-2.14-3.699-2.103-3.722-2.068-3.746-2.031-3.768-1.995-3.791-1.957-3.813-1.92-3.835-1.883-3.856-1.846-3.877-1.807-3.898-1.769-3.918-1.731-3.939-1.692-3.958-1.653-3.977-1.614-3.996-1.576-4.014-1.535-4.032-1.496-4.05-1.456-4.068-1.417-4.084-1.375-4.101-1.336-4.116-1.295-4.133-1.254-4.148-1.213-4.162-1.172-4.177-1.131-4.192-1.089-4.205-1.047-4.218-1.006-4.231-.964-4.243-.922-4.256-.879-4.267-.838-4.278-.794-4.289-.752-4.3-.71-4.309-.666-4.319-.623-4.328-.581-4.336-.537-4.345-.493-4.352-.45-4.36-.407-4.367-.363-4.373-.32-4.379-.275-4.385-.232-4.39-.188-4.395-.143-4.399-.1-4.402-.055-4.407-.011-4.409.033-4.412.077-4.413.122-4.416.166-4.416.211-4.418.255-4.417.299-4.418.344-4.416.389-4.416.433-4.414.478-4.412.522-4.41.567-4.407.611-4.404.656-4.4.701-4.395.745-4.391.79-4.386.834-4.381.878-4.374.923-4.368.967-4.361 1.011-4.353 1.056-4.346 1.1-4.337 1.144-4.329 1.188-4.32 1.232-4.31 1.276-4.299 1.32-4.29 1.364-4.278 1.408-4.267 1.451-4.255 1.494-4.243 1.538-4.23 1.581-4.217 1.624-4.203 1.668-4.19 1.71-4.174 1.753-4.16 1.796-4.144 1.839-4.129 1.881-4.112 1.923-4.095 1.965-4.079 2.007-4.061 2.049-4.042 2.091-4.025 2.133-4.005 2.173-3.987 2.215-3.966 2.256-3.946 2.296-3.926 2.338-3.905 2.377-3.883 2.418-3.862 2.458-3.839 2.498-3.817 2.537-3.793 2.577-3.771 2.616-3.746 2.655-3.722 2.694-3.697 2.732-3.672 2.771-3.647 2.808-3.62 2.847-3.595 2.884-3.567 2.921-3.541 2.958-3.513 2.995-3.485 3.032-3.457 3.068-3.429 3.104-3.399 3.14-3.37 3.175-3.34 3.211-3.31 3.245-3.28 3.28-3.249 3.314-3.217 3.348-3.186 3.382-3.154 3.415-3.121 3.449-3.089 3.481-3.056 3.514-3.023 3.546-2.988 3.577-2.955 3.609-2.921 3.641-2.885 3.671-2.851 3.702-2.815 3.731-2.779 3.762-2.744 3.791-2.707 3.82-2.671 3.849-2.633 3.878-2.596 3.905-2.559 3.933-2.521 3.961-2.482 3.987-2.444 4.014-2.406 4.04-2.366 4.066-2.327 4.092-2.287 4.116-2.247 4.141-2.208 4.166-2.166 4.189-2.126 4.212-2.086 4.236-2.043 4.259-2.003 4.28-1.961 4.303-1.918 4.324-1.877 4.345-1.834 4.365-1.791 4.386-1.749 4.405-1.705 4.425-1.662 4.444-1.619 4.462-1.574 4.481-1.531 4.497-1.487 4.516-1.442 4.531-1.397 4.549-1.353 4.564-1.308 4.579-1.262 4.594-1.218 4.609-1.172 4.623-1.126 4.637-1.08 4.65-1.034 4.662-.989 4.675-.941 4.686-.896 4.698-.849 4.709-.802 4.719-.755 4.729-.709 4.739-.661 4.747-.614 4.756-.567 4.764-.519 4.772-.472 4.779-.424 4.785-.376 4.791-.328 4.798-.281 4.802-.233 4.807-.184 4.812-.136 4.815-.089 4.818-.039 4.821.008 4.823.057 4.826.105 4.826.154 4.828.202 4.827.251 4.828.299 4.827.348 4.826.397 4.824.445 4.822.494 4.82.542 4.816.591 4.813.64 4.809.688 4.804.737 4.799.785 4.794.834 4.788.882 4.781.931 4.774.98 4.766 1.027 4.759 1.076 4.75 1.125 4.741 1.172 4.732 1.221 4.722 1.268 4.711 1.317 4.701 1.365 4.689 1.412 4.677 1.46 4.665 1.508 4.651 1.555 4.639 1.603 4.625 1.65 4.61 1.698 4.595 1.744 4.581 1.791 4.564 1.838 4.548 1.885 4.532 1.931 4.514 1.978 4.497 2.024 4.479 2.07 4.46 2.116 4.44 2.162 4.42 2.207 4.4 2.253 4.38 2.298 4.36 2.343 4.34 2.388 4.32 2.432 4.29 2.477 4.27 2.522 4.25 2.565 4.23 2.609 4.2 2.653 4.17 2.696 4.15 2.74 4.13 2.782 4.1 2.825 4.07 2.868 4.04 2.909 4.02 2.952 3.99 2.994 3.97 3.034 3.93 3.077 3.91 3.117 3.87 3.157 3.85 3.198 3.81 3.238 3.79 3.278 3.75 3.318 3.72 3.357 3.7 3.395 3.65 3.434 3.63 3.473 3.59 3.511 3.56 3.548 3.52 3.586 3.5 3.622 3.45 3.66 3.42 3.695 3.39 3.732 3.35 3.768 3.31 3.803 3.28 3.838 3.24 3.872 3.2 3.907 3.16 3.941 3.13 3.975 3.09 4.007 3.05 4.041 3.01 4.073 2.97 4.105 2.93 4.137 2.89 4.168 2.85 4.199 2.81 4.23 2.77 4.26 2.72 4.289 2.69 4.319 2.64 4.348 2.6 4.377 2.56 4.404 2.52 4.432 2.47 4.46 2.43 4.486 2.38 4.513 2.34 4.539 2.3 4.564 2.25 4.59 2.2 4.614 2.16 4.639 2.12 4.662 2.07 4.686 2.02 4.708 1.98 4.731 1.93 4.753 1.88 4.775 1.84 4.796 1.79 4.816 1.74 4.837 1.69 4.856 1.65 4.875 1.6 4.895 1.55 4.912 1.5 4.93 1.45 4.948 1.4 4.964 1.36 4.981 1.3 4.996 1.26 5.013 1.2 5.026 1.16 5.042 1.11 5.055 1.05 5.068 1.01 5.082.95 5.094.9 5.105.86 5.117.8 5.128.75 5.139.7 5.148.65 5.158.6 5.166.54 5.175.5 5.183.44 5.19.39 5.196.34 5.203.28 5.209.24 5.214.18 5.219.13 5.222.08 5.227.02 5.23-.03 5.232-.08 5.234-.13 5.236-.18 5.237-.24 5.237-.29 5.238-.35 5.237-.39 5.235-.45 5.234-.5 5.232-.55 5.23-.61 5.226-.66 5.222-.71 5.218-.77 5.214-.81 5.207-.87 5.203-.93 5.195-.97 5.189-1.03 5.181-1.08 5.174-1.13 5.164-1.18 5.156-1.24 5.146-1.29 5.136-1.34 5.126-1.39 5.114-1.45 5.102-1.49 5.091-1.55 5.077-1.6 5.064-1.65 5.046-1.71 5.04-1.75 5.02-1.81 5.01-1.85 4.99-1.91 4.97-1.96 4.96-2.01 4.94-2.06 4.92-2.11 4.9-2.15 4.89-2.21 4.86-2.26 4.84-2.31 4.83-2.36 4.8-2.41 4.78-2.45 4.76-2.51 4.74-2.55 4.71-2.6 4.69-2.65 4.67-2.7 4.64-2.75 4.62-2.79 4.59-2.84 4.56-2.89 4.54-2.93 4.51-2.98 4.49-3.03 4.45-3.08 4.43-3.11 4.4-3.17 4.37-3.21 4.34-3.25 4.31-3.3 4.28-3.35 4.24-3.38 4.22-3.44 4.18-3.47 4.15-3.52 4.12-3.56 4.09-3.6 4.05-3.65 4.01-3.69 3.98-3.72 3.95-3.77 3.91-3.82 3.87-3.85 3.84-3.89 3.8-3.93 3.77-3.97 3.72-4.01 3.69-4.05 3.65-4.09 3.61-4.12 3.57-4.16 3.53-4.2 3.49-4.24 3.45-4.27 3.41-4.31 3.37-4.35 3.32-4.38 3.28-4.41 3.24-4.45 3.2-4.48 3.16-4.52 3.11-4.55 3.07-4.58 3.02-4.62 2.98-4.64 2.93-4.68 2.89-4.71 2.84-4.74 2.8-4.77 2.75-4.8 2.7-4.82 2.66-4.86 2.61-4.886 2.56-4.913 2.51-4.94 2.47-4.967 2.41-4.994 2.37-5.019 2.32-5.044 2.27-5.07 2.22-5.094 2.17-5.117 2.12-5.142 2.07-5.164 2.02-5.186 1.97-5.209 1.91-5.23 1.87-5.251 1.81-5.271 1.77-5.291 1.71-5.31 1.65-5.33 1.61-5.347 1.55-5.366 1.5-5.383 1.45-5.399 1.39-5.416 1.34-5.432 1.28-5.446 1.23-5.462 1.18-5.475 1.12-5.489 1.07-5.502 1.02-5.514.96-5.527.9-5.537.85-5.549.8-5.559.73-5.568.69-5.578.63-5.587.57-5.594.52-5.602.46-5.609.4-5.615.35-5.622.29-5.626.24-5.631.18-5.635.12-5.639.07-5.642.01-5.644-.05-5.647-.1-5.647-.16-5.648-.21-5.649-.27-5.648-.33-5.647-.39-5.645-.44-5.644-.5-5.641-.56-5.637-.61-5.634-.67-5.629-.73-5.624-.78-5.619-.84-5.613-.9-5.606-.95-5.598-1.01-5.591-1.07-5.583-1.12-5.573-1.18-5.564-1.24-5.554-1.29-5.543-1.35-5.532-1.4-5.521-1.46-5.507-1.52-5.495-1.57-5.481-1.63-5.468-1.68-5.452-1.74-5.437-1.79-5.422-1.85-5.405-1.91-5.389-1.96-5.371-2.01-5.352-2.07-5.335-2.13-5.315-2.17-5.295-2.24-5.276-2.28-5.254-2.34-5.233-2.39-5.212-2.45-5.189-2.5-5.165-2.56-5.143-2.6-5.118-2.66-5.094-2.71-5.069-2.76-5.043-2.82-5.016-2.87-4.99-2.91-4.963-2.97-4.935-3.02-4.907-3.08-4.878-3.12-4.849-3.17-4.819-3.22-4.788-3.27-4.758-3.32-4.726-3.37-4.694-3.42-4.662-3.47-4.629-3.51-4.596-3.56-4.561-3.61-4.528-3.66-4.492-3.7-4.458-3.76-4.421-3.79-4.385-3.84-4.348-3.89-4.311-3.94-4.274-3.97-4.235-4.03-4.197-4.06-4.157-4.11-4.118-4.16-4.078-4.19-4.037-4.24-3.997-4.28-3.955-4.33-3.914-4.36-3.871-4.41-3.829-4.44-3.785-4.49-3.742-4.52-3.699-4.57-3.653-4.6-3.61-4.64-3.564-4.68-3.518-4.72-3.473-4.76-3.427-4.79-3.379-4.83-3.333-4.86-3.285-4.9-3.238-4.93-3.189-4.97-3.141-5-3.091-5.04-3.043-5.07-2.993-5.1-2.943-5.13-2.892-5.17-2.842-5.19-2.791-5.23-2.74-5.25-2.688-5.29-2.636-5.32-2.584-5.34-2.531-5.37-2.479-5.4-2.425-5.42-2.372-5.46-2.318-5.47-2.265-5.51-2.21-5.53-2.155-5.548-2.1-5.577-2.046-5.599-1.99-5.623-1.934-5.644-1.879-5.666-1.823-5.687-1.766-5.707-1.71-5.727-1.653-5.747-1.596-5.766-1.539-5.784-1.482-5.801-1.423-5.818-1.367-5.836-1.308-5.851-1.25-5.866-1.192-5.881-1.133-5.896-1.075-5.909-1.015-5.922-.957-5.934-.898-5.947-.838-5.957-.779-5.969-.72-5.978-.66-5.988-.6-5.997-.54-6.006-.48-6.013-.42-6.02-.36-6.027-.3-6.032-.239-6.038-.179-6.043-.118-6.046-.058-6.051.003-6.053.063-6.055.124-6.057.185-6.059.246-6.058.307-6.059.367-6.058.429-6.056.489-6.054.55-6.052.611-6.049.672-6.045.732-6.04.794-6.035.854-6.03.915-6.023.976-6.017 1.036-6.009 1.097-6.001 1.158-5.992 1.218-5.983 1.279-5.973 1.339-5.962 1.399-5.952 1.459-5.939 1.52-5.927 1.579-5.914 1.639-5.901 1.699-5.886 1.759-5.872 1.818-5.856 1.878-5.84 1.937-5.823 1.996-5.807 2.055-5.788 2.113-5.77 2.173-5.751 2.231-5.731 2.289-5.712 2.347-5.69 2.405-5.669 2.463-5.647 2.52-5.625 2.578-5.601 2.635-5.578 2.691-5.553 2.749-5.529 2.805-5.503 2.861-5.477 2.917-5.45 2.972-5.423 3.028-5.395 3.084-5.367 3.138-5.338 3.193-5.309 3.247-5.279 3.302-5.248 3.355-5.217 3.409-5.185 3.462-5.153 3.515-5.12 3.568-5.087 3.62-5.053 3.672-5.019 3.724-4.984 3.775-4.948 3.826-4.913 3.876-4.875 3.927-4.839 3.977-4.801 4.027-4.763 4.075-4.725 4.125-4.685 4.173-4.646 4.221-4.606 4.269-4.565 4.316-4.524 4.364-4.483 4.409-4.44 4.456-4.398 4.502-4.355 4.547-4.311 4.591-4.267 4.637-4.223 4.68-4.178 4.724-4.133 4.767-4.087 4.809-4.04 4.852-3.994 4.894-3.947 4.935-3.899 4.976-3.851 5.017-3.803 5.056-3.753 5.096-3.705 5.135-3.655 5.173-3.604 5.212-3.554 5.248-3.504 5.286-3.451 5.323-3.401 5.358-3.348 5.394-3.295 5.429-3.243 5.464-3.19 5.497-3.136 5.531-3.082 5.564-3.027 5.596-2.973 5.628-2.919 5.659-2.862 5.69-2.807 5.72-2.751 5.75-2.695 5.779-2.638 5.808-2.582 5.835-2.524 5.863-2.466 5.89-2.408 5.916-2.351 5.941-2.292 5.967-2.233 5.991-2.174 6.016-2.115 6.038-2.056 6.062-1.995 6.083-1.936 6.106-1.876 6.126-1.815 6.146-1.754 6.167-1.693 6.185-1.632 6.205-1.571 6.222-1.509 6.239-1.447 6.256-1.386 6.273-1.323 6.288-1.261 6.303-1.198 6.317-1.135 6.33-1.073 6.344-1.009 6.356-.947 6.368-.883 6.379-.819 6.389-.756 6.4-.692 6.408-.628 6.418-.565 6.425-.5 6.432-.436 6.439-.372 6.445-.307 6.451-.243 6.455-.178 6.459-.114 6.463-.049 6.465.016 6.468.081 6.469.145 6.47.21 6.47.275 6.47.34 6.469.405 6.467.47 6.464.535 6.461.6 6.458.665 6.453.73 6.448.794 6.443.86 6.436.924 6.429.99 6.422 1.054 6.413 1.118 6.405 1.184 6.394 1.248 6.385 1.312 6.373 1.377 6.362 1.441 6.35 1.506 6.337 1.569 6.324 1.634 6.309 1.698 6.294 1.761 6.279 1.825 6.263 1.889 6.247 1.952 6.229 2.015 6.214 2.079 6.19 2.141 6.17 2.204 6.15 2.267 6.14 2.329 6.11 2.392 6.09 2.453 6.06 2.516 6.05 2.577 6.02 2.638 5.99 2.7 5.98 2.761 5.94 2.822 5.92 2.882 5.89 2.942 5.87 3.003 5.83 3.062 5.81 3.122 5.78 3.181 5.75 3.24 5.72 3.299 5.69 3.357 5.65 3.415 5.62 3.474 5.6 3.531 5.55 3.588 5.53 3.645 5.48 3.701 5.46 3.758 5.42 3.814 5.38 3.869 5.34 3.925 5.31 3.979 5.27 4.034 5.23 4.089 5.19 4.142 5.15 4.195 5.11 4.249 5.07 4.301 5.03 4.353 4.99 4.406 4.94 4.457 4.9 4.507 4.86 4.559 4.82 4.609 4.77 4.658 4.72 4.708 4.68 4.757 4.63 4.806 4.59 4.853 4.54 4.902 4.49 4.948 4.44 4.995 4.4 5.041 4.34 5.087 4.3 5.132 4.25 5.177 4.19 5.222 4.15 5.265 4.09 5.308 4.05 5.352 3.99 5.393 3.93 5.436 3.89 5.477 3.83 5.517 3.78 5.558 3.72 5.598 3.67 5.636 3.61 5.676 3.55 5.713 3.51 5.751 3.44 5.788 3.39 5.825 3.33 5.86 3.27 5.896 3.21 5.931 3.16 5.965 3.1 5.998 3.04 6.032 2.98 6.064 2.91 6.096 2.86 6.127 2.8 6.158 2.74 6.188 2.68 6.217 2.61 6.247 2.56 6.274 2.49 6.303 2.43 6.329 2.37 6.356 2.3 6.382 2.24 6.407 2.18 6.432 2.11 6.456 2.05 6.479 1.99 6.502 1.92 6.523 1.86 6.546 1.79 6.566 1.72 6.586 1.66 6.606 1.6 6.624 1.53 6.643 1.46 6.66 1.4 6.677 1.33 6.694 1.26 6.709 1.2 6.724 1.13 6.738 1.06 6.751 1 6.765.93 6.777.86 6.788.79 6.799.73 6.81.65 6.819.59 6.828.52 6.836.46 6.843.38 6.851.32 6.856.24 6.862.18 6.867.11 6.87.04 6.874-.03 6.877-.09 6.879-.17 6.88-.23 6.881-.31 6.88-.37 6.88-.44 6.879-.51 6.876-.58 6.873-.65 6.87-.72 6.866-.79 6.86-.85 6.855-.93 6.849-.99 6.842-1.07 6.834-1.13 6.825-1.2 6.817-1.27 6.807-1.34 6.796-1.4 6.785-1.48 6.773-1.54 6.761L1437 1001l-1.68 6.73-1.75 6.72-1.81 6.7-1.89 6.69-1.95 6.67-2.02 6.66-2.08 6.63-2.15 6.62-2.22 6.6-2.29 6.57-2.35 6.56-2.42 6.54-2.49 6.51-2.55 6.49-2.62 6.47-2.68 6.44-2.75 6.42-2.82 6.39-2.88 6.36-2.94 6.34-3.01 6.32-3.07 6.28-3.14 6.26-3.2 6.22-3.26 6.2-3.33 6.16-3.39 6.14-3.45 6.1-3.51 6.07-3.58 6.03-3.64 6.01-3.7 5.96-3.76 5.94-3.82 5.89-3.88 5.86-3.94 5.83-4 5.78-4.06 5.75-4.12 5.71-4.18 5.67-4.23 5.63-4.3 5.59-4.35 5.55-4.4 5.5-4.47 5.47-4.52 5.42-4.57 5.37-4.64 5.34-4.68 5.28-4.74 5.25-4.8 5.2-4.85 5.15-4.9 5.1-4.95 5.06-5.01 5-5.06 4.96-5.11 4.92-5.16 4.86-5.21 4.81-5.26 4.76-5.31 4.71-5.36 4.66-5.41 4.6-5.45 4.55-5.5 4.5-5.55 4.45-5.6 4.39-5.64 4.34-5.69 4.28-5.73 4.23-5.78 4.17-5.81 4.11-5.87 4.06-5.9 4-5.95 3.94-5.99 3.88-6.03 3.82-6.07 3.77-6.1 3.7-6.15 3.65-6.19 3.59-6.22 3.52-6.26 3.46-6.3 3.4-6.34 3.34-6.37 3.28-6.4 3.22-6.44 3.15-6.47 3.08-6.51 3.03-6.53 2.96-6.57 2.89-6.6 2.83-6.64 2.77-6.66 2.7-6.69 2.63-6.715 2.57-6.746 2.5-6.773 2.43-6.8 2.37-6.826 2.3-6.851 2.23-6.875 2.17-6.899 2.09-6.923 2.03-6.945 1.96-6.966 1.89-6.988 1.82-7.008 1.75-7.028 1.68-7.047 1.61-7.066 1.55-7.083 1.47-7.1 1.4-7.116 1.33-7.132 1.26-7.146 1.19-7.161 1.11-7.174 1.05-7.187.97-7.199.91-7.21.83-7.221.75-7.23.69-7.24.62-7.248.54-7.256.47-7.263.39-7.269.33-7.274.25-7.28.18-7.283.11-7.287.03-7.289-.04-7.291-.11-7.292-.19-7.293-.26-7.292-.33-7.291-.4-7.29-.48-7.287-.55-7.283-.63-7.28-.7-7.275-.77-7.269-.84-7.263-.92-7.257-.99-7.248-1.06-7.24-1.14-7.231-1.2-7.221-1.29-7.211-1.35-7.199-1.43-7.187-1.5-7.174-1.57-7.161-1.64-7.146-1.72-7.132-1.79-7.116-1.86-7.099-1.93-7.082-2-7.064-2.08-7.046-2.15-7.026-2.21-7.006-2.29-6.985-2.36-6.964-2.43-6.942-2.51-6.918-2.57-6.895-2.64-6.871-2.71-6.846-2.78-6.82-2.85-6.793-2.92-6.766-2.99-6.738-3.06-6.71-3.12-6.681-3.2-6.65-3.26-6.62-3.33-6.589-3.4-6.556-3.46-6.524-3.53-6.49-3.6-6.457-3.66-6.421-3.73-6.387-3.79-6.35-3.86-6.313-3.92-6.276-3.99-6.238-4.06-6.199-4.11-6.16-4.18-6.12-4.24-6.08-4.31-6.038-4.37-5.996-4.42-5.953-4.49-5.91-4.56-5.867-4.61-5.822-4.67-5.777-4.73-5.732-4.79-5.685-4.85-5.638-4.91-5.591-4.97-5.542-5.02-5.495-5.08-5.444-5.14-5.395-5.19-5.345-5.25-5.294-5.31-5.242-5.35-5.19-5.42-5.137-5.46-5.084-5.52-5.031-5.57-4.976-5.63-4.921-5.67-4.866-5.73-4.81-5.78-4.753-5.82-4.697-5.88-4.639-5.93-4.581-5.97-4.523-6.02-4.464-6.07-4.404-6.11-4.344-6.16-4.284-6.21-4.223-6.25-4.162-6.29-4.1-6.34-4.038-6.38-3.974-6.43-3.912-6.46-3.848-6.51-3.785-6.54-3.72-6.59-3.654-6.63-3.59-6.66-3.523-6.7-3.458-6.74-3.391-6.78-3.325-6.81-3.257-6.85-3.19-6.88-3.121-6.92-3.053-6.95-2.985-6.98-2.915-7.01-2.846-7.05-2.777-7.07-2.706-7.11-2.636-7.13-2.565-7.17-2.494-7.19-2.423-7.22-2.352-7.24-2.28-7.27-2.206-7.3-2.135-7.318-2.063-7.343-1.989-7.366-1.916-7.388-1.843-7.409-1.768-7.43-1.696-7.45-1.62-7.469-1.547-7.488-1.472-7.505-1.398-7.522-1.322-7.538-1.247-7.554-1.172-7.569-1.097-7.582-1.02-7.596-.946-7.608-.87-7.62-.792-7.63-.717-7.641-.64-7.65-.565-7.659-.488-7.667-.41-7.674-.335-7.68-.257-7.686-.18-7.691-.104-7.694L1 783.775l.05-7.701.128-7.702.205-7.703.282-7.703.36-7.703.436-7.702.514-7.699.591-7.696.669-7.693.745-7.688.823-7.683.9-7.677.977-7.67 1.055-7.663 1.13-7.654 1.21-7.645 1.284-7.635 1.363-7.625 1.438-7.613 1.516-7.601 1.592-7.588 1.668-7.574 1.745-7.56 1.821-7.544 1.898-7.528 1.973-7.512 2.049-7.494 2.124-7.475 2.2-7.456 2.276-7.437 2.35-7.416 2.425-7.394 2.5-7.372 2.575-7.35 2.65-7.325 2.723-7.302 2.797-7.276 2.87-7.25 2.945-7.223 3.017-7.196 3.09-7.168 3.164-7.139 3.235-7.11 3.308-7.079 3.379-7.048 3.45-7.016 3.523-6.983 3.593-6.95 3.664-6.917 3.734-6.881 3.804-6.846 3.874-6.81 3.943-6.773 4.012-6.736 4.081-6.697 4.148-6.659 4.217-6.618 4.284-6.579 4.352-6.537 4.418-6.495 4.484-6.454 4.55-6.41 4.616-6.366 4.681-6.322 4.745-6.277 4.81-6.231 4.873-6.185 4.937-6.138 4.999-6.09 5.062-6.041 5.124-5.993 5.185-5.943 5.247-5.893 5.307-5.842 5.367-5.79 5.426-5.739 5.485-5.685 5.544-5.633 5.602-5.578 5.659-5.524 5.717-5.469 5.772-5.413 5.829-5.357 5.883-5.3 5.939-5.242 5.992-5.185 6.047-5.126 6.099-5.067 6.152-5.007 6.203-4.947 6.255-4.886 6.306-4.825 6.355-4.763 6.405-4.701 6.454-4.639 6.503-4.574 6.55-4.511 6.597-4.447 6.643-4.382 6.689-4.316 6.734-4.251 6.779-4.185 6.822-4.118 6.865-4.05 6.909-3.983 6.949-3.915 6.991-3.847 7.032-3.777 7.071-3.709 7.11-3.638 7.149-3.568 7.187-3.498 7.223-3.427 7.26-3.355 7.295-3.283 7.331-3.212 7.364-3.139 7.398-3.066 7.431-2.993 7.463-2.919 7.494-2.845 7.525-2.771 7.555-2.697 7.583-2.621 7.612-2.547 7.64-2.47 7.666-2.396 7.693-2.319 7.718-2.242 7.742-2.166 7.767-2.089 7.789-2.012 7.812-1.934 7.833-1.857 7.854-1.779 7.874-1.7 7.893-1.622 7.912-1.544 7.929-1.465 7.946-1.386 7.962-1.306 7.978-1.228 7.992-1.148 8.005-1.068 8.019-.988 8.031-.908 8.041-.828 8.053-.748 8.062-.667 8.071-.587 8.079-.506 8.086-.425 8.093-.345 8.099-.264 8.103-.182 8.108-.102 8.11-.02 8.113.06 8.115.143 8.115.223 8.116.305 8.115.386 8.113.468 8.11.548 8.107.63 8.103.712 8.099.793 8.092.874 8.086.955 8.078 1.037 8.071 1.118 8.061 1.198 8.052 1.28 8.041 1.361 8.029 1.442 8.017 1.523 8.005 1.603 7.99 1.684 7.975 1.764 7.96 1.845 7.944 1.924 7.927 2.005 7.904 2.085 7.89 2.165 7.87 2.244 7.85 2.323 7.83 2.403 7.81 2.482 7.79 2.56 7.76 2.64 7.73 2.717 7.71 2.796 7.69 2.874 7.66 2.951 7.63 3.03 7.6 3.106 7.58 3.183 7.54 3.26 7.51 3.336 7.48 3.412 7.45 3.489 7.42 3.563 7.38 3.64 7.35 3.713 7.32 3.789 7.27 3.862 7.24 3.937 7.21 4.01 7.16 4.084 7.13 4.156 7.09 4.228 7.04 4.301 7.01 4.373 6.96 4.443 6.92 4.515 6.88 4.585 6.83 4.655 6.79 4.725 6.74 4.794 6.7 4.863 6.65 4.932 6.6 4.999 6.55 5.066 6.51 5.134 6.45 5.2 6.4 5.266 6.36 5.331 6.3 5.397 6.25 5.461 6.2 5.525 6.14 5.589 6.09 5.651 6.03 5.715 5.98 5.776 5.92 5.837 5.86 5.898 5.81 5.959 5.75 6.018 5.69 6.077 5.63 6.136 5.57 6.194 5.51 6.252 5.45 6.308 5.39 6.364 5.32 6.42 5.27 6.475 5.2 6.53 5.13 6.583 5.07 6.637 5.01 6.689 4.94 6.74 4.87 6.792 4.81 6.843 4.73 6.893 4.68 6.941 4.6 6.991 4.53 7.038 4.47 7.086 4.39 7.132 4.33 7.178 4.25 7.223 4.19 7.268 4.11 7.311 4.04 7.355 3.97 7.397 3.89 7.439 3.82 7.479 3.75 7.52 3.67 7.559 3.6 7.598 3.52 7.636 3.44 7.674 3.38 7.71 3.29 7.745 3.22 7.781 3.14 7.815 3.06 7.848 2.99 7.881 2.9 7.913 2.83 7.944 2.75 7.975 2.67 8.004 2.6 8.033 2.51 8.061 2.43 8.088 2.35 8.115 2.27 8.14 2.19 8.166 2.11 8.189 2.03 8.212 1.94 8.235 1.86 8.257 1.79 8.277 1.69 8.298 1.62 8.316 1.53 8.335 1.45 8.352 1.37 8.37 1.28 8.385 1.2 8.399 1.12 8.415 1.03 8.427.95 8.44.86 8.452.78 8.462.7 8.473.61 8.481.52 8.49.44 8.498.36 8.504" stroke="#FFFEF5"/>
</svg>`