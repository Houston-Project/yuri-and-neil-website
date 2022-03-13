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

const SVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 840 840" class="constellation-path" id="constellation-path">
  <g id="spirals" transform="translate(420,420) rotate(0)" style="fill:none;stroke-width:6px;stroke-linecap:round;">
    <path id="spiral1" stroke="#FFFEF5" d="M0,0C3.36,0.06,6.6,-2.82,7.07,-7.07C7.66,-11.26,5.28,-16.67,0,-20C-5.18,-23.4,-13.27,-24.43,-21.21,-21.21C-29.13,-18.12,-36.69,-10.51,-40,0C-43.42,10.46,-42.3,23.68,-35.36,35.36C-28.53,47,-15.79,56.71,0,60C15.69,63.43,34.14,60.2,49.5,49.5C64.88,38.98,76.71,21.03,80,0C83.43,-20.92,78.08,-44.6,63.64,-63.64C49.44,-82.74,26.27,-96.74,0,-100C-26.16,-103.45,-55.05,-95.94,-77.78,-77.78C-100.6,-59.88,-116.76,-31.53,-120,0C-123.48,31.43,-113.8,65.49,-91.92,91.92C-70.34,118.47,-36.76,136.79,0,140C36.66,143.5,75.94,131.67,106.07,106.07C136.34,80.79,156.81,42,160,0C163.53,-41.9,149.54,-86.4,120.21,-120.21C91.24,-154.2,47.24,-176.83,0,-180C-47.13,-183.56,-96.85,-167.4,-134.35,-134.35C-172.06,-101.7,-196.86,-52.47,-200,0C-203.55,52.4,-185.28,107.29,-148.49,148.49C-112.14,189.9,-57.74,216.9,0,220C57.63,223.58,117.75,203.14,162.63,162.63C207.77,122.6,236.92,62.97,240,0C243.62,-62.86,220.98,-128.21,176.78,-176.78C133.05,-225.63,68.21,-256.95,0,-260C-68.13,-263.64,-138.65,-238.85,-190.92,-190.92C-243.49,-143.49,-276.98,-73.47,-280,0C-283.66,73.36,-256.71,149.1,-205.06,205.06C-153.94,261.36,-78.71,297,0,300C78.6,303.69,159.56,274.58,219.2,219.2C279.23,164.4,317.02,83.94,320,0C323.72,-83.84,292.44,-170.01,233.35,-233.35C174.84,-297.12,89.21,-337.04,0,-340C-89.07,-343.71,-180.46,-310.32,-247.49,-247.49C-315,-185.31,-357.03,-94.41,-360,0C-363.74,94.33,-328.18,190.91,-261.63,261.63C-195.75,332.86,-99.67,377.06,0,380C99.57,383.76,201.36,346.05,275.77,275.77C350.73,206.2,397.08,104.91,400,0"/>
   </g>
</svg>
`
