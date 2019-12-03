const SmoothScroll = {
  registerEventHandler(): void {
    document.addEventListener('click', this.handleClick);
  },
  handleClick(event: UIEvent): void {
    // クリックされた要素から直近の祖先（.js-scroll-trigger）
    const trigger = (event.target as HTMLElement).closest('.js-scroll-trigger');

    // js-scroll-triggerクラスを持っていない場合はここで処理終了
    if (trigger === null) return;
    // アンカータグじゃない場合もここで処理終了
    if (!(trigger instanceof HTMLAnchorElement)) return;

    // aタグのリンク機能を止める
    event.preventDefault();

    // スクロール先の要素
    const destination = document.querySelector(trigger.hash);
    if (destination === null) return;

    // スクロール先の位置（y軸）
    const top = destination.getBoundingClientRect().top + window.pageYOffset;

    // スムーズスクロールを実行する
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }
};

export default SmoothScroll;
