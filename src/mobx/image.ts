import axios from 'axios';
import { runInAction, observable, action, makeAutoObservable } from 'mobx';
import React from 'react';
import { PhotosAPIType } from 'src/types';
import { getApiPath, getResultFromStock } from 'src/utils/api';

class ImageStore {
  images: PhotosAPIType[] = [];
  offset = 0;
  isEnd = false;
  stockId: 0 | 1 = 0;

  constructor() {
    makeAutoObservable(this, {
      images: observable,
      offset: observable,
      isEnd: observable,
      stockId: observable,
      getImage: action.bound,
      changeStock: action.bound,
    });
  }

  async getImage() {
    const apiPatch = getApiPath(this.stockId, this.offset);

    try {
      const request = await axios.get(apiPatch).then((req) => req.data);

      const data = getResultFromStock(this.stockId, request);

      runInAction(() => {
        if (this.offset > data.total_photos && this.stockId === 0) {
          this.isEnd = true;
        }
        this.images = [...this.images, ...data.photos];
        this.offset += 10;
      });
    } catch (error) {}
  }

  changeStock(id: 0 | 1) {
    this.stockId = id;
    this.images = [];
    this.offset = 0;
    this.getImage();
  }
}

export const imageStore = new ImageStore();

export const ImageStoreContext = React.createContext(imageStore);
export const useImageStore = () => React.useContext(ImageStoreContext);
