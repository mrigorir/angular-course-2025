import { GiphyItem } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';

export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    const { id, title, url } = item;

    return {
      id,
      title,
      url,
    };
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
