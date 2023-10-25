import { TCatalog } from './TCatalog';
import { del } from './imgCatalog';

export class Catalog {
  static count: number = 0;

  public tbody: TCatalog['tbody'];
	
  private btn: TCatalog['btn'];
  private nameInput: TCatalog['nameInput'];
  private priceInput: TCatalog['priceInput'];

  constructor() {
    this.btn = document.querySelector('#btn');
    this.tbody = document.querySelector('#tbody');
    this.nameInput = document.querySelector('#nameInput');
    this.priceInput = document.querySelector('#priceInput');
  }

  public clickBtn(): void {
    this.btn?.addEventListener('click', (e) => {
      let text = this.textInput();
      e.preventDefault();
      if (this.tbody) {
        this.tbody.insertAdjacentHTML('beforeend', text);
        this.updateLocalStorage();
        if (this.nameInput && this.priceInput) {
          this.nameInput.value = '';
          this.priceInput.value = '';
        }
      }
    });
  }

  public clickDel(): void {
    this.tbody?.addEventListener('click', (e) => {
      const targetElement = e.target as HTMLElement;
      if (targetElement.classList.contains('img')) {
        const row = targetElement.closest('tr');
        row?.remove();
        this.updateLocalStorage();
        this.tbodyChild();
      }
    });
  }

  public loadTextLocalStorage(): void {
    const text: string | null = localStorage.getItem('userText');
    if (text && this.tbody) {
      this.tbody.innerHTML = text;
    }
  }

  protected updateLocalStorage(): void {
    if (this.tbody) {
      const text: string = this.tbody.innerHTML;
      localStorage.setItem('userText', text);
    }
  }

  private tbodyChild(): void {
    if (this.tbody && this.tbody.childElementCount === 0) {
      Catalog.count = 0;
    }
  }

  private textInput(): string {
    let valueName: string | undefined = this.nameInput?.value;
    let valuePrise: string | undefined = this.priceInput?.value;
    let text: string = '';
    if (valueName && valuePrise) {
      Catalog.count++;
      text = `
        <tr>
          <td>${Catalog.count}</td>
          <td>${valueName}</td>
          <td>${valuePrise}</td>
          <td><img class="img" src="${del}"></td>
        </tr>
      `;
    }
    return text;
  }
}