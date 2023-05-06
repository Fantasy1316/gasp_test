import { gsap } from 'gsap'

const SizeStatte = {
	BIG: 'big',
	SMALL: 'small'
}

class Navbar {
	sizeState = undefined

	constructor() {
		this.sizeState = SizeStatte.BIG
	}

	adjust = () => {
		const currentState =
			window.innerWidth > 800 ? SizeStatte.BIG : SizeStatte.SMALL

		if (this.sizeState !== currentState) {
			this.sizeState = currentState
			this._navAdjust()
		}
	}

	_navAdjust = () => {
		switch (this.sizeState) {
			case SizeStatte.SMALL:
				this._navBecomeSmall()
				break

			case SizeStatte.BIG:
				this._navBecomeBig()
				break

			default:
				break
		}
	}

	_navBecomeSmall = () => {
		const tweem = gsap.timeline()

		tweem.to('nav', {
			direction: 0.5,
			ease: 'power2',
			opacity: 0,
			x: 300,
			display: 'none'
		})
		tweem.to('header i', { direction: 0.3, opacity: 1, display: 'flex' })
	}

	_navBecomeBig = () => {
		const tweem = gsap.timeline()

		tweem.to('header i', { direction: 0.3, opacity: 0, display: 'none' })
		tweem.to('nav', {
			direction: 0.5,
			ease: 'power2',
			opacity: 1,
			x: 0,
			display: 'flex'
		})
		gsap.to('.menu', {
			duration: 1,
			ease: 'power2',
			opacity: 0,
			display: 'none'
		})
	}
}

const navbar = new Navbar()

export { navbar }
