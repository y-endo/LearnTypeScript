class Accordion {
  private className: { [key: string]: string };

  constructor() {
    this.className = {
      trigger: 'js-accordion-trigger'
    };
  }

  public registerEventHandler(): void {
    document.addEventListener('click', this.handleClick, false);
  }

  public unregisterEventHandler(): void {
    document.removeEventListener('click', this.handleClick, false);
  }

  private handleClick = (event: UIEvent): void => {
    const trigger = (event.target as HTMLElement).closest(`.${this.className.trigger}`);

    if (trigger === null) return;

    let expanded = trigger.getAttribute('aria-expanded') || 'false';
    expanded = expanded === 'true' ? 'false' : 'true';

    trigger.setAttribute('aria-expanded', expanded);

    const panelId = trigger.getAttribute('aria-controls') || '';

    if (expanded === 'true') {
      this.open(panelId);
    } else {
      this.close(panelId);
    }
  };

  public open(panelId: string): void {
    const panel = document.querySelector<HTMLElement>('#' + panelId);
    if (panel === null) return;

    panel.style.height = panel.scrollHeight + 'px';
  }

  public close(panelId: string): void {
    const panel = document.querySelector<HTMLElement>('#' + panelId);
    if (panel === null) return;

    panel.style.height = '';
  }
}

export default new Accordion();
