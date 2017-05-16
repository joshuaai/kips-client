import { observable, action } from 'mobx';

import Api from './Helpers';

class Categories {
  path = '/categs';
  @observable all = [];
  @observable allLinks = [];
  @observable isLoading = false;
  @observable catId = null;
  @observable catName = null;

  @action async fetchAll() {
    this.isLoading = false;
    const response = await Api.get(this.path);
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
    }
  }

  @action async fetchLinks(categoryId) {
    this.isLoading = false;
    const response = await Api.get(`${this.path}/${categoryId}/lins`);
    const status = await response.status;

    if (status === 200) {
      this.allLinks = await response.json();
    }
  }

  @action setCatId(id) {
    this.catId = id;
  }

  @action setCatName(name) {
    this.catName = name;
  }

  @action async add(data) {
    const response = await Api.post(this.path, data);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action find(categoryId) {
    return (
      this.all.slice().filter(
        c => c.id === parseInt(categoryId, 10)
      )[0]
    );
  }

  @action async remove(categoryId) {
    this.isLoading = true;
    const response = await Api.delete(`${this.path}/${categoryId}`);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }

  @action async addLink(data, categoryId) {
    const response = await Api.post(`${this.path}/${categoryId}/lins`, data);
    const status = await response.status;

    if (status === 201) {
      this.fetchLinks(categoryId);
    }
  }

  @action async removeLink(linkId, categoryId) {
    this.isLoading = true;
    const response = await Api.delete(`${this.path}/${categoryId}/lins/${linkId}`);
    const status = await response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchLinks(categoryId);
    }
  }
}

export default new Categories();