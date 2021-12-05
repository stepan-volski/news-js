import './sources.css';

export interface newsItem {
  category: string,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string,
}

export class Sources {
  draw(data: newsItem[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;

    data.forEach((item: newsItem) => {
      const sourceClone = sourceItemTemp?.content.cloneNode(true) as DocumentFragment;

      sourceClone.querySelector('.source__item-name')!.textContent = item.name;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}
