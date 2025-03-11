import Realm from 'realm';

const RealmHandle = <P>(Model: any) => {
  const realm = new Realm({schema: [Model]});

  return {
    // Get All Items
    getAll: () => realm.objects(Model),

    //Addition of Item
    add: (item: P | P[]) => {
      if (Array.isArray(item)) {
        realm.write(() => {
          item.forEach((_item: P) => {
            realm.create<P & Realm.Object>(Model, _item as P & Realm.Object);
          });
        });
        return;
      }
      realm.write(() => {
        realm.create<P & Realm.Object>(Model, item as P & Realm.Object);
      });
    },

    //Update of Item
    updateProduct: (id: string, updatedProduct: P) => {
      const product = realm.objectForPrimaryKey(Model, id);
      if (product) {
        realm.write(() => {
          const updateObj = updatedProduct as Record<string, any>;
          Object.keys(updateObj).forEach(key => {
            product[key as keyof typeof product] = updateObj[key];
          });
        });
      }
    },

    //Delete Item
    deleteProduct: (id: string) => {
      const product = realm.objectForPrimaryKey(Model, id);
      if (product) {
        realm.write(() => {
          realm.delete(product);
        });
      }
    },
  };
};

export default RealmHandle;
