class SearchingController {
  list: Map<string, any> = new Map<string, any>();

  formatData(list: Array<any>, type: "CATEGORY" | "GENDER") {
    this.list.set("all", {
      id: "",
      name: type === "CATEGORY" ? "All categories" : "All genders",
    });
    list.forEach((item) => {
      this.list.set(item?.id, {
        id: item?.id,
        name: item?.name,
      });
    });
    return this.list;
  }

  get getMappedList() {
    return this.list;
  }

  getList() {
    return Array.from(this.list.values() ?? []);
  }

  get getMapList() {
    return this.list;
  }
}

export default SearchingController;
