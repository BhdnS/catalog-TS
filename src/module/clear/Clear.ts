import { Catalog } from '../catalog/Catalog';
import { TClear } from './TClear';

export class Clear extends Catalog {
  private clear: TClear['clear'];

  constructor() {
    super();
    this.clear = document.querySelector('#clear');
  }

  public clickClear(): void {
    this.clear?.addEventListener('click', () => {
			Catalog.count = 0;
			if (this.tbody) {
				this.tbody.innerHTML = '';
        this.updateLocalStorage();
			}
		})
  }
}