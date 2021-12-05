import { News, article } from './news/news';
import { Sources, newsItem } from './sources/sources';

export interface news {
  articles: article[],
  status: string,
  totalResults: number,
}

export interface sources {
  sources: newsItem[],
  status: string,
}

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: news): void {
    const values: article[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: sources): void {
    const values: newsItem[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }

}