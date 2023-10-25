import { TTheme } from './TTheme'
import { moon, sun } from './imgTheme'

export class Theme {
	private body: TTheme['body'];
	private img: TTheme['img'];
	
	constructor() {
		this.body = document.querySelector('body')
		this.img = document.querySelector('#theme')
	}

	public clickTheme(): void {
		this.img?.addEventListener('click', () => {
			if (this.img?.classList.contains('sun')) {
				this.darkState();
			} else {
				this.lightState();
			}
		})
	}

	public loadLocalStorage(): void {
		const theme: string | null = localStorage.getItem('theme');
		if (theme === 'dark') {
			this.darkState();
		} else {
			this.lightState();
		}
	}

	private darkState(): void {
		if (this.body && this.img) {
			this.body.classList.add('dark');
			this.img.classList.remove('sun');
			this.img.classList.add('moon')
			this.img.src = moon;

			localStorage.setItem('theme', 'dark')
		} 
	}

	private lightState(): void {
		if (this.body && this.img) {
			this.body.classList.remove('dark');
			this.img.classList.add('sun');
			this.img.classList.remove('moon')
			this.img.src = sun;

			localStorage.setItem('theme', 'light');
		}
	}

}